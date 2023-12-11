import { show } from '@/store/slices/authModalSlice'
import { signOut } from '@/store/slices/userSlice'
import { RootState } from '@/store/store'
import { DoorClosed, Heart, Newspaper, ShoppingCart, User } from 'lucide-react'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Button } from './ui/button'
import GuitarStoreLogo from './ui/guitarStoreLogo'
import { ModeToggle } from './ui/modeToggle'
import Quantity from './ui/quantity'
import { ToastAction } from './ui/toast'
import { useToast } from './ui/use-toast'

const Header: FC = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const user = useSelector((state: RootState) => state.user)
	const { toast } = useToast()
	const logout = () => {
		toast({
			title: 'Вы действительно хотите выйти?',
			description: 'Нажмите, чтобы выйти из аккаунта',
			action: (
				<ToastAction onClick={() => dispatch(signOut())} altText='Да'>
					Да
				</ToastAction>
			),
		})
	}
	return (
		<div className='h-36 p-4 bg-black flex justify-between px-[5%]'>
			<GuitarStoreLogo onClick={() => navigate('/')} />
			<div className='flex gap-10 mobile:gap-3 items-center'>
				{user.user_id! > 0 && (
					<div>
						<Button
							className='transition-all flex justify-around mobile:justify-center w-40 hover:w-52 mobile:w-[13vw] mobile:hover:w-[13vw] px-2'
							variant='secondary'
							onClick={() => navigate('/wishlist')}
						>
							<Heart />{' '}
							<span className='mobile:text-[0] flex-nowrap mr-1'>
								Избранное
							</span>
							<Quantity quantity={user.favorites?.length ?? 0} />
						</Button>
					</div>
				)}
				{user.user_id! > 0 && (
					<div>
						<Button
							className='transition-all flex justify-around mobile:justify-center w-40 hover:w-52 mobile:w-[13vw] mobile:hover:w-[13vw]'
							variant='secondary'
							onClick={() => navigate('/cart')}
						>
							<ShoppingCart /> <span className='mobile:text-[0]'>Корзина</span>
							<Quantity quantity={user.cart?.length ?? 0} />
						</Button>
					</div>
				)}
				{user?.orders?.length !== undefined && user.orders.length > 0 && (
					<div>
						<Button
							className='transition-all flex justify-around mobile:justify-center w-40 hover:w-52 mobile:w-[13vw] mobile:hover:w-[13vw]'
							variant='secondary'
							onClick={() => navigate('/orders')}
						>
							<Newspaper /> <span className='mobile:text-[0]'>Заказы</span>
							<Quantity quantity={user.orders.length} />
						</Button>
					</div>
				)}

				<div>
					{user.user_id! > 0 ? (
						<Button
							className='transition-all flex justify-around mobile:justify-center w-40 hover:w-52 mobile:w-[13vw] mobile:hover:w-[13vw]'
							variant='secondary'
							onClick={logout}
						>
							<DoorClosed />{' '}
							<span className='mobile:text-[0]'>{user.firstname}</span>
						</Button>
					) : (
						<Button
							className='transition-all flex justify-around mobile:justify-center w-40 hover:w-52 mobile:w-[13vw] mobile:hover:w-[13vw]'
							variant='secondary'
							onClick={() => dispatch(show())}
						>
							<User /> <span className='mobile:text-[0]'>Войти</span>
						</Button>
					)}
				</div>
				<ModeToggle />
			</div>
		</div>
	)
}

export default Header
