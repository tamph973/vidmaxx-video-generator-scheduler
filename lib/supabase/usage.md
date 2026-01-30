# VidMaxx Supabase Usage Guide

## Imports

Use the helper functions in `lib/supabase/` to create clients.

### Client Components (Browser)

```tsx
'use client';

import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';

export function Profile() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const supabase = createClient();

		async function getUser() {
			const { data } = await supabase.auth.getUser();
			setUser(data.user);
		}

		getUser();
	}, []);

	// ...
}
```

### Server Components

```tsx
import { createClient } from '@/lib/supabase/server';

export default async function Page() {
	const supabase = await createClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	// ...
}
```

## Authentication

### Sign Up

```ts
const supabase = createClient();
const { error } = await supabase.auth.signUp({
	email: 'foo@example.com',
	password: 'example-password',
});
```

### Sign In

```ts
const supabase = createClient();
const { error } = await supabase.auth.signInWithPassword({
	email: 'foo@example.com',
	password: 'example-password',
});
```

### Sign Out

```ts
const supabase = createClient();
await supabase.auth.signOut();
```

## Database

### Select

```ts
const { data, error } = await supabase.from('profiles').select('*');
```

### Insert

```ts
const { error } = await supabase
	.from('profiles')
	.insert({ username: 'vidman', full_name: 'Video Man' });
```
