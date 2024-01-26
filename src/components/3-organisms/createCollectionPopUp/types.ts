export interface IForm1 {
  title: string | undefined;
  description: string | undefined;
  theme: string | undefined;
}

export interface IForm2 {
  fields: {
    name: string;
    type: string;
  }[];
}

export interface IFormSubmit extends IForm2 {
  collection: IForm1;
}
