import { SignUpProps, signUp } from '@/api/signup'
import { toast } from '@/components/ui/use-toast'
import { hide } from '@/store/slices/authModalSlice'
import { setupSession, setupUser } from '@/store/slices/userSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export const useSignUp = (data: SignUpProps) => {
	const [loading, setLoading] = useState<boolean>(false)
	const dispatch = useDispatch()

	const fetchResponse = async () => {
		setLoading(true)
		const response = await signUp(data)
		if (response?.data.status_code === 201) {
			toast({
				title: 'Успешно',
				description: 'Вы вошли в систему',
			})
			dispatch(setupUser(response.data.user))
			dispatch(setupSession(response.data.session_id))
			dispatch(hide())
		} else {
			toast({
				title: 'Ошибка регистрации',
				description:
					'Произошла ошибка, проверьте введенные данные и повторите еще раз',
				variant: 'destructive',
			})
		}
		setLoading(false)
	}

	return { loading, fetchResponse }
}
