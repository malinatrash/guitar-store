import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Cart } from './pages/cart'
import ErrorPage from './pages/error'
import { Home } from './pages/home'
import { Orders } from './pages/orders'
import Product from './pages/product'
import { Wishlist } from './pages/wishlist'
import { store } from './store/store'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/product',
		element: <Product />,
	},
	{
		path: '/wishlist',
		element: <Wishlist />,
	},
	{
		path: '/cart',
		element: <Cart />,
	},
	{
		path: '/orders',
		element: <Orders />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
)
