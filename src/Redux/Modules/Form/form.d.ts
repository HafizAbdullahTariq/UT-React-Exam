declare namespace IReduxForm {
  export interface IFormsResponse {
    success: boolean;
    message: string;
    data: IForm[];
  }

  export interface IForm {
    fieldName: string;
    type: string;
    value: string;
    options?: string[];
  }
}

export { IReduxForm };
