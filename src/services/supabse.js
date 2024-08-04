import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://irpfsehddfvftdrudysf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlycGZzZWhkZGZ2ZnRkcnVkeXNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg1NjIzMTQsImV4cCI6MjAzNDEzODMxNH0.LXcB7jv8eNWttd-7Oapqsoyh5z9t4Y0vEoXTUNd37DI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
