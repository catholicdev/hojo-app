import { createAction } from '@reduxjs/toolkit'
import { DailyBibleResp } from '@models'

const actionName = (name: string) => `UserInfo/${name}`

export const setToken = createAction<string | undefined>(
  actionName('SET_TOKEN')
)

// export const setRefreshToken = createAction<string | undefined>(
//   actionName('SET_REFRESH_TOKEN')
// )

export const setDailyBible = createAction<DailyBibleResp | undefined>(
  actionName('SET_DAILY_BIBLE')
)
