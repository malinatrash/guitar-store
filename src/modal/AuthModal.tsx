import SignInForm from '@/components/SignInForm'
import SignUpForm from '@/components/SignUpForm'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { hide } from '@/store/slices/authModalSlice'
import { RootState } from '@/store/store'
import { Tabs, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ModalContext } from './modal-context'

const AuthDialog = () => {
	const isShown = useSelector((state: RootState) => state.authModal.isShown)
	const dispatch = useDispatch()
	const { show, setShow } = useContext(ModalContext)

	const action = () => {
		if (isShown) {
			dispatch(hide())
		}
	}

	const signin = () => {
		dispatch(hide())
	}

	const signup = () => {
		dispatch(hide())
	}

	useEffect(() => {
		setShow(isShown)
	}, [isShown])
	return (
		<Dialog open={show} onOpenChange={action}>
			<DialogContent className='overflow-hidden mobile:max-w-[95%] mobile:self-center flex items-center justify-center flex-wrap'>
				<DialogHeader onClick={() => setShow(false)}></DialogHeader>
				<Tabs defaultValue='account' className='w-[100%]'>
					<TabsList className='grid w-full grid-cols-2 py-2 gap-4 bg-gray-500/10 p-2 rounded-xl mb-3'>
						<TabsTrigger
							className='data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:text-black text-xl py-2 w-50 rounded-3xl transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/50 dark:data-[state=active]:bg-white dark:text-white'
							value='account'
						>
							Вход
						</TabsTrigger>
						<TabsTrigger
							className='data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:text-black  text-xl py-2 w-50 rounded-3xl transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/50 dark:data-[state=active]:bg-white dark:text-white'
							value='password'
						>
							Регистрация
						</TabsTrigger>
					</TabsList>
					<SignInForm signin={signin} />
					<SignUpForm submit={signup} />
				</Tabs>
			</DialogContent>
		</Dialog>
	)
}

export default AuthDialog
