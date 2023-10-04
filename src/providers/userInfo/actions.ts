import { createAction } from '@reduxjs/toolkit'
import { AuthenticationResp, CurrentUserInfo } from '@models'

const actionName = (name: string) => `UserInfo/${name}`

export const setToken = createAction<AuthenticationResp | undefined>(
  actionName('SET_TOKEN')
)

export const setUserInfo = createAction<CurrentUserInfo | undefined>(
  actionName('SET_USER')
)
