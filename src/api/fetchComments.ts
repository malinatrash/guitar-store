import { Comment } from '@/models/comment'
import axios from 'axios'
import { domain } from './domain'
import { format } from './format'

export const fetchComments = async (product_id: number) => {
	try {
		const response = await axios.get<Comment[]>(
			`${domain}comments/?product_id=${product_id}${format}`
		)
		return response.data
	} catch (error) {
		return []
	}
}
