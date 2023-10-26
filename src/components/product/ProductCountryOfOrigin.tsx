import { useCountries } from '@/hooks/useCountries';
import { FC } from 'react';

interface IProductCountryOfOrigin {
	countryId: number;
}

const ProductCountryOfOrigin: FC<IProductCountryOfOrigin> = ({ countryId }) => {
	const countries = useCountries();
	const getCountryName = () => {
		const country = countries.filter(e => e.id === countryId);
		return country.map(e => e.name).join(' ');
	};
	return (
		<span className='font-bold text-4xl whitespace-nowrap'>
			Cтрана производства –{' '}
			<span className='font-medium opacity-70'>{getCountryName()}</span>
		</span>
	);
};

export default ProductCountryOfOrigin;
