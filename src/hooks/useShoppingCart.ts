import { useToast } from '@/components/ui/use-toast'
import { Product } from '@/models/product'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export const useShoppingCart = (product: Product, quantity: number) => {
	const [isInShoppingCart, setIsInShoppingCart] = useState(false)
	const { toast } = useToast()
	const dispatch = useDispatch()

	const addToShopppingCart = () => {}

	return { addToShopppingCart, isInShoppingCart }
}
