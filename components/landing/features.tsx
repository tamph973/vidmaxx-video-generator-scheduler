import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Wand2, CalendarClock, Zap, LayoutDashboard } from 'lucide-react';

const features = [
	{
		title: 'AI Video Generator',
		description:
			'Transform text prompts or blog posts into engaging short-form videos with AI-generated voiceovers and visuals.',
		icon: Wand2,
	},
	{
		title: 'Multi-platform Scheduling',
		description:
			'Auto-post your content to YouTube Shorts, Instagram Reels, and TikTok simultaneously with a single click.',
		icon: CalendarClock,
	},
	{
		title: 'Automation & Time-saving',
		description:
			'Set up recurring schedules and let our AI handle the daily posting grind. Save 20+ hours per week.',
		icon: Zap,
	},
	{
		title: 'Simple SaaS Dashboard',
		description:
			'Track performance, manage multiple accounts, and collaborate with your team from one intuitive dashboard.',
		icon: LayoutDashboard,
	},
];

export function Features() {
	return (
		<Section id='features' className='bg-zinc-950'>
			<Container>
				<div className='mb-16 text-center'>
					<h2 className='mb-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl'>
						Everything you need to go viral
					</h2>
					<p className='mx-auto max-w-2xl text-lg leading-relaxed text-zinc-400'>
						Powerful tools designed to help creators and marketers
						scale their short-form video presence without the
						burnout.
					</p>
				</div>
				<div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
					{features.map((feature, index) => (
						<div
							key={feature.title}
							className='group flex flex-col rounded-xl border border-white/15 bg-zinc-900 p-8 transition-colors duration-200 hover:border-white/25 cursor-pointer'>
							<div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary/20'>
								<feature.icon
									className='h-6 w-6'
									aria-hidden='true'
								/>
							</div>
							<h3 className='mb-3 text-xl font-bold text-white'>
								{feature.title}
							</h3>
							<p className='leading-relaxed text-zinc-400'>
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
}
