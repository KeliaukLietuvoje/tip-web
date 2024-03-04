import { menuLabels } from './texts';

export const slugs = {
  profile: '/profilis',
  cantLogin: '/negalima_jungtis',
  login: '/login',
  profiles: '/profiliai',
  forms: '/turizmo-objektai',
  newForm: '/turizmo-objektai/naujas',
  form: (id: string) => `/turizmo-objektai/${id}`,
  tenantUsers: `/imones_darbuotojai`,
  tenantUser: (id?: string) => `/imones_darbuotojai/${id}`,
  newTenantUser: `/imones_darbuotojai/naujas`,
  placesMap: `/radavieciu-zemelapis`,
  generateApiKey: '/generuoti-api-rakta',
};

export const externalRoutes = [
  {
    label: menuLabels.forms,
    slug: slugs.forms,
    internal: true,
  },
];
