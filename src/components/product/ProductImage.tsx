import { FC } from 'react';

interface IProductImage {
	img_url: string;
}

const ProductImage: FC<IProductImage> = ({ img_url }) => {
	return (
		<div className='transition-all duration-200 border h-full w-full ease-linear hover:animate-pulse bg-white p-2 px-10 flex flex-col rounded-xl'>
			<img className='object-scale-down w-full max-h-[20rem]' src={img_url} />
		</div>
	);
};

export default ProductImage;
