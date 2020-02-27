export interface IField {
  type: string;
  fieldName: string;
}

export interface IEditObj {
  name: string;
  fields: Array<IField>;
}
