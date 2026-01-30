import { Container } from '@/components/ui/container';

// Placeholder logos - in a real app these would be SVGs
const CompanyLogo = ({ name }: { name: string }) => (
	<div className='flex items-center gap-2 text-xl font-bold text-zinc-500 grayscale transition-all hover:grayscale-0 hover:text-white'>
		<div className='h-6 w-6 rounded-full bg-current opacity-50' />
		{name}
	</div>
);

export function SocialProof() {
	return (
		<section className='border-y border-white/5 bg-black py-12'>
			<Container>
				<p className='mb-8 text-center text-sm font-medium text-zinc-500'>
					TRUSTED BY CREATORS AND TEAMS AT
				</p>
				<div className='flex flex-wrap justify-center gap-x-12 gap-y-8 md:gap-x-16'>
					{[
						'TechFlow',
						'CreatorLabs',
						'ViralNation',
						'Streamline',
						'MediaX',
					].map((name) => (
						<CompanyLogo key={name} name={name} />
					))}
				</div>
			</Container>
		</section>
	);
}
