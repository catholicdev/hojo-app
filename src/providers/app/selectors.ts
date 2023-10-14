import { RootState } from '../store'
import { createSelector } from '@reduxjs/toolkit'
import { Selector } from 'react-redux'
import { AppMetadataState } from './reducer'

const selectApp: Selector<RootState, AppMetadataState> = (state) => state.app

export const selectLoading = createSelector(selectApp, (state) => state.loading)
