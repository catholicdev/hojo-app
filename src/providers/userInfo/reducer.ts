import { createSlice } from '@reduxjs/toolkit'
import { setDailyBible, setToken } from './actions'
import { Storage } from '@capacitor/storage'
import { DailyBibleResp } from '@models'

export interface UserInfoState {
  token: string | undefined
  refreshToken: string | undefined
  dailyBible: DailyBibleResp | undefined
}

const initialState: UserInfoState = {
  token: undefined,
  refreshToken: undefined,
  dailyBible: undefined,
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(setToken, (state, action) => {
        state.token = action.payload
        Storage.set({ key: 'hojoToken', value: action.payload ?? '' })
      })
      .addCase(setDailyBible, (state, action) => {
        state.dailyBible = action.payload
      }),
})

// Action creators are generated for each case reducer function
export const userInfoReducer = userInfoSlice.reducer
