import {
  Route,
  Routes
} from 'react-router-dom';
import Login from './login/login';
import Registration from './registration/registration';
import ChangePassword from './change-password/change-password';
import { AppRoute } from '../const';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path={AppRoute.Registration} element={<Registration />} />
      <Route path={AppRoute.ChangePassword} element={<ChangePassword />} />
    </Routes>
  );
}
