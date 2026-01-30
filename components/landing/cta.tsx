import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function CTA() {
	return (
		<section className='relative overflow-hidden py-24'>
			<div className='absolute inset-0 bg-primary/20 blur-3xl opacity-20' />
			<Container className='relative'>
				<div className='rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-8 text-center shadow-2xl md:p-16'>
					<h2 className='mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl'>
						Ready to automate your video growth?
					</h2>
					<p className='mx-auto mb-8 max-w-xl text-lg text-zinc-400'>
						Join thousands of creators using VidMaxx to save time
						and go viral. Start your free trial today.
					</p>
					<div className='flex flex-col items-center justify-center gap-4 sm:flex-row'>
						<Button
							size='lg'
							className='h-12 rounded-full px-8 text-base font-semibold'>
							Get Started for Free
						</Button>
						<Button
							size='lg'
							variant='outline'
							className='h-12 rounded-full border-white/10 bg-black/50 text-base text-white hover:bg-white/10'>
							Contact Sales
						</Button>
					</div>
				</div>
			</Container>
		</section>
	);
}
