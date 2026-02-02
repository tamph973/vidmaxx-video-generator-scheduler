'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';
import { useEffect, useState } from 'react';

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 z-50 w-full border-b transition-colors duration-200 ${
				scrolled
					? 'border-white/15 bg-black/95 shadow-lg'
					: 'border-white/10 bg-black/90'
			}`}>
			<Container className='flex h-16 items-center justify-between'>
				<Link
					href='/'
					className='flex items-center gap-2 transition-transform hover:scale-105'>
					<Image
						src='/logo.png'
						alt='VidMaxx Logo'
						width={32}
						height={32}
						className='h-8 w-8'
						priority
					/>
					<span className='text-xl font-bold text-white'>
						VidMaxx
					</span>
				</Link>
				<nav
					className='hidden gap-6 md:flex'
					aria-label='Main navigation'>
					<Link
						href='#features'
						className='text-sm font-medium text-zinc-400 transition-all hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm px-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full'>
						Features
					</Link>
					<Link
						href='#how-it-works'
						className='text-sm font-medium text-zinc-400 transition-all hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm px-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full'>
						How It Works
					</Link>
					<Link
						href='#pricing'
						className='text-sm font-medium text-zinc-400 transition-all hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm px-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full'>
						Pricing
					</Link>
				</nav>
				<div className='flex items-center gap-4'>
					<SignedOut>
						<SignInButton mode='modal'>
							<Button
								variant='ghost'
								className='text-zinc-400 hover:text-white'>
								Login
							</Button>
						</SignInButton>
						<SignInButton mode='modal'>
							<Button
								size='sm'
								className='rounded-full px-6 font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25'>
								Get Started
							</Button>
						</SignInButton>
					</SignedOut>
					<SignedIn>
						<Button
							size='sm'
							variant='ghost'
							asChild
							className='mr-2 text-zinc-400 hover:text-white'>
							<Link href='/dashboard'>Dashboard</Link>
						</Button>
						<UserButton />
					</SignedIn>
				</div>
			</Container>
		</header>
	);
}
