import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { PlayCircle, ArrowRight, Sparkles } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';

export function Hero() {
	return (
		<div className='relative overflow-hidden bg-black pb-16 pt-32 lg:pb-32 lg:pt-48'>
			{/* Background gradients */}
			<div className='absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[128px]' />
			<div className='absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[128px]' />

			<Container className='relative'>
				<div className='flex flex-col items-center text-center'>
					<div className='mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300 backdrop-blur-sm'>
						<span className='mr-2 flex h-2 w-2'>
							<span className='absolute inline-flex h-2 w-2 animate-ping rounded-full bg-primary opacity-75'></span>
							<span className='relative inline-flex h-2 w-2 rounded-full bg-primary'></span>
						</span>
						<span className='mr-2'>
							New: Auto-Schedule to TikTok
						</span>
						<ArrowRight className='h-3 w-3' />
					</div>

					<h1 className='mb-6 max-w-4xl text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl'>
						Generate & Schedule <br />
						<span className='bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent'>
							Viral Short Videos
						</span>{' '}
						with AI
					</h1>

					<p className='mb-8 max-w-2xl text-lg text-zinc-400'>
						Stop spending hours editing. VidMaxx creates, edits, and
						schedules Shorts, Reels, and TikToks automatically 10x
						faster.
					</p>

					<div className='flex w-full flex-col items-center justify-center gap-4 sm:flex-row'>
						<SignedIn>
							<Button
								size='lg'
								asChild
								className='group h-12 min-w-[160px] rounded-full text-base'>
								<Link href='/dashboard'>
									<Sparkles className='mr-2 h-4 w-4 transition-transform group-hover:scale-110' />
									Go to Dashboard
								</Link>
							</Button>
						</SignedIn>
						<SignedOut>
							<SignInButton mode='modal'>
								<Button
									size='lg'
									className='group h-12 min-w-[160px] rounded-full text-base'>
									<Sparkles className='mr-2 h-4 w-4 transition-transform group-hover:scale-110' />
									Start Free Trial
								</Button>
							</SignInButton>
						</SignedOut>

						<Button
							size='lg'
							variant='outline'
							className='h-12 min-w-[160px] rounded-full border-white/10 bg-white/5 text-base text-white backdrop-blur-sm hover:bg-white/10 hover:text-white'>
							<PlayCircle className='mr-2 h-4 w-4' />
							Watch Demo
						</Button>
					</div>

					{/* Hero Visual Placeholder */}
					<div className='mt-16 w-full max-w-5xl rounded-xl border border-white/10 bg-zinc-900/50 p-2 shadow-2xl backdrop-blur-sm lg:mt-24'>
						<div className='relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-950'>
							<div className='absolute inset-0 flex items-center justify-center'>
								<p className='text-zinc-700 font-medium'>
									App Dashboard / Video Preview
								</p>
							</div>
							{/* Decorative UI elements mimicking an app interface */}
							<div className='absolute left-6 top-6 h-8 w-32 rounded-md bg-zinc-900' />
							<div className='absolute right-6 top-6 flex gap-2'>
								<div className='h-8 w-8 rounded-full bg-zinc-900' />
								<div className='h-8 w-8 rounded-full bg-zinc-900' />
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	);
}
