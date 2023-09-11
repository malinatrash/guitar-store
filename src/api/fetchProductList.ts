import { Product } from '@/models/product'
import axios from 'axios'
import { domain } from './domain'
import { format } from './format'

export function fetchProductList() {
	try {
		const response = axios.get<Product[]>(`${domain}products${format}`)
		return response
	} catch (error) {
		console.error('Error fetching products:', error)
		throw error
	}
}
