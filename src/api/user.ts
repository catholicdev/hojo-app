import { api } from '@api/baseRtkqApi'

import { BaseResponseInterface } from '@models'

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDailyBible: build.query<BaseResponseInterface, ''>({
      query: () => ({
        url: `/user/daily-bible`,
        method: 'GET',
      }),
    }),
  }),

  overrideExisting: false,
})

export const { useGetDailyBibleQuery } = userApi
