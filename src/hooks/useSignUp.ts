import { SignUpProps, signUp } from '@/api/signup'
import { toast } from '@/components/ui/use-toast'
import { setupUser } from '@/store/slices/userSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export const useSignUp = (data: SignUpProps) => {
	const [loading, setLoading] = useState<boolean>(false)
	const dispatch = useDispatch()

	const fetchResponse = async (submit: () => void) => {
		setLoading(true)
		const response = await signUp(data)
		if (response?.data.status_code === 201) {
			toast({
				title: 'Успешно',
				description: 'Вы вошли в систему',
			})
			dispatch(setupUser(data))
			submit()
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
