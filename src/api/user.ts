import { api } from '@api/baseRtkqApi'

import {
  BaseResponseInterface,
  FavoriteDailyBibleReq,
  DailyBibleResp,
} from '@models'

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDailyBible: build.query<BaseResponseInterface<DailyBibleResp>, void>({
      query: () => ({
        url: `/user/daily-bible`,
        method: 'GET',
      }),
    }),
    updateFavoriteBible: build.mutation<
      BaseResponseInterface,
      FavoriteDailyBibleReq
    >({
      query: (payload) => ({
        url: `/bible/sentence-favorite`,
        method: 'POST',
        body: payload,
      }),
    }),
  }),

  overrideExisting: false,
})

export const { useLazyGetDailyBibleQuery, useUpdateFavoriteBibleMutation } =
  userApi
