import { createSlice } from '@reduxjs/toolkit'

export interface AuthState {
	isAuth: boolean
}

const initialState: AuthState = {
	isAuth: false,
}

export const authSlice = createSlice({
	name: 'Auth',
	initialState,
	reducers: {
		signin: state => {
			state.isAuth = true
		},
		signout: state => {
			state.isAuth = false
		},
	},
})

export const { signin, signout } = authSlice.actions

export default authSlice.reducer
