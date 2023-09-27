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
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from '@radix-ui/react-accordion'

const Filters = () => {
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
					<AccordionTrigger className='hover:underline font-semibold text-2xl'>
						Производитель
					</AccordionTrigger>
					<AccordionContent className=' animate-accordion-down'>
						<div className='flex items-center pt-2'>
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
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-2'>
					<AccordionTrigger className='hover:underline font-semibold text-2xl'>
						Страна производства
					</AccordionTrigger>
					<AccordionContent className=' animate-accordion-down'>
						Yes. It comes with default styles that matches the other
						components&apos; aesthetic.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</Frame>
	)
}

export default Filters
