export interface IForm1 {
  title: string | undefined;
  description: string | undefined;
  theme: string | undefined;
  imageURL: string | undefined;
}

export type Field = {
  name: string;
  type: 'integer' | 'string' | 'text' | 'boolean' | 'date';
};

export interface IForm2 {
  fields: Field[];
}

export interface IFormSubmit extends IForm2 {
  collection: IForm1;
}
