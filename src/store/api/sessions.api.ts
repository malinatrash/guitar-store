import { User } from '@/models/user'
import { api } from './api'

interface Response {
	user?: User
	message?: string
	status_code: number
}

const commentsApi = api.injectEndpoints({
	endpoints: builder => ({
		checkSession: builder.query<Response, string>({
			query: (id: string) => {
				return `/session?session_id=${id}`
			},
		}),
	}),
})

export const { useCheckSessionQuery, useLazyCheckSessionQuery } = commentsApi
export default commentsApi
