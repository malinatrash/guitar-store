import axios from 'axios'
import { domain } from './domain'

export interface SignUpResponse {
	message: 'User created successfully' | string
	status_code: 201 | 400
}

export interface SignUpProps {
	firstname: string
	lastname: string
	email: string
	password: string
}

export async function signUp(data: SignUpProps) {
	try {
		const response = await axios.post<SignUpResponse>(`${domain}users`, data)
		console.log(response)
		return response
	} catch (error) {
		console.error(error)
	}
}
