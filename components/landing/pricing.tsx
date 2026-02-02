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
				<div className='mb-16 text-center'>
					<h2 className='mb-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl'>
						Simple, transparent pricing
					</h2>
					<p className='mx-auto max-w-2xl text-lg leading-relaxed text-zinc-400'>
						Choose the plan that fits your needs. Cancel anytime.
					</p>
				</div>
				<div className='grid gap-8 md:grid-cols-3'>
					{plans.map((plan) => (
						<div
							key={plan.name}
							className={`relative flex flex-col rounded-2xl border p-8 shadow-sm transition-colors duration-200 cursor-pointer ${
								plan.popular
									? 'border-primary/50 bg-zinc-900 shadow-primary/10 hover:border-primary'
									: 'border-white/20 bg-zinc-900 hover:bg-zinc-800 hover:border-white/30'
							}`}
							aria-label={
								plan.popular ? 'Most popular plan' : undefined
							}>
							{plan.popular && (
								<div className='absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-primary px-3 py-1.5 text-center text-xs font-semibold text-white shadow-md'>
									Most Popular
								</div>
							)}
							<h3 className='mb-4 text-xl font-bold text-white'>
								{plan.name}
							</h3>
							<div className='mb-4 flex items-baseline text-white'>
								<span className='text-4xl font-bold'>
									{plan.price}
								</span>
								<span className='ml-2 text-zinc-400'>
									/month
								</span>
							</div>
							<p className='mb-6 leading-relaxed text-zinc-400'>
								{plan.description}
							</p>
							<ul className='mb-8 space-y-4 flex-1 list-none'>
								{plan.features.map((feature) => (
									<li
										key={feature}
										className='flex items-center leading-relaxed text-zinc-300'>
										<Check
											className='mr-3 size-5 shrink-0 text-primary'
											aria-hidden='true'
										/>
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
								className={`w-full rounded-full transition-all hover:scale-105 ${plan.popular ? 'bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50' : 'border-white/10 text-white hover:bg-white/10'}`}>
								{plan.cta}
							</Button>
						</div>
					))}
				</div>
			</Container>
		</Section>
	);
}
