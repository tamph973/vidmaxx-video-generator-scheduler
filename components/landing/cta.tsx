import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export function CTA() {
	return (
		<section className='relative overflow-hidden py-24'>
			<div className='absolute inset-0 bg-primary/20 blur-3xl opacity-20' />
			<Container className='relative'>
				<div className='relative overflow-hidden rounded-3xl border border-white/20 bg-zinc-900 px-8 py-16 text-center shadow-xl md:px-16 md:py-24'>
					<div className='relative z-10'>
						<h2 className='mb-4 text-4xl font-bold text-white md:text-5xl'>
							Ready to Scale Your Content?
						</h2>
						<p className='mx-auto mb-8 max-w-2xl text-lg text-zinc-400'>
							Join thousands of creators who are already using
							VidMaxx to automate their short-form video strategy.
						</p>
						<div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
							<SignedOut>
								<SignInButton mode='modal'>
									<Button
										size='lg'
										className='h-12 min-w-[200px] rounded-full text-base transition-colors duration-200'>
										<Sparkles
											className='mr-2 h-4 w-4'
											aria-hidden='true'
										/>
										Start Free Trial
									</Button>
								</SignInButton>
							</SignedOut>
							<SignedIn>
								<Button
									size='lg'
									asChild
									className='h-12 min-w-[200px] rounded-full text-base transition-colors duration-200'>
									<Link href='/dashboard'>
										<Sparkles
											className='mr-2 h-4 w-4'
											aria-hidden='true'
										/>
										Go to Dashboard
									</Link>
								</Button>
							</SignedIn>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
