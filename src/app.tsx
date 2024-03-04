import { useCallback, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
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
import Cookies from 'universal-cookie';
import api from './api';
import DefaultLayout from './components/layouts/DefaultLayout';
import LoaderComponent from './components/other/LoaderComponent';
import { CantLogin } from './pages/CantLogin';
import { Login } from './pages/Login';
import { useAppSelector } from './state/hooks';
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
  const profiles = useAppSelector((state) => state.user.userData.profiles);
  const [searchParams] = useSearchParams();
  const { ticket, eGates } = Object.fromEntries([...Array.from(searchParams)]);
  const [initialLoading, setInitialLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const routes = useFilteredRoutes();

  const currentProfile = useGetCurrentProfile();
  const profileId = currentProfile?.id;

  const isInvalidProfile =
    profileId &&
    !profiles
      ?.map((profile) => {
        return profile?.id;
      })
      .includes(profileId) &&
    loggedIn;

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
    return <Navigate to={!!profileId ? slugs.forms : slugs.profiles} replace />;
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
