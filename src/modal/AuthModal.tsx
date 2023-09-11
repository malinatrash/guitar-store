import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { hide } from '@/store/slices/authModalSlice'
import { RootState } from '@/store/store'
import { Label } from '@radix-ui/react-dropdown-menu'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
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
			<DialogContent className='mobile:max-w-[80%] mobile:left-[45%] flex items-center justify-center flex-wrap'>
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
					<TabsContent value='account'>
						<Card>
							<CardHeader>
								<CardTitle>Вход</CardTitle>
								<CardDescription>
									Пожалуйста, введите свои данные для входа в систему
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-2'>
								<form>
									<div className='space-y-1'>
										<Label>Почта</Label>
										<Input
											id='email'
											type='email'
											placeholder='example@domain.com'
										/>
									</div>
									<div className='space-y-1'>
										<Label>Пароль</Label>
										<Input placeholder='Пароль' type='password' id='password' />
									</div>
								</form>
							</CardContent>
							<CardFooter>
								<Button onClick={signin}>Войти</Button>
							</CardFooter>
						</Card>
					</TabsContent>
					<TabsContent value='password'>
						<Card>
							<CardHeader>
								<CardTitle>Регистрация</CardTitle>
								<CardDescription>
									Пожалуйста, заполните форму для регистрации в системе
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-2'>
								<form action=''>
									<div className='flex gap-3 justify-between'>
										<div className='space-y-1 w-1/2'>
											<Label>Имя</Label>
											<Input id='firstname' type='text' placeholder='Иван' />
										</div>
										<div className='space-y-1 w-1/2'>
											<Label>Фамилия</Label>
											<Input id='lastname' type='text' placeholder='Иванов' />
										</div>
									</div>
									<div className='space-y-1'>
										<Label>Почта</Label>
										<Input
											id='email'
											type='email'
											placeholder='example@domain.com'
										/>
									</div>
								</form>
								<div className='space-y-1'>
									<Label>Пароль</Label>
									<Input id='password' type='password' placeholder='Пароль' />
								</div>
							</CardContent>
							<CardFooter>
								<Button onClick={signup}>Зарегистрироваться</Button>
							</CardFooter>
						</Card>
					</TabsContent>
				</Tabs>
			</DialogContent>
		</Dialog>
	)
}

export default AuthDialog
