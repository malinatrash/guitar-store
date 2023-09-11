import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
	const error = useRouteError()
	console.error(error)

	return (
		<div
			id='error-page'
			className='flex justify-center items-center h-screen flex-col p-4'
		>
			<h1 className='text-[150px] mobile:text-[80px] text-center animate-bounce'>
				Error 404!
			</h1>
			<p className='text-5xl mobile:text-[20px] text-center'>
				Sorry, an unexpected error has occurred.
			</p>
		</div>
	)
}
