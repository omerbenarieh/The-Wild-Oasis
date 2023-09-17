import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://tyxjbvfuoyznrvmdfjas.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5eGpidmZ1b3l6bnJ2bWRmamFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ4MjA5MjQsImV4cCI6MjAxMDM5NjkyNH0.Nol1dhCHfPbmCRofshmrfZBWwC3NqwCnJmxpgqvdGdo';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
