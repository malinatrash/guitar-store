import { Heart, ShoppingCart } from 'lucide-react'
import { FC } from 'react'
import { Button } from './ui/button'
import GuitarStoreLogo from './ui/guitarStoreLogo'

const Header: FC = () => {
	return (
		<div className='w-full h-36 p-4 bg-black flex justify-around'>
			<GuitarStoreLogo />
			<div className='py-10'>
				<Button
					className='transition-all flex justify-around w-36 hover:w-52'
					variant='secondary'
				>
					<Heart /> Избранное
				</Button>
			</div>
			<div className='py-10'>
				<Button
					className='transition-all flex justify-around w-36 hover:w-52'
					variant='secondary'
				>
					<ShoppingCart /> Корзина
				</Button>
			</div>
		</div>
	)
}

export default Header
