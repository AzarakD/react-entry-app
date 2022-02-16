import { useEffect } from 'react';
import {
  Route,
  Routes,
  useNavigate
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../store/selector';
import Login from './login/login';
import Registration from './registration/registration';
import ChangePassword from './change-password/change-password';
import {
  AppRoute,
  AuthStatus
} from '../const';

export default function App(): JSX.Element {
  const navigate = useNavigate();
  const authStatus = useSelector(getAuthStatus);

  useEffect(() => {
    if (authStatus === AuthStatus.Auth){
        return navigate(AppRoute.ChangePassword);
    }
  }, [authStatus, navigate]);

  return (
    <Routes>
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={AppRoute.Registration} element={<Registration />} />
      <Route path={AppRoute.ChangePassword} element={<ChangePassword />} />
      {/* <Route
        path="*"
        element={<Navigate to="/" />}
      /> */}
    </Routes>
  );
}
