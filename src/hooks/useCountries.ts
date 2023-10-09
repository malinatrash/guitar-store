import { Country, fetchCountries } from '@/api/fetchCountries';
import { useEffect, useState } from 'react';

export const useCountries = () => {
	const [Countries, setCountries] = useState<Country[]>([]);
	useEffect(() => {
		try {
			fetchCountries().then(r => {
				setCountries(r);
			});
		} catch (error) {
			console.error('Ошибка при загрузке данных:', error);
		}
	}, []);
	return Countries;
};
