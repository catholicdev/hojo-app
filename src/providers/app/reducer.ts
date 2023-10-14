import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AppMetadataState {
  loading: boolean
}

const initialState: AppMetadataState = {
  loading: false,
}

export const appMetadataSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const { setLoading } = appMetadataSlice.actions

// Action creators are generated for each case reducer function
export const appMetadataReducer = appMetadataSlice.reducer
