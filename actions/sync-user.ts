'use server';

import { auth, currentUser } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function syncUser() {
	try {
		const { userId } = await auth();
		const user = await currentUser();

		if (!userId || !user) {
			return { error: 'Not authenticated' };
		}

		const email = user.emailAddresses[0]?.emailAddress;
		const username = user.username || user.firstName || 'user';
		const full_name =
			`${user.firstName || ''} ${user.lastName || ''}`.trim();
		const avatar_url = user.imageUrl;

		// Check if user exists
		const { data: existingUser } = await supabaseAdmin
			.from('profiles')
			.select('id')
			.eq('id', userId)
			.single();

		if (existingUser) {
			// Optional: Update user data if needed
			return { success: true, message: 'User already exists' };
		}

		const { error } = await supabaseAdmin.from('profiles').insert({
			id: userId,
			email,
			username,
			full_name,
			avatar_url,
			updated_at: new Date().toISOString(),
		});
		if (error) {
			return { error: error.message };
		}

		return { success: true };
	} catch (error) {
		console.error('Error syncing user:', error);
		return {
			error: error instanceof Error ? error.message : 'Unknown error',
		};
	}
}
