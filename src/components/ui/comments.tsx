import { useComments } from '@/hooks/useComments';
import { FC } from 'react';

interface CommentsProps {
	product_id: number;
}

const Comments: FC<CommentsProps> = ({ product_id }) => {
	const comments = useComments(product_id);
	return <div>{comments}</div>;
};

export default Comments;
