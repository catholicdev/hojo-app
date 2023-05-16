import { api } from './baseRtkqApi'
import {
  AuthenticationResp,
  LoginReq,
  VerifyEmailResp,
  VerifyEmailReq,
  RegisterReq,
} from '@models'

export const authenticationApi = api.injectEndpoints({
  endpoints: (build) => ({
    postLogin: build.mutation<AuthenticationResp, LoginReq>({
      query: (queryArg) => ({
        url: `/user/app/login`,
        method: 'POST',
        body: queryArg,
      }),
    }),
    postVerifyEmail: build.mutation<VerifyEmailResp, VerifyEmailReq>({
      query: (queryArg) => ({
        url: `/user/register/verify-email`,
        method: 'POST',
        body: queryArg,
      }),
    }),
    postRegister: build.mutation<AuthenticationResp, RegisterReq>({
      query: (queryArg) => ({
        url: `/user/app/register`,
        method: 'POST',
        body: queryArg,
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  usePostLoginMutation,
  usePostVerifyEmailMutation,
  usePostRegisterMutation,
} = authenticationApi
