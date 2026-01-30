import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Video } from 'lucide-react';

export function Navbar() {
	return (
		<header className='fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl'>
			<Container className='flex h-16 items-center justify-between'>
				<Link href='/' className='flex items-center gap-2'>
					<div className='flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground'>
						<Video className='h-4 w-4' />
					</div>
					<span className='text-lg font-bold tracking-tight text-white'>
						VidMaxx
					</span>
				</Link>
				<nav className='hidden gap-6 md:flex'>
					<Link
						href='#features'
						className='text-sm font-medium text-zinc-400 transition-colors hover:text-white'>
						Features
					</Link>
					<Link
						href='#how-it-works'
						className='text-sm font-medium text-zinc-400 transition-colors hover:text-white'>
						How It Works
					</Link>
					<Link
						href='#pricing'
						className='text-sm font-medium text-zinc-400 transition-colors hover:text-white'>
						Pricing
					</Link>
				</nav>
				<div className='flex items-center gap-4'>
					<Link
						href='/login'
						className='hidden text-sm font-medium text-zinc-400 transition-colors hover:text-white md:block'>
						Login
					</Link>
					<Button
						size='sm'
						className='rounded-full px-6 font-semibold'>
						Get Started
					</Button>
				</div>
			</Container>
		</header>
	);
}
