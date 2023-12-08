export interface Comment {
	id: number
	user_name: string
	product_id: number
	comment_text: string
	likes_count: number
	comment_date: string
}

export interface CommentBody {
	user_id: number
	product_id: number
	comment_text: string
}
