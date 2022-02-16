import {
  Route,
  Routes
} from 'react-router-dom';
import SignIn from './sign-in/sign-in';
import SignUp from './sign-up/sign-up';
import ChangePassword from './change-password/change-password';
import { AppRoute } from '../const';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Login} element={<SignIn />} />
      <Route path={AppRoute.Registration} element={<SignUp />} />
      <Route path={AppRoute.ChangePassword} element={<ChangePassword />} />
    </Routes>
  );
}
