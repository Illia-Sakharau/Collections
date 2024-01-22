export interface ILoginReques {
  email: string;
  password: string;
}

export interface IRegistrationReques {
  name: string;
  email: string;
  password: string;
}

export interface IUpdateUsersReques {
  IDs: number[];
  updates: {
    is_admin?: boolean;
    is_blocked?: boolean;
  };
}

export interface IAuthUserInfo {
  id: number | null;
  name: string | null;
  email: string | null;
  is_admin: boolean | null;
  token: string | null;
}

export interface IResponseError {
  status: number;
  data: {
    message: string;
  };
}

export interface IUserInfo extends Omit<IAuthUserInfo, 'token'> {
  is_blocked: boolean;
  createdAt: string;
  updatedAt: string;
}
