import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'

import { cn } from '@/lib/utils'

const Slider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
	<SliderPrimitive.Root
		ref={ref}
		className={cn(
			'relative flex w-full touch-none select-none items-center',
			className
		)}
		{...props}
	>
		<SliderPrimitive.Track className='relative h-2 w-full grow overflow-hidden rounded-full bg-white'>
			<SliderPrimitive.Range className='absolute h-full bg-black' />
		</SliderPrimitive.Track>
		<SliderPrimitive.Thumb
			children={
				<div className='text-black flex flex-col relative bottom-7 right-7 font-bold w-[71px] text-center'>
					{props.value}
				</div>
			}
			className='block h-5 w-5 rounded-full border-2 border-black bg-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all hover:scale-125'
		/>
	</SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
