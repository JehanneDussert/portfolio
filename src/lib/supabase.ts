import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key = import.meta.env.VITE_SUPABASE_ANON_KEY

// Defer createClient until env vars are present; composables handle the null case via try-catch
export const supabase = url && key
  ? createClient(url, key)
  : (null as any)
