import { combineReducers, configureStore } from '@reduxjs/toolkit'

import * as verifyEmail from './verify-email'

const reducer = combineReducers({
  [verifyEmail.featureKey]: verifyEmail.reducer,
})

/**
 * MIddleware
 */
// const middleware = getDefaultMiddleware({
//   thunk: true,
//   immutableCheck: true,
//   serializableCheck: true,
// })

/**
 * Store
 */
export const store = configureStore({
  reducer,
  // middleware,
  devTools: true,
})

/**
 * Types
 */
export type State = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch
