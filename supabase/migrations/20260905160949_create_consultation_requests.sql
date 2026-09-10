/*
# Create consultation_requests table (single-tenant, no auth)

1. New Tables
- `consultation_requests`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — the requester's full name
  - `phone` (text, not null) — the requester's phone number
  - `email` (text, nullable) — optional email address
  - `service` (text, not null) — which service they're interested in
  - `message` (text, nullable) — optional additional details
  - `status` (text, default 'new') — tracking status: new, contacted, closed
  - `created_at` (timestamptz, default now()) — when the request was submitted

2. Security
- Enable RLS on `consultation_requests`.
- Allow anon + authenticated INSERT (public form submission) with no ownership check — this is a public contact form.
- Allow anon + authenticated SELECT so the site owner can view requests (single-tenant, no auth screen).
- No UPDATE or DELETE policies needed for this use case.

3. Notes
- This is a single-tenant app with no sign-in screen, so policies use `TO anon, authenticated`.
- The form is intentionally public — anyone visiting the site can submit a consultation request.
- `USING (true)` on SELECT is acceptable here because this is a single-tenant app with no other users to isolate from.
*/

CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  service text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_consultation_requests" ON consultation_requests;
CREATE POLICY "anon_select_consultation_requests" ON consultation_requests
  FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_consultation_requests" ON consultation_requests;
CREATE POLICY "anon_insert_consultation_requests" ON consultation_requests
  FOR INSERT TO anon, authenticated WITH CHECK (true);