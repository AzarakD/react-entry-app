import { AuthStatus } from '../../const';
import { State } from '../../types';

export const getAuthStatus = ({user}: State): AuthStatus => user.authStatus;
