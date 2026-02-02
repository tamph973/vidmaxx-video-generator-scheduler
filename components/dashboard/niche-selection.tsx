import {
	CheckCircle2,
	Ghost,
	History,
	Search,
	Zap,
	Lightbulb,
	Cpu,
	TrendingUp,
	Trophy,
	ArrowRight,
	ChevronLeft,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface NicheSelectionProps {
	value?: {
		type: 'preset' | 'custom';
		nicheId?: string;
		customName?: string;
		customDescription?: string;
	};
	onChange: (data: {
		type: 'preset' | 'custom';
		nicheId?: string;
		customName?: string;
		customDescription?: string;
	}) => void;
	onContinue: () => void;
	onBack?: () => void;
	showBack?: boolean;
}

interface Niche {
	id: string;
	name: string;
	description: string;
	icon: any;
	color: string;
}

const availableNiches: Niche[] = [
	{
		id: 'scary-stories',
		name: 'Scary Stories',
		description:
			'Chilling tales and urban legends that give you goosebumps.',
		icon: Ghost,
		color: 'text-red-500 bg-red-100 dark:bg-red-500/10',
	},
	{
		id: 'motivational',
		name: 'Motivational',
		description: 'Boost productivity and mindset with inspiring stories.',
		icon: Zap,
		color: 'text-orange-500 bg-orange-100 dark:bg-orange-500/10',
	},
	{
		id: 'interesting-facts',
		name: 'Interesting Facts',
		description: 'Mind-blowing trivia and facts you never knew about.',
		icon: Lightbulb,
		color: 'text-blue-500 bg-blue-100 dark:bg-blue-500/10',
	},
	{
		id: 'health-fitness',
		name: 'Health & Fitness',
		description: 'Effective workout tips and healthy living habits.',
		icon: Trophy,
		color: 'text-emerald-500 bg-emerald-100 dark:bg-emerald-500/10',
	},
	{
		id: 'tech-news',
		name: 'Tech News',
		description: 'The latest updates from the world of technology.',
		icon: Cpu,
		color: 'text-purple-500 bg-purple-100 dark:bg-purple-500/10',
	},
	{
		id: 'finance-tips',
		name: 'Finance Tips',
		description: 'Master your money with smart investing advice.',
		icon: TrendingUp,
		color: 'text-green-500 bg-green-100 dark:bg-green-500/10',
	},
];

export function NicheSelection({
	value,
	onChange,
	onContinue,
	onBack,
	showBack = false,
}: NicheSelectionProps) {
	const [activeTab, setActiveTab] = useState<'niche' | 'custom'>(
		value?.type === 'custom' ? 'custom' : 'niche',
	);
	const [selectedNiche, setSelectedNiche] = useState<string | null>(
		value?.nicheId || null,
	);
	const [customNiche, setCustomNiche] = useState(value?.customName || '');
	const [customDescription, setCustomDescription] = useState(
		value?.customDescription || '',
	);

	const handleNicheSelect = (niche: Niche) => {
		console.log('niche', niche)
		setSelectedNiche(niche.id);
		onChange({
			type: 'preset',
			customName: niche.name,
			nicheId: niche.id,
			customDescription: niche.description,
		});
	};

	const canContinue =
		(activeTab === 'niche' && selectedNiche !== null) ||
		(activeTab === 'custom' && customNiche.trim().length > 0);

	return (
		<div className='mx-auto w-full'>
			{/* Header */}
			<div className='mb-12'>
				<h2 className='mb-2 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white'>
					Select your niche
				</h2>
				<p className='text-lg text-slate-500 dark:text-slate-400'>
					Choose a niche that best fits your series or create a custom
					one.
				</p>
			</div>

			{/* Sub-Tabs (Available vs Custom) */}
			<div className='mb-12 flex w-fit gap-1 rounded-xl bg-slate-100 p-1 dark:bg-slate-800'>
				<button
					onClick={() => setActiveTab('niche')}
					className={cn(
						'rounded-lg px-8 py-2.5 text-sm font-bold transition-all duration-200',
						activeTab === 'niche'
							? 'bg-white text-slate-950 shadow-sm dark:bg-slate-700 dark:text-white'
							: 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200',
					)}>
					Available Niche
				</button>
				<button
					onClick={() => setActiveTab('custom')}
					className={cn(
						'rounded-lg px-8 py-2.5 text-sm font-bold transition-all duration-200',
						activeTab === 'custom'
							? 'bg-white text-slate-950 shadow-sm dark:bg-slate-700 dark:text-white'
							: 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200',
					)}>
					Custom Niche
				</button>
			</div>

			{/* Grid Content */}
			<div className='mb-20'>
				{activeTab === 'niche' ? (
					<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
						{availableNiches.map((niche) => {
							const Icon = niche.icon;
							const isSelected = selectedNiche === niche.id;

							return (
								<button
									key={niche.id}
									onClick={() => handleNicheSelect(niche)}
									className={cn(
										'group relative flex flex-col items-start rounded-[2rem] border-2 p-8 text-left transition-all duration-300 hover:shadow-xl',
										isSelected
											? 'border-blue-500 bg-white ring-4 ring-blue-50 dark:bg-slate-900 dark:ring-blue-500/5'
											: 'border-slate-100 bg-white hover:border-blue-200 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700',
									)}>
									{/* Top Right Check Badge */}
									{isSelected && (
										<div className='absolute right-6 top-6 animate-in zoom-in-50 duration-300'>
											<div className='flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg'>
												<CheckCircle2 className='h-4 w-4 stroke-[3]' />
											</div>
										</div>
									)}

									{/* Icon Badge */}
									<div
										className={cn(
											'mb-8 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110',
											niche.color,
										)}>
										<Icon className='h-7 w-7 stroke-[2.5]' />
									</div>

									<h3 className='mb-3 text-xl font-bold text-slate-900 dark:text-white'>
										{niche.name}
									</h3>
									<p className='text-[15px] leading-relaxed text-slate-500 dark:text-slate-400'>
										{niche.description}
									</p>
								</button>
							);
						})}
					</div>
				) : (
					<div className='max-w-2xl animate-in slide-in-from-bottom-4 duration-500'>
						<div className='space-y-6 rounded-[2.5rem] border-2 border-slate-100 bg-white p-10 dark:border-slate-800 dark:bg-slate-900'>
							<div>
								<label className='mb-3 block text-sm font-bold text-slate-900 dark:text-white'>
									Niche Name
								</label>
								<input
									type='text'
									placeholder='e.g. Space Exploration'
									className='w-full rounded-2xl border-2 border-slate-100 bg-slate-50/50 px-6 py-4 outline-none transition-all focus:border-blue-500 focus:bg-white dark:border-slate-800 dark:bg-slate-800 dark:focus:border-blue-500'
									value={customNiche}
									onChange={(e) => {
										setCustomNiche(e.target.value);
										onChange({
											...value!,
											customName: e.target.value,
											type: 'custom',
										});
									}}
								/>
							</div>
							<div>
								<label className='mb-3 block text-sm font-bold text-slate-900 dark:text-white'>
									Description
								</label>
								<textarea
									placeholder='What kind of videos will you generate in this niche?'
									rows={4}
									className='w-full resize-none rounded-2xl border-2 border-slate-100 bg-slate-50/50 px-6 py-4 outline-none transition-all focus:border-blue-500 focus:bg-white dark:border-slate-800 dark:bg-slate-800 dark:focus:border-blue-500'
									value={customDescription}
									onChange={(e) => {
										setCustomDescription(e.target.value);
										onChange({
											...value!,
											customDescription: e.target.value,
											type: 'custom',
										});
									}}
								/>
							</div>
						</div>
					</div>
				)}
			</div>

			{/* Footer / Navigation */}
			<div className='flex items-center justify-between border-t border-slate-100 pt-10 dark:border-slate-800'>
				<button
					onClick={onBack}
					className='flex items-center gap-2 text-sm font-bold text-slate-400 transition-colors hover:text-slate-600 dark:hover:text-slate-200'>
					<ChevronLeft className='h-5 w-5' />
					Back
				</button>
				<button
					onClick={onContinue}
					disabled={!canContinue}
					className={cn(
						'flex items-center gap-3 rounded-2xl px-10 py-4 font-bold text-white transition-all duration-300',
						canContinue
							? 'bg-blue-500 shadow-xl shadow-blue-500/25 hover:scale-[1.02] hover:bg-blue-600 active:scale-[0.98]'
							: 'cursor-not-allowed bg-slate-200 text-slate-400 dark:bg-slate-800',
					)}>
					Continue
					<ArrowRight className='h-5 w-5 stroke-[2.5]' />
				</button>
			</div>
		</div>
	);
}
