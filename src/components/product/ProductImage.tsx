import { FC } from 'react';

interface IProductImage {
	img_url: string;
}

const ProductImage: FC<IProductImage> = ({ img_url }) => {
	return (
		<img
			className='transition-all duration-200 ease-linear hover:animate-pulse bg-white p-2 px-10 rounded-xl max-w-[22rem] min-h-[30rem] object-contain'
			src={img_url}
		/>
	);
};

export default ProductImage;
