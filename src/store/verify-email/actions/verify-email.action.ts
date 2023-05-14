import { createAsyncThunk } from '@reduxjs/toolkit'
import { featureKey } from '../states'
import { verifyEmailService } from 'services'

export const verifyEmail = createAsyncThunk(
  `${featureKey}/verifyEmail`,
  async (arg: { email: string }) => {
    const { email } = arg
    const result = await verifyEmailService.verifyEmail(email)
    return result
  }
)
