'use client';

import * as React from 'react';
import { UserButton } from '@clerk/nextjs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { Bell, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function DashboardHeader() {
	return (
		<header className='flex h-16 shrink-0 items-center justify-between gap-2 border-b px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10'>
			<div className='flex items-center gap-2'>
				<SidebarTrigger className='-ml-1' />
				<Separator orientation='vertical' className='mr-2 h-4' />
				<Button
					variant='ghost'
					size='sm'
					className='gap-2 text-muted-foreground hover:text-foreground hidden md:flex'
					asChild>
					<Link href='/'>
						<ArrowLeft className='size-4' />
						<span>Home</span>
					</Link>
				</Button>
			</div>
			<div className='flex items-center gap-4'>
				<Button
					variant='ghost'
					size='icon'
					className='text-muted-foreground hover:text-foreground'>
					<Bell className='size-5' />
				</Button>
				<div className='flex items-center gap-2 pl-2 border-l'>
					<UserButton
						afterSignOutUrl='/'
						appearance={{
							elements: {
								avatarBox: 'h-9 w-9 ring-2 ring-background',
								userButtonPopoverCard:
									'shadow-xl border-border',
							},
						}}
					/>
				</div>
			</div>
		</header>
	);
}
