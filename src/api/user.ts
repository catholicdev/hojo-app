import { api } from '@api/baseRtkqApi'

import {
  BaseResponseInterface,
  FavoriteDailyBibleReq,
  DailyBibleResp,
  UserScoreResp,
} from '@models'

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDailyBible: build.query<BaseResponseInterface<DailyBibleResp>, void>({
      query: () => ({
        url: `/user/daily-bible`,
        method: 'GET',
      }),
    }),
    getUserScore: build.query<BaseResponseInterface<UserScoreResp>, void>({
      query: () => ({
        url: `/user/score`,
        method: 'GET',
      }),
    }),
    updateFavoriteBible: build.mutation<
      BaseResponseInterface<DailyBibleResp>,
      FavoriteDailyBibleReq
    >({
      query: (payload) => ({
        url: `/bible/sentence-favorite`,
        method: 'POST',
        body: payload,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: updatedPost } = await queryFulfilled
          dispatch(
            userApi.util.updateQueryData(
              'getDailyBible',
              undefined as void,
              (_) => updatedPost
            )
          )
        } catch {}
      },
    }),
  }),

  overrideExisting: false,
})

export const {
  useLazyGetDailyBibleQuery,
  useUpdateFavoriteBibleMutation,
  useLazyGetUserScoreQuery,
} = userApi
