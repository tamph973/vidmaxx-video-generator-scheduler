import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { PlayCircle, ArrowRight, Sparkles } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';

export function Hero() {
	return (
		<section className='relative overflow-hidden bg-black pb-16 pt-32 lg:pb-32 lg:pt-48'>
			{/* Simple static gradient background - performance optimized */}
			<div
				className='absolute inset-0 bg-gradient-to-b from-[#1C39BB]/5 via-black to-black pointer-events-none'
				aria-hidden='true'
			/>

			<Container className='relative'>
				<div className='flex flex-col items-center text-center'>
					{/* Badge with fade-in */}
					<div className='mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300 backdrop-blur-sm animate-fade-in'>
						<span className='mr-2 flex h-2 w-2' aria-hidden='true'>
							<span className='absolute inline-flex h-2 w-2 animate-ping rounded-full bg-primary opacity-75'></span>
							<span className='relative inline-flex h-2 w-2 rounded-full bg-primary'></span>
						</span>
						<span className='mr-2'>
							New: Auto-Schedule to TikTok
						</span>
						<ArrowRight className='h-3 w-3' aria-hidden='true' />
					</div>

					{/* Heading with staggered fade-in */}
					<h1 className='mb-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl lg:leading-tight animate-fade-in-up animation-delay-100'>
						Generate & Schedule <br />
						<span className='bg-gradient-to-r from-[#537BEB] via-[#2859E6] to-[#1C39BB] bg-clip-text text-transparent'>
							Viral Short Videos
						</span>{' '}
						with AI
					</h1>

					{/* Description with fade-in */}
					<p className='mb-8 max-w-2xl text-lg leading-relaxed text-zinc-400 animate-fade-in-up animation-delay-200'>
						Stop spending hours editing. VidMaxx creates, edits, and
						schedules Shorts, Reels, and TikToks automatically 10x
						faster.
					</p>

					{/* CTA buttons with fade-in */}
					<div className='flex w-full flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up animation-delay-300'>
						<SignedIn>
							<Button
								size='lg'
								asChild
								className='group h-12 min-w-[160px] rounded-full text-base transition-colors duration-200'>
								<Link href='/dashboard'>
									<Sparkles
										className='mr-2 h-4 w-4 transition-transform group-hover:rotate-12'
										aria-hidden='true'
									/>
									Go to Dashboard
								</Link>
							</Button>
						</SignedIn>
						<SignedOut>
							<SignInButton mode='modal'>
								<Button
									size='lg'
									className='group h-12 min-w-[160px] rounded-full text-base transition-colors duration-200'>
									<Sparkles
										className='mr-2 h-4 w-4 transition-transform group-hover:rotate-12'
										aria-hidden='true'
									/>
									Start Free Trial
								</Button>
							</SignInButton>
						</SignedOut>

						<Button
							size='lg'
							variant='outline'
							className='h-12 min-w-[160px] rounded-full text-base transition-colors duration-200'>
							<PlayCircle
								className='mr-2 h-4 w-4'
								aria-hidden='true'
							/>
							Watch Demo
						</Button>
					</div>
				</div>
			</Container>
		</section>
	);
}
