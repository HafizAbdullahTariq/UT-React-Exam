import { createApi } from "@reduxjs/toolkit/query/react";

import { IReduxForm } from "./form";
import http from "@src/Http";

const reducerPath = "formApi";
export const formAPI = createApi({
  reducerPath,
  baseQuery: http(),
  endpoints: builder => ({
    getForm: builder.query({
      query: () => ({
        url: `/form`,
        method: "GET",
      }),
      transformResponse: (
        response: IReduxForm.IFormsResponse
      ): IReduxForm.IFormsResponse => response,
    }),
    submitForm: builder.mutation({
      query: (body) => ({
        url: `/form`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetFormQuery, useSubmitFormMutation } = formAPI;
export const formQueryReducer = { [reducerPath]: formAPI.reducer };
