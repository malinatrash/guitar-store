import { useSignUp } from '@/hooks/useSignUp'
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

const SignUpForm = () => {
	const [firstname, setfirstname] = useState<string>('')
	const [lastname, setlastname] = useState<string>('')
	const [email, setemail] = useState<string>('')
	const [password, setpassword] = useState<string>('')

	const data = useSignUp({
		firstname,
		lastname,
		email,
		password,
	})

	const signUp = () => {
		data.fetchResponse()
	}

	return (
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
								<Input
									onChange={e => setfirstname(e.target.value)}
									value={firstname}
									id='firstname'
									type='text'
									placeholder='Иван'
								/>
							</div>
							<div className='space-y-1 w-1/2'>
								<Label>Фамилия</Label>
								<Input
									onChange={e => setlastname(e.target.value)}
									value={lastname}
									id='lastname'
									type='text'
									placeholder='Иванов'
								/>
							</div>
						</div>
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
					</form>
					<div className='space-y-1'>
						<Label>Пароль</Label>
						<Input
							onChange={e => setpassword(e.target.value)}
							value={password}
							id='password'
							type='password'
							placeholder='Пароль'
						/>
					</div>
				</CardContent>
				<CardFooter>
					<Button className='w-40' onClick={signUp}>
						{data.loading ? (
							<img className='w-full p-4' src='/assets/loader.svg' alt='' />
						) : (
							'Зарегистрироваться'
						)}
					</Button>
				</CardFooter>
			</Card>
		</TabsContent>
	)
}

export default SignUpForm
