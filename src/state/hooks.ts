import { TableData, TableRow } from '@aplinkosministerija/design-system';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { handleAlert } from '../utils/functions';
import type { AppDispatch, RootState } from './store';

interface TableDataProp {
  endpoint: () => Promise<any>;
  mapData: (props: any) => TableRow[];
  dependencyArray: any[];
  name: string;
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTableData = ({ endpoint, mapData, dependencyArray, name }: TableDataProp) => {
  const [tableData, setTableData] = useState<TableData>({ data: [] });

  const { isLoading } = useQuery([name, dependencyArray], () => endpoint(), {
    onError: () => {
      handleAlert();
    },
    onSuccess: (list) => {
      setTableData({
        data: mapData(list?.rows || []),
        totalPages: list?.totalPages,
      });
    },
  });

  return { tableData, loading: isLoading };
};

export const useGenericTablePageHooks = () => {
  const [searchParams] = useSearchParams();
  const { page } = Object.fromEntries([...Array.from(searchParams)]);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  return { page, navigate, dispatch, location };
};
