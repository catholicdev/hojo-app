import { createSlice } from '@reduxjs/toolkit'
import { setToken } from './actions'
import { Storage } from '@capacitor/storage'

export interface UserInfoState {
  token: string | undefined
}

const initialState: UserInfoState = {
  token: undefined,
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(setToken, (state, action) => {
      state.token = action.payload
      Storage.set({ key: 'hojoToken', value: action.payload ?? '' })
    }),
})

// Action creators are generated for each case reducer function
export const userInfoReducer = userInfoSlice.reducer
