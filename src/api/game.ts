import { api } from '@api/baseRtkqApi'
import { BaseResponseInterface, RoundResp } from '@models'

export const gameApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRounds: build.query<BaseResponseInterface<Array<RoundResp>>, void>({
      query: () => ({
        url: `/game/rounds`,
        method: 'GET',
      }),
    }),
  }),

  overrideExisting: false,
})

export const { useLazyGetRoundsQuery } = gameApi
