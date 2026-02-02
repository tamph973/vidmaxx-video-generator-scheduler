import { Container } from '@/components/ui/container';

// Company logo component with clean, monochrome design
const CompanyLogo = ({ name }: { name: string }) => {
	// Generate initials from company name
	const initials = name
		.split(/(?=[A-Z])/)
		.map((word) => word[0])
		.join('')
		.toUpperCase()
		.slice(0, 2);

	return (
		<div className='group flex items-center gap-3 transition-all duration-300 cursor-pointer'>
			{/* Logo icon */}
			<div className='relative flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800/50 border border-zinc-700/50 transition-all duration-300 group-hover:bg-zinc-700/50 group-hover:border-zinc-600 group-hover:scale-110'>
				<span className='text-xs font-bold text-zinc-400 transition-colors duration-300 group-hover:text-zinc-200'>
					{initials}
				</span>
			</div>
			{/* Company name */}
			<span className='text-lg font-semibold text-zinc-500 transition-all duration-300 group-hover:text-zinc-300'>
				{name}
			</span>
		</div>
	);
};

export function SocialProof() {
	const companies = [
		'TechFlow',
		'CreatorLabs',
		'ViralNation',
		'Streamline',
		'MediaX',
	];

	return (
		<section className='border-y border-white/5 bg-black py-16 md:py-20'>
			<Container>
				<div className='text-center'>
					<p className='mb-10 text-sm font-semibold tracking-wider text-zinc-500 uppercase'>
						Trusted by companies
					</p>
					<div className='flex flex-wrap items-center justify-center gap-x-8 gap-y-8 md:gap-x-12 lg:gap-x-16'>
						{companies.map((name) => (
							<CompanyLogo key={name} name={name} />
						))}
					</div>
				</div>
			</Container>
		</section>
	);
}
