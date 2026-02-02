'use client';

import * as React from 'react';
import { Moon, Sun, Sparkles } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ModeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					size='icon-xs'
					className='bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-900 transition-all rounded-md '>
					<Sun className='size-3 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-slate-600 dark:text-slate-400' />
					<Moon className='absolute size-3 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-slate-600 dark:text-slate-400' />
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align='end'
				className='min-w-[120px] rounded-xl border-slate-200 dark:border-slate-800 p-1.5 shadow-xl'>
				<DropdownMenuItem
					onClick={() => setTheme('light')}
					className='rounded-lg px-2.5 py-2 text-sm font-medium focus:bg-slate-100 dark:focus:bg-slate-800 transition-colors'>
					<Sun className='mr-2 size-4 text-slate-500' />
					Light
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setTheme('dark')}
					className='rounded-lg px-2.5 py-2 text-sm font-medium focus:bg-slate-100 dark:focus:bg-slate-800 transition-colors'>
					<Moon className='mr-2 size-4 text-slate-500' />
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => setTheme('system')}
					className='rounded-lg px-2.5 py-2 text-sm font-medium focus:bg-slate-100 dark:focus:bg-slate-800 transition-colors'>
					<Sparkles className='mr-2 size-4 text-slate-500' />
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
