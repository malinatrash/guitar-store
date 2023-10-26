import { FC } from 'react';

interface IProductImage {
	img_url: string;
}

const ProductImage: FC<IProductImage> = ({ img_url }) => {
	return (
		<img
			className='transition-all duration-200 ease-linear hover:animate-pulse bg-white p-2 px-4 rounded-xl max-w-[26rem] min-h-[30rem] object-contain mobile:w-[90%] mobile:max-w-full'
			src={img_url}
		/>
	);
};

export default ProductImage;
