import axios from 'axios'
import { domain } from './domain'

export interface sendCartItemResponse {
	message: string
	status_code: 201 | 400 | 500 | 200 | 404
}

export interface sendCartItemProps {
	user_id: number
	product_id: number
	quantity: number
}

export async function sendCartItem(data: sendCartItemProps) {
	try {
		const response = await axios.post<sendCartItemResponse>(
			`${domain}carts`,
			data
		)
		return response.data.status_code
	} catch (error) {
		console.error(error)
	}
}
