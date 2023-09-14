import { show } from '@/store/slices/authModalSlice'
import { RootState } from '@/store/store'
import { Heart, ShoppingCart, User } from 'lucide-react'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Button } from './ui/button'
import GuitarStoreLogo from './ui/guitarStoreLogo'
import { ModeToggle } from './ui/modeToggle'

const Header: FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const user = useSelector((state: RootState) => state.user)
	return (
		<div className='h-36 p-4 bg-black flex justify-between px-[5%]'>
			<GuitarStoreLogo onClick={() => navigate('/')} />
			<div className='flex gap-10 mobile:gap-3 items-center'>
				<div>
					<Button
						className='transition-all flex justify-around mobile:justify-center w-36 hover:w-52 mobile:w-[13vw] mobile:hover:w-[13vw] px-2'
						variant='secondary'
						onClick={() => navigate('/favorites')}
					>
						<Heart /> <span className='mobile:text-[0]'>Избранное</span>
					</Button>
				</div>
				<div>
					<Button
						className='transition-all flex justify-around mobile:justify-center w-36 hover:w-52 mobile:w-[13vw] mobile:hover:w-[13vw]'
						variant='secondary'
						onClick={() => navigate('/cart')}
					>
						<ShoppingCart /> <span className='mobile:text-[0]'>Корзина</span>
					</Button>
				</div>
				<div>
					<Button
						className='transition-all flex justify-around mobile:justify-center w-36 hover:w-52 mobile:w-[13vw] mobile:hover:w-[13vw]'
						variant='secondary'
						onClick={() => dispatch(show())}
					>
						<User />{' '}
						<span className='mobile:text-[0]'>
							{user.firstname !== '' ? `${user.firstname}` : 'Войти'}
						</span>
					</Button>
				</div>
				<ModeToggle />
			</div>
		</div>
	)
}

export default Header
