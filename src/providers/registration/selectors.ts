import { RootState } from '../store'
import { createSelector } from '@reduxjs/toolkit'
import { Selector } from 'react-redux'
import { RegistrationState } from '@providers/registration/reducer'

const selectRegistration: Selector<RootState, RegistrationState> = (state) =>
  state.registration

export const selectRegistrationEmail = createSelector(
  selectRegistration,
  (state) => state.email
)
