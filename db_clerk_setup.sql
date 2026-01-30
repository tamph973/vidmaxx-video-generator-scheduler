-- Create a table for public user profiles with Clerk ID
create table if not exists profiles (
  id text not null primary key, -- Clerk User ID
  updated_at timestamp with time zone,
  username text,
  full_name text,
  email text,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up Row Level Security (RLS)
alter table profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on profiles for select
  using ( true );

-- For now, with service role key in actions, we can keep policies simple or stricter.
-- Since we are sync'ing via server action using a potentially priveleged client or standard client,
-- we'll verify if RLS allows inserts from the client.
-- Ideally, sync operations happen on the server.
