import axios from 'axios'
import { domain } from './domain'

export interface sendWishlistItemResponse {
	message:
		| 'Both user_id and product_id are required.'
		| 'Product is already in the wishlist.'
		| 'Product added to the wishlist successfully.'
		| 'An error occurred.'
	status_code: 201 | 400 | 500 | 200
}

export interface sendWishlistItemProps {
	user_id: number
	product_id: number
}

export async function sendWishlistItem(data: sendWishlistItemProps) {
	try {
		const response = await axios.post<sendWishlistItemResponse>(
			`${domain}wishlist`,
			data
		)
		return response.data.status_code
	} catch (error) {
		console.error(error)
	}
}
