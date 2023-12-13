import axios from 'axios'
import { domain } from './domain'

export interface PayResponse {
	message?: string
	error?: string
}

export interface PayProps {
	order_id: number
}

export async function sendPay(data: PayProps) {
	try {
		const response = await axios.post<PayResponse>(`${domain}pay`, data)
		return response.data
	} catch (error) {
		console.error(error)
	}
}
