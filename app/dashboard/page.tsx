import { syncUser } from '@/actions/sync-user';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import {
	Clapperboard,
	Calendar,
	Activity,
	Film,
	PlayCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function DashboardPage() {
	const user = await currentUser();

	if (!user) {
		redirect('/sign-in');
	}

	await syncUser();

	const stats = [
		{
			label: 'Total Series',
			value: '0',
			icon: Clapperboard,
			color: 'text-violet-500 bg-violet-500/10',
		},
		{
			label: 'Scheduled Posts',
			value: '0',
			icon: Calendar,
			color: 'text-blue-500 bg-blue-500/10',
		},
		{
			label: 'Total Views',
			value: '0',
			icon: Activity,
			color: 'text-rose-500 bg-rose-500/10',
		},
	];

	return (
		<div className='flex flex-1 flex-col gap-8 p-8 max-w-7xl mx-auto w-full'>
			{/* Intro Section */}
			<div className='flex flex-col gap-2'>
				<h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
				<p className='text-muted-foreground'>
					Welcome back, {user.firstName || 'User'}! Here's what's
					happening with your content.
				</p>
			</div>

			{/* Quick Stats Grid */}
			<div className='grid gap-4 md:grid-cols-3'>
				{stats.map((stat) => (
					<div
						key={stat.label}
						className='rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md'>
						<div className='flex items-center gap-4'>
							<div className={`p-3 rounded-lg ${stat.color}`}>
								<stat.icon className='size-6' />
							</div>
							<div>
								<div className='text-sm font-medium text-muted-foreground'>
									{stat.label}
								</div>
								<div className='text-2xl font-bold mt-1'>
									{stat.value}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className='border-t my-2' />

			{/* Main Content Area */}
			<div className='flex flex-1 flex-col gap-6'>
				<div className='flex items-center justify-between'>
					<h2 className='text-xl font-semibold tracking-tight'>
						Your Series
					</h2>
					<Button variant='link' className='px-0 text-primary'>
						View All
					</Button>
				</div>

				{/* Empty State */}
				<div className='flex flex-1 flex-col items-center justify-center rounded-xl border border-dashed p-12 text-center animate-in fade-in-50 bg-muted/50'>
					<div className='mx-auto flex size-20 items-center justify-center rounded-full bg-background border shadow-sm mb-6'>
						<Film className='size-10 text-muted-foreground' />
					</div>
					<h3 className='text-xl font-semibold'>
						No series created yet
					</h3>
					<p className='mt-2 mb-8 text-center text-sm text-muted-foreground max-w-sm mx-auto'>
						Get started by creating your first video series.
						Automate your scheduling and grow your audience.
					</p>
					<div className='flex gap-4'>
						<Button
							size='lg'
							className='shadow-lg hover:shadow-xl transition-all'
							asChild>
							<Link href='/dashboard/series'>
								<PlayCircle className='mr-2 size-4' />
								Create New Series
							</Link>
						</Button>
						<Button variant='outline' size='lg' asChild>
							<Link href='/docs'>View Documentation</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
