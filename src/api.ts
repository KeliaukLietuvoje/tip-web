import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import { isEmpty } from 'lodash';
import Cookies from 'universal-cookie';
import { Populations, Resources, SortFields } from './utils/constants';
import { Category, Form, FormFiltersProps, Group, Tenant, User, UserFilters } from './utils/types';
const cookies = new Cookies();

interface GetAll {
  resource: string;
  page?: number | string;
  populate?: string[];
  filter?: string | any;
  query?: any;
  pageSize?: string;
  search?: string;
  searchFields?: string[];
  sort?: string[];
  scope?: string;
  fields?: string[];
}

export interface GetAllResponse<T> {
  rows: T[];
  totalPages: number;
  page?: number;
  pageSize: number;
  error?: any;
}

interface TableList<T = any> {
  filter?: T;
  page?: number | string;
  id?: string;
  pageSize?: string;
  isMy?: boolean;
  query?: any;
  scope?: string;
  fields?: string[];
  resource?: Resources;
  search?: string;
}

interface AuthApiProps {
  resource: string;
  params?: any;
}

interface GetOne {
  resource: string;
  id?: string;
  populate?: string[];
  scope?: string;
}
interface UpdateOne {
  resource?: string;
  id?: string;
  params?: any;
}

interface Delete {
  resource: string;
  id: string;
}

interface Post {
  resource: string;
  params?: any;
}
const profileId = cookies.get('profileId');

class Api {
  private readonly proxy: string = '/api';

  private axios: AxiosInstance;

  constructor() {
    this.axios = Axios.create();

    this.axios.interceptors.request.use(
      (config) => {
        if (!config.url) {
          return config;
        }
        const token = cookies.get('token');
        if (token) {
          config.headers!.Authorization = 'Bearer ' + token;

          if (!isNaN(profileId)) config.headers!['X-Profile'] = profileId;
        }
        config.url = this.proxy + config.url;

        return config;
      },
      (error) => {
        Promise.reject(error);
      },
    );
  }

  errorWrapper = async (endpoint: () => Promise<AxiosResponse<any, any>>) => {
    const { data } = await endpoint();

    return data;
  };

  get = async ({
    resource,
    page,

    pageSize,
    ...rest
  }: GetAll) => {
    const config = {
      params: {
        pageSize: pageSize || 10,
        page: page || 1,
        ...rest,
      },
    };

    return this.errorWrapper(() => this.axios.get(`/${resource}`, config));
  };

  getAll = async ({ resource, ...rest }: GetAll) => {
    const config = {
      params: {
        ...rest,
      },
    };

    return this.errorWrapper(() => this.axios.get(`/${resource}/all`, config));
  };

  getOne = async ({ resource, id, populate, scope }: GetOne) => {
    const config = {
      params: {
        ...(!!populate && { populate }),
        ...(!!scope && { scope }),
      },
    };

    return this.errorWrapper(() => this.axios.get(`/${resource}${id ? `/${id}` : ''}`, config));
  };

  patch = async ({ resource, id, params }: UpdateOne) => {
    return this.errorWrapper(() => this.axios.patch(`/${resource}${id ? `/${id}` : ''}`, params));
  };

  delete = async ({ resource, id }: Delete) => {
    return this.errorWrapper(() => this.axios.delete(`/${resource}/${id}`));
  };
  post = async ({ resource, params }: Post) => {
    return this.errorWrapper(() => this.axios.post(`/${resource}`, params));
  };

  getUserInfo = async (): Promise<User> => {
    return this.errorWrapper(() => this.axios.get('/users/me'));
  };

  logout = async () => {
    return this.errorWrapper(() => this.axios.post('/users/logout'));
  };

  authApi = async ({ resource, params }: AuthApiProps) => {
    return this.errorWrapper(() => this.axios.post(`/${resource}`, params || {}));
  };

  formDisable = async (id: string): Promise<Form> => {
    return await this.patch({
      resource: `${Resources.FORMS}/${id}/disable`,
    });
  };

  refreshToken = async () => {
    return this.authApi({
      resource: Resources.REFRESH_TOKEN,
      params: { token: cookies.get('refreshToken') },
    });
  };

  login = async (params: any) => {
    return this.authApi({
      resource: Resources.LOGIN,
      params,
    });
  };

  eGatesSign = async () => {
    return this.authApi({
      resource: Resources.E_GATES_SIGN,
    });
  };

  eGatesLogin = async (params) => {
    return this.authApi({
      resource: Resources.E_GATES_LOGIN,
      params,
    });
  };

  getForms = async ({
    filter,
    page,
    pageSize,
    query,
  }: TableList<FormFiltersProps>): Promise<GetAllResponse<Form>> =>
    await this.get({
      resource: Resources.FORMS,
      populate: [Resources.CREATED_BY],
      sort: [SortFields.CREATED_AT],
      page,
      query,
      filter,
      pageSize,
    });

