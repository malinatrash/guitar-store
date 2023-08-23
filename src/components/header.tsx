import { Heart, ShoppingCart, User } from 'lucide-react'
import { FC } from 'react'
import { useNavigate } from 'react-router'
import { Button } from './ui/button'
import GuitarStoreLogo from './ui/guitarStoreLogo'

const Header: FC = () => {
	const navigate = useNavigate()
	return (
		<div className='w-full h-full p-4 bg-black flex justify-around mobile:gap-7'>
			<GuitarStoreLogo onClick={() => navigate('/')} />
			<div className='py-10'>
				<Button
					className='transition-all flex justify-around w-36 hover:w-52 mobile:w-14'
					variant='secondary'
					onClick={() => navigate('/favorites')}
				>
					<Heart /> <span className='mobile:text-[0]'>Избранное</span>
				</Button>
			</div>
			<div className='py-10'>
				<Button
					className='transition-all flex justify-around w-36 hover:w-52 mobile:w-14'
					variant='secondary'
					onClick={() => navigate('/cart')}
				>
					<ShoppingCart /> <span className='mobile:text-[0]'>Корзина</span>
				</Button>
			</div>
			<div className='py-10'>
				<Button
					className='transition-all flex justify-around w-36 hover:w-52 mobile:w-14'
					variant='secondary'
					onClick={() => navigate('/user')}
				>
					<User /> <span className='mobile:text-[0]'>Профиль</span>
				</Button>
			</div>
		</div>
	)
}

export default Header
