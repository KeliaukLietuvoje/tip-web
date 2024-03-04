import Form from '../pages/Form';
import Forms from '../pages/Forms';
import GenerateApiKey from '../pages/GenerateApiKey';
import ProfilePage from '../pages/Profile';
import Profiles from '../pages/Profiles';
import TenantUserForm from '../pages/TenantUserForm';
import TenantUsers from '../pages/TenantUsers';
import { handleIsTenantOwner, handleIsTenantUser } from './functions';
import { slugs } from './slugs';
import { menuLabels } from './texts';
import { Profile } from './types';

const routes = [
  {
    label: menuLabels.profile,
    slug: slugs.profile,
    dropDown: true,
    iconName: 'person',
    component: <ProfilePage />,
  },
  {
    label: menuLabels.profile,
    slug: slugs.forms,
    component: <Forms />,
  },
  {
    slug: slugs.form(':id'),
    component: <Form />,
  },
  {
    label: menuLabels.tenantUsers,
    iconName: 'group',
    slug: slugs.tenantUsers,
    dropDown: true,
    tenantOwner: true,
    component: <TenantUsers />,
  },
  {
    slug: slugs.tenantUser(':id'),
    tenantOwner: true,
    component: <TenantUserForm />,
  },

  {
    label: menuLabels.generateApiKey,
    slug: slugs.generateApiKey,
    iconName: 'key',
    dropDown: true,
    tenantOwner: true,
    component: <GenerateApiKey />,
  },

  {
    slug: slugs.profiles,
    component: <Profiles />,
  },
];

export const filteredRoutes = (profile?: Profile): any =>
  routes.filter((route) => {
    if (!route?.slug) return false;
    if (route.tenantOwner) {
      return handleIsTenantOwner(profile?.role);
    }
    if (route.tenantOwner) {
      return handleIsTenantUser(profile);
    }

    return true;
  });
