import { fetchWishList } from '@/api/fetchWishlist'
import { sendWishlistItem } from '@/api/sendWishlistItem'
import { useToast } from '@/components/ui/use-toast'
import { Product } from '@/models/product'
import { setupWishlist } from '@/store/slices/userSlice'
import { RootState } from '@/store/store'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const useWishList = (product: Product) => {
	const [isFavorite, setisFavorite] = useState(false)
	const { toast } = useToast()
	const user = useSelector((state: RootState) => state.user)
	const dispatch = useDispatch()

	useEffect(() => {
		if (!user.favorites) return
		const isFavorite = user.favorites!.some(
			prod => prod.product_id === product.product_id
		)
		setisFavorite(isFavorite)
	}, [user.favorites, product.product_id])

	const addToWishlist = async () => {
		const userId = user.user_id ?? -1
		const res = await sendWishlistItem({
			user_id: userId,
			product_id: product.product_id,
		})

		const wishlist = await fetchWishList(userId)
		dispatch(setupWishlist(wishlist))

		if (res === 200 || res === 201) {
			const toastTitle = isFavorite
				? 'Товар удален из избранного'
				: 'Товар добавлен в избранное'
			toast({
				title: toastTitle,
				description: product.product_name,
			})
		} else {
			const toastTitle =
				user.role === 'guest' ? 'Войдите в систему' : 'Произошла ошибка'
			toast({
				title: toastTitle,
				variant: 'destructive',
			})
		}
	}

	return { addToWishlist, isFavorite }
}
