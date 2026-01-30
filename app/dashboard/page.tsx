import { syncUser } from '@/actions/sync-user';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SignedIn, UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
	const user = await currentUser();

	if (!user) {
		redirect('/sign-in');
	}

	// Sync user to Supabase on page load
	await syncUser();

	return (
		<div className='min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50'>
			<header className='border-b border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50 backdrop-blur-xl'>
				<Container className='flex h-16 items-center justify-between'>
					<span className='text-lg font-bold'>VidMaxx Dashboard</span>
					<div className='flex items-center gap-4'>
						<span className='text-sm font-medium'>
							Welcome, {user.firstName || 'User'}
						</span>
						<SignedIn>
							<UserButton />
						</SignedIn>
					</div>
				</Container>
			</header>

			<main>
				<Section>
					<Container>
						<h1 className='text-3xl font-bold mb-6'>Your Videos</h1>
						<div className='rounded-xl border border-dashed border-zinc-300 dark:border-zinc-700 p-12 text-center text-zinc-500'>
							<p>No videos generated yet. Start creating!</p>
						</div>
					</Container>
				</Section>
			</main>
		</div>
	);
}
