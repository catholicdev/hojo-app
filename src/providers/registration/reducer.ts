import { createSlice } from '@reduxjs/toolkit'
import { setRegistrationEmail } from '@providers/registration/actions'

export interface RegistrationState {
  email: string | undefined
}

const initialState: RegistrationState = {
  email: undefined,
}

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(setRegistrationEmail, (state, action) => {
      state.email = action.payload
    }),
})

// Action creators are generated for each case reducer function
export const registrationReducer = registrationSlice.reducer
