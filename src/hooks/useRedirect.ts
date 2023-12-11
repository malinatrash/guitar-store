import { useToast } from '@/components/ui/use-toast'
import { RootState } from '@/store/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export const useRedirect = () => {
	const user = useSelector((state: RootState) => state.user)
	const { toast } = useToast()
	const navigate = useNavigate()

	useEffect(() => {
		if (user.user_id! < 1) {
			toast({
				title: 'Ошибка',
				description:
					'Чтобы просматривать эту страницу небходимо войти в аккаунт',
				variant: 'destructive',
			})
			navigate('/')
		}
	}, [navigate, toast, user])
}
