import { createSlice } from '@reduxjs/toolkit'
import { setToken, setUserInfo } from './actions'
import { Storage } from '@capacitor/storage'
import { AuthenticationResp, CurrentUserInfo } from '@models'

export interface UserInfoState {
  token: AuthenticationResp | undefined
  user: CurrentUserInfo | undefined
}

const initialState: UserInfoState = {
  token: undefined,
  user: undefined,
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(setToken, (state, action) => {
        state.token = action.payload
        Storage.set({
          key: 'hojoToken',
          value: JSON.stringify(action.payload ?? ''),
        })
      })
      .addCase(setUserInfo, (state, action) => {
        state.user = action.payload
      }),
})

// Action creators are generated for each case reducer function
export const userInfoReducer = userInfoSlice.reducer
