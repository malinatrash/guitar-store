import { fetchVendors } from '@/api/fetchVendors';
import { useEffect, useState } from 'react';

export const useVendors = () => {
	const [vendors, setVendors] = useState<Vendor[]>([]);
	useEffect(() => {
		try {
			fetchVendors().then(r => {
				setVendors(r);
			});
		} catch (error) {
			console.error('Ошибка при загрузке данных о поставщиках:', error);
		}
	}, []);
	return vendors;
};
