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

export interface ICollectionInfo {
  id: number;
  title: string;
  description: string;
  theme: {
    en: string;
    ru: string;
  };
  imgUrl: string;
  username: string;
}

export interface ICollectionsAllResp {
  id: number;
  title: string;
  description: string;
  image_url: string;
  user: {
    id: number;
    name: string;
  };
  theme: {
    id: number;
    en_name: string;
    ru_name: string;
  };
}

export interface IThemeResp {
  id: number;
  en_name: string;
  ru_name: string;
}
