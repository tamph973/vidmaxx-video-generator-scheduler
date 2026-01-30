'use client';

import * as React from 'react';
import {
	Clapperboard,
	CreditCard,
	HelpCircle,
	Plus,
	Settings,
	Sparkles,
	User,
	Video,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
	SidebarSeparator,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar className='border-r border-sidebar-border/60' {...props}>
			<SidebarHeader className='h-16 px-6 py-4'>
				<div className='flex items-center gap-3'>
					<div className='relative size-8 shrink-0'>
						<Image
							src='/logo.png'
							alt='VidMaxx Logo'
							fill
							className='object-contain'
						/>
					</div>
					<span className='text-xl font-bold tracking-tight text-foreground'>
						VidMaxx
					</span>
				</div>
			</SidebarHeader>

			<SidebarContent className='px-4 py-6 space-y-6'>
				<div className='px-2'>
					<Button
						className='w-full justify-start gap-2 h-11 text-base font-medium shadow-sm hover:shadow-md transition-all'
						size='lg'>
						<Plus className='size-5' />
						Create New Series
					</Button>
				</div>

				<div className='space-y-1'>
					<div className='px-4 text-xs font-medium text-muted-foreground/70 uppercase tracking-wider mb-2'>
						Main
					</div>
					<SidebarMenu className='gap-1.5'>
						<SidebarMenuItem>
							<SidebarMenuButton
								asChild
								size='lg'
								className='h-10 text-base font-medium hover:bg-sidebar-accent/50 data-[state=open]:bg-sidebar-accent/50'>
								<Link href='/dashboard/series'>
									<Clapperboard className='size-5 text-muted-foreground group-hover:text-primary transition-colors' />
									<span>Series</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton
								asChild
								size='lg'
								className='h-10 text-base font-medium hover:bg-sidebar-accent/50 data-[state=open]:bg-sidebar-accent/50'>
								<Link href='/dashboard/videos'>
									<Video className='size-5 text-muted-foreground group-hover:text-primary transition-colors' />
									<span>Videos</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</div>

				<div className='space-y-1'>
					<div className='px-4 text-xs font-medium text-muted-foreground/70 uppercase tracking-wider mb-2'>
						Support
					</div>
					<SidebarMenu className='gap-1.5'>
						<SidebarMenuItem>
							<SidebarMenuButton
								asChild
								size='lg'
								className='h-10 text-base font-medium hover:bg-sidebar-accent/50 data-[state=open]:bg-sidebar-accent/50'>
								<Link href='/dashboard/guides'>
									<HelpCircle className='size-5 text-muted-foreground group-hover:text-primary transition-colors' />
									<span>Guides</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton
								asChild
								size='lg'
								className='h-10 text-base font-medium hover:bg-sidebar-accent/50 data-[state=open]:bg-sidebar-accent/50'>
								<Link href='/dashboard/billing'>
									<CreditCard className='size-5 text-muted-foreground group-hover:text-primary transition-colors' />
									<span>Billing</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton
								asChild
								size='lg'
								className='h-10 text-base font-medium hover:bg-sidebar-accent/50 data-[state=open]:bg-sidebar-accent/50'>
								<Link href='/dashboard/settings'>
									<Settings className='size-5 text-muted-foreground group-hover:text-primary transition-colors' />
									<span>Settings</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</div>
			</SidebarContent>

			<SidebarFooter className='p-4 bg-sidebar-accent/10'>
				<SidebarMenu className='gap-2'>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							size='lg'
							className='h-12 text-base font-medium bg-gradient-to-r from-amber-100 to-amber-50 hover:from-amber-200 hover:to-amber-100 border border-amber-200/50'>
							<Link href='/fire/upgrade'>
								<Sparkles className='size-5 text-amber-600 fill-amber-600' />
								<span className='text-amber-900'>
									Upgrade Plan
								</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
					<SidebarSeparator className='my-2 bg-sidebar-border/50' />
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							size='lg'
							className='h-10 text-base font-medium hover:bg-sidebar-accent/50'>
							<Link href='/dashboard/profile'>
								<User className='size-5 text-muted-foreground' />
								<span>Profile Settings</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
