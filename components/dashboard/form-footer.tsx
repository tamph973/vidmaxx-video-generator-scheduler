'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface FormFooterProps {
	onBack?: () => void;
	onContinue: () => void;
	canContinue: boolean;
	showBack?: boolean;
	continueText?: string;
}

export function FormFooter({
	onBack,
	onContinue,
	canContinue,
	showBack = false,
	continueText = 'Continue',
}: FormFooterProps) {
	return (
		<div className='flex items-center justify-between border-t border-zinc-800 pt-6'>
			{/* Back Button */}
			{showBack && onBack ? (
				<Button
					variant='ghost'
					size='lg'
					onClick={onBack}
					className='min-w-[140px] transition-colors duration-200'>
					<ArrowLeft className='mr-2 h-4 w-4' />
					Back
				</Button>
			) : (
				<div />
			)}

			{/* Continue Button */}
			<Button
				size='lg'
				onClick={onContinue}
				disabled={!canContinue}
				className='min-w-[160px] rounded-lg text-base transition-colors duration-200'>
				{continueText}
			</Button>
		</div>
	);
}
