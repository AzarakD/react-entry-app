import {
  UserDataType,
  ServerResponse,
  ThunkActionResult
} from '../types';

export const regAction = (loginData: UserDataType): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.post<ServerResponse>("/register", loginData);

    console.log(data);
    // saveToken(data.token);
  };

export const loginAction = (loginData: UserDataType): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.post<ServerResponse>("/login", loginData);

    console.log(data);
    // saveToken(data.token);
  };
