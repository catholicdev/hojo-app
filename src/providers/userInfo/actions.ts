import { createAction } from '@reduxjs/toolkit'
import { AuthenticationResp } from '@models'

const actionName = (name: string) => `UserInfo/${name}`

export const setToken = createAction<AuthenticationResp | undefined>(
  actionName('SET_TOKEN')
)
