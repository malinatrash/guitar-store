import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './pages/error'
import Home from './pages/home'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
