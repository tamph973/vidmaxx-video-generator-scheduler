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
			'Connect your accounts and let VidMaxx post to YouTube, TikTok, and Instagram automatically.',
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

				<div className='relative grid gap-8 md:grid-cols-3'>
					{/* Connecting line for desktop */}
					<div className='absolute top-12 hidden h-0.5 w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent md:block' />

					{steps.map((step, index) => (
						<div
							key={step.title}
							className='relative flex flex-col items-center text-center'>
							<div className='mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-black bg-zinc-900 shadow-xl z-10'>
								<step.icon className='h-10 w-10 text-primary' />
							</div>
							<div className='absolute top-12 left-1/2 -ml-12 h-24 w-24 -z-10 rounded-full bg-primary/20 blur-xl'></div>

							<h3 className='mb-2 text-xl font-bold text-white'>
								{step.title}
							</h3>
							<p className='text-zinc-400 max-w-xs'>
								{step.description}
							</p>

							{index < steps.length - 1 && (
								<ArrowRight className='absolute right-[-20px] top-20 hidden md:block text-zinc-700 w-8 h-8 -rotate-45 opacity-0' />
							)}
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
}
