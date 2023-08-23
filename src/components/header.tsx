import { Heart, ShoppingCart, User } from 'lucide-react'
import { FC } from 'react'
import { useNavigate } from 'react-router'
import { Button } from './ui/button'
import GuitarStoreLogo from './ui/guitarStoreLogo'

const Header: FC = () => {
	const navigate = useNavigate()
	return (
		<div className='w-full h-full p-4 bg-black flex justify-around'>
			<GuitarStoreLogo onClick={() => navigate('/')} />
			<div className='py-10'>
				<Button
					className='transition-all flex justify-around w-36 hover:w-52'
					variant='secondary'
					onClick={() => navigate('/favorites')}
				>
					<Heart /> Избранное
				</Button>
			</div>
			<div className='py-10'>
				<Button
					className='transition-all flex justify-around w-36 hover:w-52'
					variant='secondary'
					onClick={() => navigate('/cart')}
				>
					<ShoppingCart /> Корзина
				</Button>
			</div>
			<div className='py-10'>
				<Button
					className='transition-all flex justify-around w-36 hover:w-52'
					variant='secondary'
					onClick={() => navigate('/user')}
				>
					<User /> Профиль
				</Button>
			</div>
		</div>
	)
}

export default Header
