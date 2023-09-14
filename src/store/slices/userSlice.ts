import { User } from '@/models/user'
import { createSlice } from '@reduxjs/toolkit'

export interface UserState extends User {}

const initialState: UserState = {
	role: 'guest',
	firstname: '',
	lastname: '',
	email: '',
	cart: undefined,
	favorites: undefined,
}

export const userSlice = createSlice({
	name: 'User',
	initialState,
	reducers: {
		setupUser: (state, action) => {
			const user: User = action.payload
			state.role = user.role
			state.firstname = user.firstname
			state.lastname = user.lastname
			state.email = user.email
			state.cart = user.cart
			state.favorites = user.favorites
		},
	},
})

export const { setupUser } = userSlice.actions

export default userSlice.reducer
