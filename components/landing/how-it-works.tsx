import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { ArrowRight, Bot, Settings2, Share2 } from 'lucide-react';

const steps = [
	{
		title: 'Generate with AI',
		description:
			'Enter a topic or URL, and our AI creates a script, selects visuals, and adds voiceovers.',
		icon: Bot,
	},
	{
		title: 'Customize & Edit',
		description:
			'Tweak captions, change styles, or edit the script in our easy-to-use editor.',
		icon: Settings2,
	},
	{
		title: 'Auto-Schedule',
		description:
			'Connect your accounts and let VidMax post to YouTube, TikTok, and Instagram automatically.',
		icon: Share2,
	},
];

export function HowItWorks() {
	return (
		<Section
			id='how-it-works'
			className='relative border-y border-white/5 bg-black'>
			<Container>
				<div className='mb-12 text-center md:mb-20'>
					<h2 className='mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
						How it works
					</h2>
					<p className='mx-auto max-w-2xl text-lg text-zinc-400'>
						From idea to published video in minutes. Streamlined for
						efficiency.
					</p>
				</div>

				<div className='grid gap-12 md:grid-cols-3'>
					{steps.map((step) => (
						<div
							key={step.title}
							className='flex flex-col items-center text-center cursor-pointer'>
							<div className='mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900 border border-white/15 text-primary transition-colors duration-200 hover:bg-zinc-800 hover:border-white/25'>
								<step.icon
									className='h-10 w-10'
									aria-hidden='true'
								/>
							</div>
							<h3 className='mb-3 text-xl font-bold text-white'>
								{step.title}
							</h3>
							<p className='leading-relaxed text-zinc-400'>
								{step.description}
							</p>
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
}
