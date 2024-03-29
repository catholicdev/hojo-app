import { useDispatch as useReduxDispatch } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from '@api'
import { registrationReducer } from '@providers/registration'
import { userInfoReducer } from '@providers/userInfo'
import { appMetadataReducer } from '@providers/app'

export const store = configureStore({
  reducer: combineReducers({
    [api.reducerPath]: api.reducer,
    registration: registrationReducer,
    userInfo: userInfoReducer,
    app: appMetadataReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: { extraArgument: {} },
    }).concat([api.middleware]),
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// typed hooks
export const useDispatch: () => AppDispatch = useReduxDispatch
