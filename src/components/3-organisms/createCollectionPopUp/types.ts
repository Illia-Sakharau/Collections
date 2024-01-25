export interface IForm1 {
  title: string | undefined;
  description: string | undefined;
  theme: string | undefined;
}

export interface IForm2 {
  title: string | undefined;
}

export interface IFormSubmit {
  collection: IForm1;
  fields: IForm2;
}
