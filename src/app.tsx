import { Button, CheckBox, device, Modal } from '@aplinkosministerija/design-system';
import { useCallback, useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useMutation, useQueryClient } from 'react-query';
import {
  Location,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

import Cookies from 'universal-cookie';
import api from './api';
import DefaultLayout from './components/layouts/DefaultLayout';
import LoaderComponent from './components/other/LoaderComponent';
import { CantLogin } from './pages/CantLogin';
import { Login } from './pages/Login';
import { useAppSelector } from './state/hooks';
import { buttonsTitles, inputLabels } from './utils';
import { useEGatesSign, useFilteredRoutes, useGetCurrentProfile, useUserInfo } from './utils/hooks';
import { clearCookies, handleUpdateTokens } from './utils/loginFunctions';
import { slugs } from './utils/slugs';
import { ProfileId } from './utils/types';

const cookies = new Cookies();

interface RouteProps {
  loggedIn: boolean;
  profileId?: ProfileId;
  location?: Location;
}

function App() {
  const loggedIn = useAppSelector((state) => state.user.loggedIn);
  const user = useAppSelector((state) => state?.user?.userData);
  const profiles = useAppSelector((state) => state.user.userData.profiles);
  const [searchParams] = useSearchParams();
  const { ticket, eGates } = Object.fromEntries([...Array.from(searchParams)]);
  const [initialLoading, setInitialLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const routes = useFilteredRoutes();
  const queryClient = useQueryClient();
  const [agree, setAgree] = useState(false);
  const token = cookies.get('token');
  const currentProfile = useGetCurrentProfile();
  const profileId = currentProfile?.id;

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach(async (registration) => {
        await registration.unregister();
      });
    });
  }

  const isInvalidProfile =
    profileId &&
    !profiles
      ?.map((profile) => {
        return profile?.id;
      })
      .includes(profileId) &&
    loggedIn;

  const updateAgreeToTermsOfService = useMutation(api.agreeToTermsOfService, {
    onSuccess: async () => {
      await queryClient.invalidateQueries([token]);
    },
  });

  const updateTokensMutation = useMutation(api.refreshToken, {
    onError: () => {
      clearCookies();
    },
    onSuccess: (data) => {
      handleUpdateTokens(data);
    },
  });

  const updateTokensMutationMutateAsyncFunction = updateTokensMutation.mutateAsync;

  const shouldUpdateTokens = useCallback(async () => {
    if (!cookies.get('token') && cookies.get('refreshToken')) {
      await updateTokensMutationMutateAsyncFunction();
    }
  }, [updateTokensMutationMutateAsyncFunction]);

  const { mutateAsync: eGateSignsMutation, isLoading: eGatesSignLoading } = useEGatesSign();

  const { isLoading: userInfoLoading } = useUserInfo();

  const eGatesLoginMutation = useMutation((ticket: string) => api.eGatesLogin({ ticket }), {
    onError: () => {
      navigate(slugs.cantLogin);
    },
    onSuccess: (data) => {
      handleUpdateTokens(data);
    },
    retry: false,
  });

  const isLoading = [
    initialLoading,
    eGatesLoginMutation.isLoading,
    eGatesSignLoading,
    updateTokensMutation.isLoading,
    userInfoLoading,
  ].some((loading) => loading);

  useEffect(() => {
    (async () => {
      await shouldUpdateTokens();
      setInitialLoading(false);
    })();
  }, [location.pathname, shouldUpdateTokens]);

  const eGatesLoginMutationMutateAsync = eGatesLoginMutation.mutateAsync;

  useEffect(() => {
    (async () => {
      if (loggedIn) return;

      if (ticket) {
        eGatesLoginMutationMutateAsync(ticket);
      }
      if (eGates !== undefined) {
        eGateSignsMutation();
      }
    })();
  }, [ticket, eGates, eGateSignsMutation, eGatesLoginMutationMutateAsync, loggedIn]);

  useEffect(() => {
    if (!isInvalidProfile) return;

    cookies.remove('profileId', { path: '/' });

    navigate('/');
  }, [profileId, loggedIn, isInvalidProfile, navigate]);

  const getDefaultRoute = () => {
    if (!loggedIn) return '/login';

    if (!profileId) return slugs.profiles;

    return slugs.forms;
  };
  return (
    <>
      <Modal visible={!!user?.id && !user.isAgreedToTermsOfService}>
        <InnerWrapper>
          <StyledIframe
            width={'100%'}
            height={'100%'}
            allowFullScreen={true}
            src={'./termsOfService.pdf#toolbar=0&navpanes=0&scrollbar=0'}
          />
          <CheckBox
            value={agree}
            label={inputLabels.agreeWithTermsOfService}
            onChange={(value) => setAgree(value)}
          />
          <ButtonContainer>
            <Button disabled={!agree} onClick={() => updateAgreeToTermsOfService.mutateAsync()}>
              {buttonsTitles.agree}
            </Button>
          </ButtonContainer>
        </InnerWrapper>
      </Modal>
      {!isLoading ? (
        <DefaultLayout loggedIn={loggedIn}>
          <>
            <Routes>
              <Route element={<PublicRoute profileId={profileId} loggedIn={loggedIn} />}>
                <Route path={slugs.login} element={<Login />} />
                <Route path={slugs.cantLogin} element={<CantLogin />} />
              </Route>
              <Route
                element={
                  <ProtectedRoute location={location} profileId={profileId} loggedIn={loggedIn} />
                }
              >
                {(routes || []).map((route, index) => (
                  <Route key={`route-${index}`} path={route.slug} element={route.component} />
                ))}
              </Route>

              <Route path="*" element={<Navigate to={getDefaultRoute()} replace />} />
            </Routes>
            <ToastContainer />
          </>
        </DefaultLayout>
      ) : (
        <LoaderComponent />
      )}
    </>
  );
}

const PublicRoute = ({ loggedIn, profileId }: RouteProps) => {
  if (loggedIn) {
    return <Navigate to={profileId ? slugs.forms : slugs.profiles} replace />;
  }

  return <Outlet />;
};

const ProtectedRoute = ({ loggedIn, profileId, location }: RouteProps) => {
  if (!loggedIn) {
    return <Navigate to={'/login'} replace />;
  }

  if (location?.pathname === slugs.profiles && !!profileId) {
    return <Navigate to={slugs.forms} replace />;
  }

  return <Outlet />;
};

export default App;

const StyledIframe = styled.iframe<{
  height: string;
  width: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const InnerWrapper = styled.div`
  background-color: white;
  border: 1px #dfdfdf solid;
  border-radius: 4px;
  margin: auto;
  width: 700px;
  height: 700px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media ${device.mobileL} {
    padding: 16px;
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;
