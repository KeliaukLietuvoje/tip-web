import { map } from 'lodash';
import { NavigateFunction } from 'react-router-dom';
import { toast } from 'react-toastify';
import { default as Api } from '../api';
import { RolesTypes } from './constants';
import { roleLabels, validationTexts } from './texts';
import { Profile } from './types';

export const handleAlert = (responseError?: string) => {
  toast.error(
    validationTexts[responseError as keyof typeof validationTexts] || validationTexts.error,
    {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    },
  );
};

export const getRolesTypes = () =>
  map(RolesTypes, (role) => ({
    id: role,
    label: roleLabels[role],
  }));

export const handleSuccess = (message: string) => {
  toast.success(message, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
  });
};

export const isNew = (id?: string) => !id || id === 'naujas';

export const getUserList = async () => {
  return await Api.tenantUsers({
    pageSize: '99999',
  });
};

export const handleIsTenantUser = (profile?: Profile) => !!profile?.role;

export const handleIsTenantOwner = (role?: RolesTypes) => role === RolesTypes.ADMIN;

export const handleNavigate = (
  slug: string,
  navigate: NavigateFunction,
  show: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  navigate(slug);
  show(false);
};

export const getVisitInfoOptions = async (input: string, page: number) => {
  return await Api.getVisitInfos({
    filter: { name: input },
    page,
  });
};

export const getAttendanceTimeOptions = async (input: string, page: number) => {
  return await Api.getAttendanceTimes({
    filter: { name: input },
    page,
  });
};
export const getAdditionalInfoOption = async (input: string, page: number) => {
  return await Api.getAdditionalInfos({
    filter: { name: input },
    page,
  });
};
export const getAttendanceInfoOptions = async (input: string, page: number) => {
  return await Api.getAttendanceInfos({
    filter: { name: input },
    page,
  });
};

export const getSubCategoriesOptions = async (input: string, page: number, ids: []) => {
  return await Api.getCategories({
    filter: { name: input },
    query: { parent: { $in: ids } },
    page,
  });
};

const env = import.meta.env;
