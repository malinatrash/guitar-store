import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox } from './checkbox';
import { RootState } from '@/store/store';
import { addVendor, deleteVendor } from '@/store/slices/productFilterSlice';

interface IVendorListItem {
	vendor: Vendor;
}

const VendorListItem: FC<IVendorListItem> = ({ vendor }) => {
	const vendorIsSelected = useSelector((state: RootState) =>
		state.productFilter.vendors.some(v => v.id === vendor.id)
	);
	const dispatch = useDispatch();
	return (
		<div className='flex items-center'>
			<Checkbox
				id='terms'
				checked={vendorIsSelected}
				onClick={() => {
					if (vendorIsSelected) {
						dispatch(deleteVendor(vendor.id));
					} else {
						dispatch(addVendor(vendor));
					}
				}}
			/>
			<label
				htmlFor='terms'
				className='text-black px-2 relative bottom-[2px] text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
			>
				{vendor.name}
			</label>
		</div>
	);
};

export default VendorListItem;
