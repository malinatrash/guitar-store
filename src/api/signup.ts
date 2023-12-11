import { User } from '@/models/user'
import axios from 'axios'
import { domain } from './domain'

export interface SignUpResponse {
	user: User
	message: 'User created successfully' | string
	status_code: 201 | 400
	session_id: string
}

export interface SignUpProps {
	firstname: string
	lastname: string
	email: string
	password: string
}

export async function signUp(data: SignUpProps) {
	try {
		const response = await axios.post<SignUpResponse>(`${domain}user`, data)
		console.log(response)
		return response
	} catch (error) {
		console.error(error)
	}
}
