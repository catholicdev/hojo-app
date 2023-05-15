import { api } from './baseRtkqApi'

export const authenticationApi = api.injectEndpoints({
  endpoints: (build) => ({
    postVerifyEmail: build.mutation<{ isUsed: boolean }, { email: string }>({
      query: (queryArg) => ({
        url: `/user/register/verify-email`,
        method: 'POST',
        body: queryArg,
      }),
    }),
  }),
  overrideExisting: false,
})

export const { usePostVerifyEmailMutation } = authenticationApi
