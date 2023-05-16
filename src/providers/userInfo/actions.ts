import { createAction } from '@reduxjs/toolkit'

const actionName = (name: string) => `UserInfo/${name}`

export const setToken = createAction<string | undefined>(
  actionName('SET_TOKEN')
)
