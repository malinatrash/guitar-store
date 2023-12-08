import { Comment, CommentBody } from '@/models/comment'
import { api } from './api'

const commentsApi = api.injectEndpoints({
	endpoints: builder => ({
		getComments: builder.query<Comment[], number>({
			query: (id: number) => {
				return `/comments?product_id=${id}`
			},
		}),
		createComments: builder.mutation({
			query: (commentsData: CommentBody) => ({
				body: commentsData,
				url: '/comments',
				method: 'POST',
			}),
		}),
	}),
})

export const { useGetCommentsQuery, useCreateCommentsMutation } = commentsApi
export default commentsApi
