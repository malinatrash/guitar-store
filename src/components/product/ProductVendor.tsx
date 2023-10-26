import { useVendors } from '@/hooks/useVendors';
import { FC } from 'react';

interface IProductVendor {
	vendorId: number;
}

const ProductVendor: FC<IProductVendor> = ({ vendorId }) => {
	const vendors = useVendors();
	const getVendorName = () => {
		const vendor = vendors.filter(e => e.id === vendorId);
		return vendor.map(e => e.name).join(' ');
	};
	return (
		<div className='whitespace-nowrap'>
			<span className='font-bold text-4xl'> Производитель – </span>{' '}
			<span className='font-medium text-3xl'>{getVendorName()}</span>
		</div>
	);
};

export default ProductVendor;
