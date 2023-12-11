import { Comment } from '@/models/comment'
import { Heart } from 'lucide-react'
import { FC } from 'react'

interface IComment {
	comment: Comment
}

const CommentItem: FC<IComment> = ({ comment }) => {
	const addLike = () => {}
	return (
		<div className='flex px-8 py-4 bg-primary rounded-2xl gap-10 items-center w-fit transition-all hover:scale-[102%]'>
			<div className='flex gap-4 flex-col'>
				<div className='flex justify-between'>
					<span className='text-secondary font-medium text-xl'>
						{comment.user_name}
					</span>
					<span className='text-secondary font-medium text-xs align-bottom pt-1'>
						{comment.comment_date}
					</span>
				</div>
				<span className='text-secondary'>{comment.comment_text}</span>
			</div>
			<div className='flex flex-col gap-2 justify-center items-center'>
				<Heart
					onClick={addLike}
					className='transition-all stroke-secondary hover:fill-secondary hover:scale-125'
				/>
				<span className='text-secondary'>{comment.likes_count}</span>
			</div>
		</div>
	)
}

export default CommentItem
