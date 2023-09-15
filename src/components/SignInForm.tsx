import { useSignIn } from '@/hooks/useSignIn'
import { Label } from '@radix-ui/react-dropdown-menu'
import { TabsContent } from '@radix-ui/react-tabs'
import { useState } from 'react'
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

const SignInForm = () => {
	const [email, setemail] = useState<string>('')
	const [password, setpassword] = useState<string>('')
	const data = useSignIn({ email, password })

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
							<Input
								onChange={e => setemail(e.target.value)}
								value={email}
								id='email'
								type='email'
								placeholder='example@domain.com'
							/>
						</div>
						<div className='space-y-1'>
							<Label>Пароль</Label>
							<Input
								onChange={e => setpassword(e.target.value)}
								value={password}
								placeholder='Пароль'
								type='password'
								id='password'
							/>
						</div>
					</form>
				</CardContent>
				<CardFooter>
					<Button onClick={() => data.fetchResponse()}>
						{data.loading ? (
							<img className='w-full p-4' src='/assets/loader.svg' alt='' />
						) : (
							'Войти'
						)}
					</Button>
				</CardFooter>
			</Card>
		</TabsContent>
	)
}

export default SignInForm