  getForm = async (id: string): Promise<Form> =>
    await this.getOne({
      resource: Resources.FORMS,
      populate: [
        Populations.CAN_EDIT,
        Populations.ATTENDANCE_INFO,
        Populations.GEOM,
        Populations.VISIT_INFO,
        Populations.ATTENDANCE_TIME,
        Resources.ADDITIONAL_INFOS,
      ],
      id,
    });
  getFormGroups = async (): Promise<Group[]> =>
    await this.get({
      resource: Resources.FORMS_GROUPS,
      populate: [Populations.CHILDREN],
    });

  generateApiKey = async (): Promise<{ apiKey: string }> => {
    return await this.post({
      resource: Resources.GENERATE_API_KEY,
    });
  };

  createForm = async (params: any): Promise<Form> => {
    return await this.post({
      resource: Resources.FORMS,
      params,
    });
  };

  updateForm = async (id: string, params: any): Promise<Form> => {
    return await this.patch({
      resource: Resources.FORMS,
      params,
      id,
    });
  };

  deleteForm = async (id: string): Promise<User> =>
    await this.delete({
      resource: Resources.FORMS,
      id,
    });

  tenantUsers = async ({
    filter,
    page,
    pageSize,
  }: TableList<UserFilters>): Promise<GetAllResponse<User>> =>
    await this.get({
      resource: Resources.USERS,
      page,
      populate: [Populations.ROLE],
      sort: [SortFields.LAST_NAME],
      filter,
      pageSize,
    });

  tenantUser = async (id: string): Promise<User> =>
    await this.getOne({
      resource: Resources.USERS,
      populate: [Populations.ROLE],
      id,
    });

  getTenant = async (): Promise<Tenant> =>
    await this.getOne({
      resource: Resources.TENANTS,
      id: profileId,
    });

  createTenantUser = async (params: any): Promise<User> => {
    return await this.post({
      resource: Resources.USERS,
      params,
    });
  };

  updateTenantUser = async (params: any, id?: string): Promise<User> => {
    return await this.patch({
      resource: Resources.USERS,
      params,
      id,
    });
  };

  deleteTenantUser = async (id: string): Promise<User> =>
    await this.delete({
      resource: Resources.USERS,
      id,
    });

  updateProfile = async (id?: string, params?: any): Promise<User> =>
    await this.patch({
      resource: Resources.USERS,
      params,
      id,
    });

  agreeToTermsOfService = async (): Promise<User> =>
    await this.patch({
      resource: Resources.AGREE_TO_TERMS_OF_SERVICE,
    });

  getMapToken = async () =>
    await this.getOne({
      resource: Resources.MAPS_AUTH,
    });

  getAttendanceInfos = async ({ filter, page, query }: TableList): Promise<any[]> =>
    await this.get({
      resource: Resources.ATTENDANCE_INFOS,
      query,
      page,
      filter,
    });

  getAdditionalInfos = async ({ filter, page, query }: TableList): Promise<any[]> =>
    await this.get({
      resource: Resources.ADDITIONAL_INFOS,
      query,
      page,
      filter,
    });

  getCategories = async ({ filter, page, query }: TableList): Promise<GetAllResponse<Category>> =>
    await this.get({
      resource: Resources.CATEGORIES,
      populate: [Populations.CHILDREN],
      query,

      page,
      filter,
    });

  getAllCategories = async ({ filter, page }: TableList): Promise<Category[]> =>
    await this.getAll({
      resource: Resources.CATEGORIES,
      populate: [Populations.CHILDREN],
      query: { parent: { $exists: false } },
      fields: ['id', 'name', 'children'],
      page,
      filter,
    });

  getVisitInfos = async ({ filter, page, query }: TableList): Promise<any[]> =>
    await this.get({
      resource: Resources.VISIT_INFOS,
      query,
      page,
      filter,
    });

  getAttendanceTimes = async ({ filter, page, query }: TableList): Promise<any[]> =>
    await this.get({
      resource: Resources.ATTENDANCE_TIMES,
      query,
      page,
      filter,
    });

  uploadFormPhotos = async (files: File[]) =>
    await this.uploadFiles({
      resource: Resources.FORMS,
      files,
    });

  getFormHistory = async ({ page, pageSize, id }: TableList) =>
    await this.get({
      resource: `${Resources.FORMS}/${id}/${Resources.HISTORY}`,
      page,
      pageSize,
    });

  uploadFiles = async ({
    resource,
    files = [],
  }: {
    resource: Resources;
    files: File[];
  }): Promise<any> => {
    if (isEmpty(files)) return [];

    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
    };

    try {
      const data = await Promise.all(
        files?.map(async (file) => {
          const formData = new FormData();
          formData.append('file', file);
          const { data } = await this.axios.post(
            `/${resource}/${Resources.UPLOAD}`,
            formData,
            config,
          );
          return data;
        }),
      );

      return data?.map((file) => {
        return {
          name: file.filename,
          size: file.size,
          url: file?.url,
        };
      });
    } catch (e: any) {
      return { error: e.response.data.message };
    }
  };
}

const api = new Api();

export default api;
