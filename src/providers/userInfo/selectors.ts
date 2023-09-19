import { Selector } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { UserInfoState } from './reducer'

const selectUserInfo: Selector<RootState, UserInfoState> = (state) =>
  state.userInfo

export const selectToken = createSelector(
  selectUserInfo,
  (state) => state.token
)
