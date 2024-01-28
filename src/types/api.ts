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

export interface ICreateColletionReques {
  collectionInfo: {
    title: string;
    description?: string;
    theme_id: number;
    image_url?: string;
  };
  fieldsMap: IFieldsMap;
}

export interface IFieldsMap {
  integer_1?: string;
  integer_2?: string;
  integer_3?: string;
  string_1?: string;
  string_2?: string;
  string_3?: string;
  text_1?: string;
  text_2?: string;
  text_3?: string;
  boolean_1?: string;
  boolean_2?: string;
  boolean_3?: string;
  date_1?: string;
  date_2?: string;
  date_3?: string;
}
