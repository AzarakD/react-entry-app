import { AuthStatus } from '../const';
import { State } from '../types';

export const getAuthStatus = ({authStatus}: State): AuthStatus => authStatus;
