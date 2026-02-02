'use client';

import { useState } from 'react';
import { ArrowLeft, Bell } from 'lucide-react';
import { ProgressStepper } from '@/components/dashboard/progress-stepper';
import { NicheSelection } from '@/components/dashboard/niche-selection';
import { ChevronLeft, ArrowRight } from 'lucide-react';

// Centralized form data type
interface FormData {
	// Step 1: Niche Selection
	niche?: {
		type: 'preset' | 'custom';
		nicheId?: string;
		customName?: string;
		customDescription?: string;
	};
	// Step 2: Language & Voice (to be implemented)
	language?: {
		language: string;
		voice: string;
	};
	// Step 3-6: To be implemented
}

export default function CreatePage() {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState<FormData>({});
	// Navigation handlers
	const handleNext = () => {
		if (currentStep < 6) {
			setCurrentStep(currentStep + 1);
		}
	};

	const handleBack = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	// Step-specific data handlers
	const handleNicheSelect = (nicheData: FormData['niche']) => {
		setFormData({
			...formData,
			niche: nicheData,
		});
	};

	return (
		<div className='flex min-h-screen flex-col bg-slate-50/30 dark:bg-slate-950/20'>
			<div className='mx-auto w-full max-w-6xl px-10 pb-20 pt-16'>
				{/* Progress Stepper */}
				<ProgressStepper currentStep={currentStep} />

				{/* Step Content */}
				<div className='mt-16'>
					{currentStep === 1 && (
						<NicheSelection
							value={formData.niche}
							onChange={handleNicheSelect}
							onContinue={handleNext}
							onBack={() => (window.location.href = '/dashboard')}
							showBack={true}
						/>
					)}
					{currentStep === 2 && (
						<div className='mx-auto max-w-4xl animate-in fade-in duration-500'>
							<div className='mb-12'>
								<h2 className='mb-2 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white'>
									Step 2: Language & Voice
								</h2>
								<p className='text-lg text-slate-500 dark:text-slate-400'>
									Configure the voice-over and language for
									your series.
								</p>
							</div>

							<div className='rounded-[2.5rem] border-2 border-slate-100 bg-white p-12 shadow-sm dark:border-slate-800 dark:bg-slate-900'>
								<p className='text-slate-500 dark:text-slate-400'>
									Selected Niche:{' '}
									<span className='font-bold text-slate-900 dark:text-white'>
										{formData.niche?.customName}
									</span>
								</p>
							</div>

							{/* Navigation Footer */}
							<div className='mt-12 flex items-center justify-between border-t border-slate-100 pt-10 dark:border-slate-800'>
								<button
									onClick={handleBack}
									className='flex items-center gap-2 text-sm font-bold text-slate-400 transition-colors hover:text-slate-600 dark:hover:text-slate-200'>
									<ChevronLeft className='h-5 w-5' />
									Back
								</button>
								<button
									onClick={handleNext}
									className='flex items-center gap-3 rounded-2xl bg-blue-500 px-10 py-4 font-bold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] hover:bg-blue-600 active:scale-[0.98]'>
									Continue
									<ArrowRight className='h-5 w-5 stroke-[2.5]' />
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
