import { createAction } from '@reduxjs/toolkit'

const actionName = (name: string) => `UserInfo/${name}`

export const setToken = createAction<string | undefined>(
  actionName('SET_TOKEN')
)

export const setRefreshToken = createAction<string | undefined>(
  actionName('SET_REFRESH_TOKEN')
)
