// supabase.js
const SUPABASE_URL = 'https://lllmhsatptxscjjoluov.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsbG1oc2F0cHR4c2Nqam9sdW92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMjQ3NTksImV4cCI6MjA4NTkwMDc1OX0.wtzQkF54-HdALvDixNADLwoVqdw7AIPSOM4hmBISQ8U';

// Инициализация Supabase клиента
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
