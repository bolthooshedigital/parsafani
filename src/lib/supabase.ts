import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase: any;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase config missing. Form will not work. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env');
  
  // Mock client که خطا نمی‌دهد
  supabase = {
    from: () => ({
      insert: async () => ({ error: { message: 'Supabase not configured' } }),
      select: async () => ({ data: [], error: null }),
    }),
  };
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };
