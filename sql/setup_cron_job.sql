
-- Enable the pg_cron extension if not already enabled
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Set up a cron job to run every day at 8:00 AM UTC
SELECT cron.schedule(
  'daily-crypto-email',   -- unique job name
  '0 8 * * *',            -- cron schedule (daily at 8:00 AM UTC)
  $$
  SELECT
    net.http_post(
      url:='https://yirtkghihsoktwxbbats.supabase.co/functions/v1/send-daily-email',
      headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpcnRrZ2hpaHNva3R3eGJiYXRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMDI3NzAsImV4cCI6MjA1NTg3ODc3MH0.1ee384OCIfrVvfgEvLbotlGSUKU91g3C6O0h7vOsjtw"}'::jsonb,
      body:='{}'::jsonb
    ) as request_id;
  $$
);
