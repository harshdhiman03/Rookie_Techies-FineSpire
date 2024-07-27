
import { createClient } from '@supabase/supabase-js'
let supabaseUrl='https://edaorlsmuwbnfnpxbmyd.supabase.co'
let supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkYW9ybHNtdXdibmZucHhibXlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwMjU2MTUsImV4cCI6MjAzNzYwMTYxNX0.01M7zNQEXPZ2RRqm0ekf93at8oyth4DmpMbkCZIOKQ4'

export const supabase = createClient(supabaseUrl, supabaseKey)