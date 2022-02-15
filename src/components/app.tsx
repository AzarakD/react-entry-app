import {
  Route,
  Routes
} from 'react-router-dom';
import SignIn from './sign-in/sign-in';
import SignUp from './sign-up/sign-up';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path={'/signin'} element={<SignIn />} />
      <Route path={'/signup'} element={<SignUp />} />
    </Routes>
  );
}
