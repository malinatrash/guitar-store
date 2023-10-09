import { FC } from 'react';

interface IProductDescription {
	description: string;
}

const ProductDescription: FC<IProductDescription> = ({ description }) => {
	return (
		<div className='flex flex-col gap-4'>
			<span className='font-bold text-4xl'>Описание</span>
			<span className='font-medium text opacity-70'>{description}</span>
		</div>
	);
};

export default ProductDescription;
