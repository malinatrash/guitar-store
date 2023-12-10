import { fetchShoppingCart } from '@/api/fetchShoppingCart'
import { fetchWishList } from '@/api/fetchWishlist'
import { SignInProps, signIn } from '@/api/signin'
import { toast } from '@/components/ui/use-toast'
import { hide } from '@/store/slices/authModalSlice'
import { setupCart, setupUser, setupWishlist } from '@/store/slices/userSlice'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export const useSignIn = (data: SignInProps) => {
	const [loading, setLoading] = useState<boolean>(false)
	const dispatch = useDispatch()
	const fetchResponse = async () => {
		setLoading(true)
		const response = await signIn(data)
		if (
			response?.data.status_code === 200 ||
			response?.data.status_code === 201
		) {
			toast({
				title: 'Успешно',
				description: 'Вы вошли в систему',
			})
			dispatch(setupUser(response.data.user))
			const wishlist = await fetchWishList(response.data.user?.user_id ?? -1)
			dispatch(setupWishlist(wishlist))
			const cart = await fetchShoppingCart(response.data.user?.user_id ?? -1)
			dispatch(setupCart(cart))
			setLoading(false)
			dispatch(hide())
		} else {
			toast({
				title: 'Ошибка входа',
				description:
					'Произошла ошибка, проверьте введенные данные и повторите еще раз',
				variant: 'destructive',
			})
			setLoading(false)
		}
	}

	return { loading, fetchResponse }
}
