import { createClient } from "@supabase/supabase-js";

 export const supabaseUrl = "https://lcjxklbudxrgalpnicrt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjanhrbGJ1ZHhyZ2FscG5pY3J0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMjk3ODUsImV4cCI6MjAyMjkwNTc4NX0.giyptCg2yqQjUDRxIuRZtBuUP1yPcvG_vkavM7MeeuE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;