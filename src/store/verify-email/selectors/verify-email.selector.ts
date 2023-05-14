import { createSelector } from '@reduxjs/toolkit'

import { VerifyEmailState, featureKey } from '../states'

const featureStateSelector = (state: { [featureKey]: VerifyEmailState }) =>
  state[featureKey]

export const isUsedSelector = createSelector(
  featureStateSelector,
  (state) => state.isUsed
)

export const emailSelector = createSelector(
  featureStateSelector,
  (state) => state.email
)
