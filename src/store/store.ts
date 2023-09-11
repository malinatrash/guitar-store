import { configureStore } from '@reduxjs/toolkit'
import authModalSlice from './slices/authModalSlice'
import { authSlice } from './slices/authSlice'

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		authModal: authModalSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
