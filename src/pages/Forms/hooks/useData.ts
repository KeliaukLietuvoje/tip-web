import { isEmpty } from 'lodash';
import Api from '../../../api';
import { DynamicFilterProps } from '../../../components/other/DynamicFilter';
import { NotFoundProps } from '../../../components/other/NotFound';
import { ButtonInfo } from '../../../components/wrappers/PageWrapper';
import { actions } from '../../../state/filters/reducer';
import { useAppSelector, useGenericTablePageHooks, useTableData } from '../../../state/hooks';
import { slugs } from '../../../utils/slugs';
import { buttonsTitles, emptyStateLabels, emptyStateUrlLabels } from '../../../utils/texts';
import { filterConfig, rowConfig } from '../config';
import { mapFormFilters, mapForms } from '../functions';

export const useData = () => {
  const { dispatch, navigate, page } = useGenericTablePageHooks();
  const filters = useAppSelector((state) => state.filters.formFilters);

  const { tableData, loading } = useTableData({
    endpoint: () =>
      Api.getForms({
        page,
        filter: mapFormFilters(filters),
      }),
    mapData: (list) => mapForms(list),
    dependencyArray: [page, filters],
    name: 'forms',
  });

  const buttonInfo: ButtonInfo = {
    url: slugs.newForm,
    loading,
    label: buttonsTitles.newForm,
  };

  const filterInfo: DynamicFilterProps = {
    loading,
    filterConfig: filterConfig,
    isFilterApplied: !isEmpty(filters),
    rowConfig: rowConfig,
    onSetFilters: (filters: any) => dispatch(actions.setFormFilters(filters)),
    filters: filters,
  };

  const notFoundInfo: NotFoundProps = {
    url: slugs.newForm,
    urlLabel: emptyStateUrlLabels.form,
    label: emptyStateLabels.form,
  };

  return {
    notFoundInfo,
    filterInfo,
    buttonInfo,
    navigate,
    loading,
    tableData,
  };
};
