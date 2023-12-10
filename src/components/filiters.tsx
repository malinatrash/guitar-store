import { useVendors } from '@/hooks/useVendors'
import {
	setOnlyInStock,
	setupPriceFrom,
	setupPriceTo,
} from '@/store/slices/productFilterSlice'
import { setToDecrease, setToIncrease } from '@/store/slices/productListSort'
import { RootState } from '@/store/store'
import { useDispatch, useSelector } from 'react-redux'
import VendorListItem from './ui/VendorListItem'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from './ui/accordion'
import { Checkbox } from './ui/checkbox'
import Frame from './ui/frame'
import { Slider } from './ui/slider'

const Filters = () => {
	const filter = useSelector((state: RootState) => state.productFilter)
	const sort = useSelector((state: RootState) => state.sortProductList)
	const dispatch = useDispatch()
	const vendors = useVendors()

	return (
		<Frame className='flex flex-col gap-6'>
			<span className='text-black text-2xl font-semibold'>Цена</span>
			<div className='flex  justify-around flex-col gap-4 mb-3'>
				<div className='flex items-center'>
					<Checkbox
						id='toIncrease'
						checked={sort.toIncrease}
						onClick={() => {
							dispatch(setToIncrease(!sort.toIncrease))
							dispatch(setToDecrease(false))
						}}
					/>
					<label
						htmlFor='toIncrease'
						className='text-black px-2 relative bottom-[2px] text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 whitespace-nowrap'
					>
						По возрастанию
					</label>
				</div>
				<div className='flex items-center'>
					<Checkbox
						id='toDecrease'
						checked={sort.toDecrease}
						onClick={() => {
							dispatch(setToDecrease(!sort.toDecrease))
							dispatch(setToIncrease(false))
						}}
					/>
					<label
						htmlFor='toDecrease'
						className='text-black px-2 relative bottom-[2px] text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70  whitespace-nowrap'
					>
						По убыванию
					</label>
				</div>
			</div>
			<div className='flex gap-3 whitespace-nowrap w-full'>
				<div className='w-8 text-xl text-black'>От:</div>
				<Slider
					onValueChange={value => dispatch(setupPriceFrom(value))}
					defaultValue={[0]}
					value={[filter.priceFrom]}
					min={0}
					max={100000}
					step={1}
				/>
			</div>
			<div className='flex gap-3 whitespace-nowrap w-full'>
				<div className='w-8 text-xl text-black'>До:</div>
				<Slider
					onValueChange={value => dispatch(setupPriceTo(value))}
					defaultValue={[filter.priceTo]}
					value={[filter.priceTo]}
					min={0}
					max={100000}
					step={1}
				/>
			</div>
			<div className='flex items-center'>
				<Checkbox
					id='terms'
					checked={filter.onlyInStock}
					onClick={() => dispatch(setOnlyInStock(!filter.onlyInStock))}
				/>
				<label
					htmlFor='terms'
					className='text-black px-2 relative bottom-[2px] text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
				>
					Только товары в наличии
				</label>
			</div>
			<Accordion
				type='single'
				collapsible
				className='w-full flex gap-2 flex-col'
			>
				<AccordionItem value='item-1'>
					<AccordionTrigger className='text-2xl dark:text-black'>
						Производитель
					</AccordionTrigger>
					<AccordionContent>
						<div className='flex gap-2 flex-col'>
							{vendors.map(vendor => (
								<VendorListItem key={vendor.id} vendor={vendor} />
							))}
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</Frame>
	)
}

export default Filters
