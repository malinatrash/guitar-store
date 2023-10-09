import { FC } from 'react';

interface IProductName {
	name: string;
}

const ProductName: FC<IProductName> = ({ name }) => {
	return (
		<span className='font-bold text-[3.5rem] mobile:text-[2.7rem]'>{name}</span>
	);
};

export default ProductName;
