import { useMutation, useQuery } from 'react-query';
import Cookies from 'universal-cookie';
import api from '../api';
import { useAppDispatch, useAppSelector } from '../state/hooks';
import { actions, actions as userActions } from '../state/user/reducer';
import { handleAlert, handleIsTenantUser } from './functions';
import { clearCookies, emptyUser, handleSetProfile } from './loginFunctions';
import { filteredRoutes } from './routes';
import { User } from './types';

const cookies = new Cookies();

export const useFilteredRoutes = () => {
  return filteredRoutes(useGetCurrentProfile());
};

export const useGetCurrentProfile = () => {
  const profiles = useAppSelector((state) => state.user.userData.profiles);
  const profileId = cookies.get('profileId');
  const currentProfile = profiles?.find(
    (profile) => profile.id.toString() === profileId?.toString(),
  );
  return currentProfile;
};

export const useIsTenantUser = () => {
  return handleIsTenantUser(useGetCurrentProfile());
};

export const useEGatesSign = () => {
  const { mutateAsync, isLoading } = useMutation(api.eGatesSign, {
    onError: () => {
      handleAlert();
    },
    onSuccess: ({ url }) => {
      window.location.replace(url);
    },
    retry: false,
  });

  return { isLoading, mutateAsync };
};

export const useUserInfo = () => {
  const dispatch = useAppDispatch();
  const token = cookies.get('token');

  const { isLoading } = useQuery([token], () => api.getUserInfo(), {
    onError: () => {
      clearCookies();
      dispatch(userActions.setUser(emptyUser));
    },
    onSuccess: (data: User) => {
      if (data) {
        handleSetProfile(data.isAgreedToTermsOfService, data.profiles);
        dispatch(userActions.setUser({ userData: data, loggedIn: true }));
      }
    },
    retry: false,
    enabled: !!token,
  });

  return { isLoading };
};
export const useLogoutMutation = () => {
  const dispatch = useAppDispatch();

  const { mutateAsync } = useMutation(() => api.logout(), {
    onError: () => {
      handleAlert();
    },
    onSuccess: () => {
      clearCookies();
      dispatch(actions.setUser(emptyUser));
    },
  });

  return { mutateAsync };
};
