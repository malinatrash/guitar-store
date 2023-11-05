import { Comment } from '@/models/comment'
import { LucideLoader } from 'lucide-react'
import { FC } from 'react'
import CommentItem from './commentItem'

interface CommentsProps {
	comments: Comment[]
	isLoading: boolean
}

const Comments: FC<CommentsProps> = ({ comments, isLoading }) => {
	return (
		<div className='flex gap-4 flex-col pb-6'>
			{isLoading ? (
				comments.map(e => <CommentItem comment={e} />)
			) : (
				<LucideLoader className='animate-spin' width='40px' height='40px' />
			)}
		</div>
	)
}

export default Comments
