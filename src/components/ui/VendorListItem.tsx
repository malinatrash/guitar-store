import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Checkbox } from './checkbox'

interface IVendorListItem {
	vendor: Vendor
}

const VendorListItem: FC<IVendorListItem> = ({ vendor }) => {
	const dispatch = useDispatch()
	return (
		<div className='flex items-center'>
			<Checkbox className='' id='terms' checked={false} onClick={() => {}} />
			<label
				htmlFor='terms'
				className='text-black px-2 relative bottom-[2px] text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
			>
				{vendor.name}
			</label>
		</div>
	)
}

export default VendorListItem
