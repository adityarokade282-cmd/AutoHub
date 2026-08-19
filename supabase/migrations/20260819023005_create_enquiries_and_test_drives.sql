/*
# Create enquiries and test-drive bookings tables

1. Purpose
   AUTOHUB dealership website needs to persist two kinds of customer submissions:
   - General vehicle enquiries (someone interested in a specific vehicle).
   - Test-drive booking requests (a customer wants to schedule a drive).

2. New Tables
   - `enquiries`
     - id (uuid, primary key)
     - full_name (text, not null) - customer's name
     - email (text, not null) - contact email
     - phone (text, not null) - contact phone
     - vehicle_id (text) - optional reference to the vehicle of interest (matches sample data id)
     - vehicle_name (text) - human-readable vehicle name for display
     - message (text) - free-text enquiry message
     - created_at (timestamptz, default now())
   - `test_drive_bookings`
     - id (uuid, primary key)
     - full_name (text, not null)
     - email (text, not null)
     - phone (text, not null)
     - vehicle_id (text) - optional reference to vehicle
     - vehicle_name (text) - human-readable vehicle name
     - preferred_date (date, not null) - requested test-drive date
     - preferred_time (text, not null) - requested time slot
     - message (text) - optional notes
     - created_at (timestamptz, default now())

3. Security
   - Enable RLS on both tables.
   - This is a single-tenant, no-auth public dealership site: the anon-key browser client
     must be able to INSERT new submissions. We do NOT expose reads to anon (customers
     don't need to list other people's enquiries), so only INSERT is granted to anon.
   - SELECT/UPDATE/DELETE are restricted to the authenticated role (dealer staff) so the
     business can manage submissions after signing in, but anonymous visitors cannot read
     other customers' private contact data.

4. Notes
   - No user_id / auth.users linkage: the site has no sign-in flow.
   - vehicle_id is a free text column (sample data ids), not a foreign key, because vehicle
     inventory is static sample data in this build.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  vehicle_id text,
  vehicle_name text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries"
  ON enquiries FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_enquiries" ON enquiries;
CREATE POLICY "auth_select_enquiries"
  ON enquiries FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "auth_update_enquiries" ON enquiries;
CREATE POLICY "auth_update_enquiries"
  ON enquiries FOR UPDATE
  TO authenticated
  USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_enquiries" ON enquiries;
CREATE POLICY "auth_delete_enquiries"
  ON enquiries FOR DELETE
  TO authenticated
  USING (true);

CREATE TABLE IF NOT EXISTS test_drive_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  vehicle_id text,
  vehicle_name text,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE test_drive_bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_test_drives" ON test_drive_bookings;
CREATE POLICY "anon_insert_test_drives"
  ON test_drive_bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_test_drives" ON test_drive_bookings;
CREATE POLICY "auth_select_test_drives"
  ON test_drive_bookings FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "auth_update_test_drives" ON test_drive_bookings;
CREATE POLICY "auth_update_test_drives"
  ON test_drive_bookings FOR UPDATE
  TO authenticated
  USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_test_drives" ON test_drive_bookings;
CREATE POLICY "auth_delete_test_drives"
  ON test_drive_bookings FOR DELETE
  TO authenticated
  USING (true);
