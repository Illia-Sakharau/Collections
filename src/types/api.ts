export interface ILoginReques {
  email: string;
  password: string;
}

export interface IRegistrationReques {
  name: string;
  email: string;
  password: string;
}

export interface IUserInfo {
  id: number | null;
  name: string | null;
  email: string | null;
  is_admin: boolean | null;
  token: string | null;
}
