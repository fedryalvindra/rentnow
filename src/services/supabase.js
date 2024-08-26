import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://rnhifxqkvskwauivbgqn.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuaGlmeHFrdnNrd2F1aXZiZ3FuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1OTYwNDksImV4cCI6MjA0MDE3MjA0OX0.VV3QLkr6Uble-AUnuYuiEXqa7KALl0h2ULNuqmjOaCk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
