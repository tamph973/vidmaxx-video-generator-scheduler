import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Video, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export function Footer() {
	return (
		<footer className='border-t border-white/10 bg-black pt-16 pb-8'>
			<Container>
				<div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12'>
					<div className='space-y-4'>
						<Link href='/' className='flex items-center gap-2'>
							<div className='flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground'>
								<Video className='h-4 w-4' />
							</div>
							<span className='text-xl font-bold text-white'>
								VidMax
							</span>
						</Link>
						<p className='text-sm text-zinc-400'>
							AI-powered short video generation and scheduling for
							modern creators.
						</p>
						<div className='flex gap-4'>
							<Link
								href='#'
								className='text-zinc-400 hover:text-white'>
								<Twitter className='h-5 w-5' />
							</Link>
							<Link
								href='#'
								className='text-zinc-400 hover:text-white'>
								<Instagram className='h-5 w-5' />
							</Link>
							<Link
								href='#'
								className='text-zinc-400 hover:text-white'>
								<Linkedin className='h-5 w-5' />
							</Link>
							<Link
								href='#'
								className='text-zinc-400 hover:text-white'>
								<Github className='h-5 w-5' />
							</Link>
						</div>
					</div>

					<div>
						<h3 className='mb-4 text-sm font-semibold text-white'>
							Product
						</h3>
						<ul className='space-y-3 text-sm text-zinc-400'>
							<li>
								<Link href='#' className='hover:text-primary'>
									Features
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-primary'>
									Pricing
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-primary'>
									Roadmap
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-primary'>
									Changelog
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='mb-4 text-sm font-semibold text-white'>
							Company
						</h3>
						<ul className='space-y-3 text-sm text-zinc-400'>
							<li>
								<Link href='#' className='hover:text-primary'>
									About
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-primary'>
									Careers
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-primary'>
									Blog
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-primary'>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='mb-4 text-sm font-semibold text-white'>
							Legal
						</h3>
						<ul className='space-y-3 text-sm text-zinc-400'>
							<li>
								<Link href='#' className='hover:text-primary'>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-primary'>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link href='#' className='hover:text-primary'>
									Cookie Policy
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className='mt-16 border-t border-white/10 pt-8 text-center text-sm text-zinc-500'>
					&copy; {new Date().getFullYear()} VidMax Inc. All rights
					reserved.
				</div>
			</Container>
		</footer>
	);
}
