export interface IInitialState {
  isLogin: string | null;
  loading: boolean;
  loginLoading: boolean;
}

export interface IUserRegister {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
}
