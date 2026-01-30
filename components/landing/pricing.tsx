import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Check } from 'lucide-react';

const plans = [
	{
		name: 'Free',
		price: '$0',
		description: 'For individuals just getting started.',
		features: [
			'5 AI videos per month',
			'Manual scheduling',
			'Basic templates',
			'720p resolution',
		],
		cta: 'Get Started Free',
		variant: 'outline',
	},
	{
		name: 'Pro',
		price: '$29',
		description: 'For creators who want to grow fast.',
		features: [
			'Unlimited AI videos',
			'Auto-schedule to YT, IG, TikTok',
			'Advanced templates & editing',
			'4K resolution',
			'Priority processing',
		],
		cta: 'Start Free Trial',
		popular: true,
		variant: 'default',
	},
	{
		name: 'Team',
		price: '$99',
		description: 'For agencies and content teams.',
		features: [
			'Everything in Pro',
			'5 Team members',
			'Collaboration tools',
			'Brand kits',
			'Priority support',
		],
		cta: 'Contact Sales',
		variant: 'outline',
	},
];

export function Pricing() {
	return (
		<Section id='pricing' className='bg-zinc-950'>
			<Container>
				<div className='mb-12 text-center md:mb-20'>
					<h2 className='mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
						Simple, transparent pricing
					</h2>
					<p className='mx-auto max-w-2xl text-lg text-zinc-400'>
						Choose the plan that fits your needs. Cancel anytime.
					</p>
				</div>
				<div className='grid gap-8 md:grid-cols-3'>
					{plans.map((plan) => (
						<div
							key={plan.name}
							className={`relative flex flex-col rounded-2xl border p-8 shadow-sm transition-all ${
								plan.popular
									? 'border-primary bg-zinc-900 shadow-primary/20 scale-105 z-10'
									: 'border-white/10 bg-white/5 hover:bg-white/10'
							}`}>
							{plan.popular && (
								<div className='absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-primary to-purple-500 px-3 py-1 text-center text-sm font-medium text-white shadow-lg'>
									Most Popular
								</div>
							)}
							<h3 className='text-xl font-bold text-white'>
								{plan.name}
							</h3>
							<div className='my-4 flex items-baseline text-white'>
								<span className='text-4xl font-bold'>
									{plan.price}
								</span>
								<span className='ml-2 text-zinc-400'>
									/month
								</span>
							</div>
							<p className='mb-6 text-zinc-400'>
								{plan.description}
							</p>
							<ul className='mb-8 space-y-4 flex-1'>
								{plan.features.map((feature) => (
									<li
										key={feature}
										className='flex items-center text-zinc-300'>
										<Check className='mr-3 h-5 w-5 text-primary' />
										{feature}
									</li>
								))}
							</ul>
							<Button
								variant={
									plan.variant === 'default'
										? 'default'
										: 'outline'
								}
								className={`w-full rounded-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'border-white/10 text-white hover:bg-white/10'}`}>
								{plan.cta}
							</Button>
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
}
