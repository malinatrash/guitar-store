import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ModeToggle() {
	const { setTheme } = useTheme()

	return (
		<div className='hover:opacity-50 transition-all'>
			<DropdownMenu>
				<DropdownMenuTrigger
					className='w-36 hover:w-52 mobile:w-14 transition-all flex gap-3'
					asChild
				>
					<Button
						className='mobile:text-[0] mobile:pl-3 flex justify-around px-2'
						variant='outline'
						size='icon'
					>
						<div>
							<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 mobile:ml-1' />
							<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:top-[62px] mobile:ml-1' />
							<span className='sr-only'></span>
						</div>
						Тема
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuItem onClick={() => setTheme('light')}>
						Светлая
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setTheme('dark')}>
						Тёмная
					</DropdownMenuItem>
					<DropdownMenuItem onClick={() => setTheme('system')}>
						Системная
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}