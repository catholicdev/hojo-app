import { EntityState, createEntityAdapter } from '@reduxjs/toolkit'

export const featureKey = 'verifyEmail'

export interface VerifyEmailState extends EntityState<IVerifyEmail> {
  isUsed: boolean
  email: string | null
}

export const adapter = createEntityAdapter<IVerifyEmail>()

export const initialState: VerifyEmailState = adapter.getInitialState({
  isUsed: false,
  email: null,
})
