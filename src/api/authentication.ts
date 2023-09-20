import { api } from './baseRtkqApi'
import {
  LoginReq,
  VerifyEmailReq,
  RegisterReq,
  BaseResponseInterface,
} from '@models'

export const authenticationApi = api.injectEndpoints({
  endpoints: (build) => ({
    postLogin: build.mutation<BaseResponseInterface, LoginReq>({
      query: (queryArg) => ({
        url: `/user/app/login`,
        method: 'POST',
        body: queryArg,
      }),
    }),
    postVerifyEmail: build.mutation<BaseResponseInterface, VerifyEmailReq>({
      query: (queryArg) => ({
        url: `/user/register/verify-email`,
        method: 'POST',
        body: queryArg,
      }),
    }),
    postRegister: build.mutation<BaseResponseInterface, RegisterReq>({
      query: (queryArg) => ({
        url: `/user/app/register`,
        method: 'POST',
        body: queryArg,
      }),
    }),
    getCheckToken: build.query<BaseResponseInterface, void>({
      query: () => ({
        url: `/user/check-token`,
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  usePostLoginMutation,
  usePostVerifyEmailMutation,
  usePostRegisterMutation,
  useLazyGetCheckTokenQuery,
} = authenticationApi
