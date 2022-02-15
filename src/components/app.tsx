import {
  Route,
  Routes
} from 'react-router-dom';
import SignIn from './sign-in/sign-in';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path={'/signin'} element={<SignIn />} />
    </Routes>
  );
}
