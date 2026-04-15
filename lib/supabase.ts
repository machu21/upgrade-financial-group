import { createBrowserClient } from '@supabase/ssr'

// We create a single instance variable outside the function
let client: ReturnType<typeof createBrowserClient> | undefined

export const supabase = (() => {
  // If we're on the server, always create a new one (safe for SSR)
  if (typeof window === 'undefined') {
    return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  }

  // If we're in the browser, check if we already have a client
  if (!client) {
    client = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  }

  return client
})()