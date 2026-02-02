'use client';

import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
	id: number;
	label: string;
}

const steps: Step[] = [
	{ id: 1, label: 'Format & Niche' },
	{ id: 2, label: 'Language & Voice' },
	{ id: 3, label: 'Content' },
	{ id: 4, label: 'Schedule' },
	{ id: 5, label: 'Review' },
	{ id: 6, label: 'Launch' },
];

interface ProgressStepperProps {
	currentStep: number;
}

export function ProgressStepper({ currentStep }: ProgressStepperProps) {
	const totalSteps = steps.length;

	return (
		<div className='mx-auto mb-16 w-full max-w-4xl'>
			{/* Step Indicator Text */}
			<div className='mb-4 text-[10px] font-bold tracking-[0.2em] text-blue-500 uppercase'>
				Step {currentStep} of {totalSteps}
			</div>

			{/* Segmented Progress Bar */}
			<div className='flex w-full gap-2'>
				{steps.map((step) => {
					const isActive = step.id <= currentStep;
					return (
						<div
							key={step.id}
							className={cn(
								'h-1.5 flex-1 rounded-full transition-all duration-500',
								isActive
									? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.2)]'
									: 'bg-slate-100 dark:bg-slate-800',
							)}
						/>
					);
				})}
			</div>
		</div>
	);
}
