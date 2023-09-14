import { Product } from '@/models/product'
import axios from 'axios'
import { domain } from './domain'
import { format } from './format'

export const fetchProductList = () =>
	axios.get<Product[]>(`${domain}products${format}`)
