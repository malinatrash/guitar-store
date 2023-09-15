import { User } from '@/models/user'
import axios from 'axios'
import { domain } from './domain'
import { format } from './format'

export interface SignInProps {
	email: string
	password: string
}

export interface SignInResponse {
	user?: User
	message: string
	status_code: number
}

export const signIn = async (data: SignInProps) => {
	try {
		const response = await axios.get<SignInResponse>(
			`${domain}user?email=${data.email}&password=${data.password}&${format}`
		)

		if (response.status === 200) {
			console.log('User data:', response.data.user)
			return response
		} else {
			console.error('User not found:', response.data.message)
			return null
		}
	} catch (error) {
		return null
	}
}
