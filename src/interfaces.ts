export interface IForms {
  action: () => void;
}
export interface IRegisterData {
  name: string;
  lastName: string;
  email: string;
  password: string;
  repetPassword: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface ICreateData {
  initialMonth: string;
  finalMonth: string;
  year: string;
  totalSaving: string;
  description: string;
}

export interface ICreateDataSend {
  initialMonth: number;
  finalMonth: number;
  year: string;
  totalSaving: number;
  description: string;
}
