import { createContext } from 'react'

interface ModalContext {
	show: boolean
	setShow: (value: boolean) => void
}

export const ModalContext = createContext({
	show: false,
} as ModalContext)
