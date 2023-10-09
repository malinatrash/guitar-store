import { FC } from 'react';

interface IProductYearOfProduction {
	year: number;
}

const ProductYearOfProduction: FC<IProductYearOfProduction> = ({ year }) => {
	return (
		<div className='flex gap-4 items-end'>
			<span className='font-bold text-4xl'>Год производства – </span>{' '}
			<span className='font-medium text-3xl opacity-70'>{year}</span>
		</div>
	);
};
export default ProductYearOfProduction;
