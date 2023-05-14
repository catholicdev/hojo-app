import { createReducer } from '@reduxjs/toolkit'
import { initialState } from '../states'
import { verifyEmail } from '../actions'

export const reducer = createReducer(initialState, (builder) =>
  builder.addCase(verifyEmail.fulfilled, (state, action: any) => {
    const { isUsed } = action.payload
    return { ...state, isUsed: isUsed }
  })
)
