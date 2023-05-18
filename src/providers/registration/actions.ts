import { createAction } from '@reduxjs/toolkit'

const actionName = (name: string) => `Registration/${name}`

export const setRegistrationEmail = createAction<string | undefined>(
  actionName('SET_EMAIL')
)
