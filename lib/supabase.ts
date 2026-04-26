import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qucvogsyvinrdaoggolb.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1Y3ZvZ3N5dmlucmRhb2dnb2xiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxODE4MzYsImV4cCI6MjA5Mjc1NzgzNn0.v2KYKPjf9pd8TTAEIXHBkDleqQd9z0PcbXhOAwizbQI";

let cached: SupabaseClient | null = null;

export function getSupabaseBrowser(): SupabaseClient {
  if (cached) return cached;
  cached = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: false },
  });
  return cached;
}

export const CONTACT_ENQUIRIES_TABLE = "contact_enquiries";
