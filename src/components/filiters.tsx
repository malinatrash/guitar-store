import {
	setOnlyInStock,
	setupPriceFrom,
	setupPriceTo,
} from '@/store/slices/productFilterSlice'
import { RootState } from '@/store/store'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Checkbox } from './ui/checkbox'
import Frame from './ui/frame'
import { Slider } from './ui/slider'

interface IFilters {}

const Filters: FC<IFilters> = ({}) => {
	const filter = useSelector((state: RootState) => state.productFilter)
	const dispatch = useDispatch()
	return (
		<Frame className='flex flex-col gap-6'>
			<span className='text-black text-2xl font-semibold'>Цена</span>
			<div className='flex gap-3 whitespace-nowrap w-full'>
				<div className='w-8 text-xl text-black'>От:</div>
				<Slider
					onValueChange={value => dispatch(setupPriceFrom(value))}
					defaultValue={[0]}
					value={[filter.priceFrom]}
					min={0}
					max={filter.priceTo}
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
					max={filter.priceTo}
					step={1}
				/>
			</div>
			<div>
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
		</Frame>
	)
}

export default Filters
