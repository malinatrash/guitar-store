import { Label } from '@radix-ui/react-dropdown-menu'
import { TabsContent } from '@radix-ui/react-tabs'
import { FC } from 'react'
import { Button } from './ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card'
import { Input } from './ui/input'

interface ISignInForm {
	signin: () => void
}

const SignInForm: FC<ISignInForm> = ({ signin }) => {
	return (
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
							<Input id='email' type='email' placeholder='example@domain.com' />
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
	)
}

export default SignInForm
