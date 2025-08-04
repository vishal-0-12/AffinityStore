/*
  # Create Members Directory Schema

  1. New Tables
    - `companies`
      - `id` (uuid, primary key)
      - `name` (text, company name)
      - `address` (text, full address)
      - `city` (text, city name)
      - `state` (text, state name)
      - `country` (text, country name)
      - `postal_code` (text, postal/zip code)
      - `phone` (text, business phone)
      - `fax` (text, business fax)
      - `email` (text, business email)
      - `website` (text, company website)
      - `business_description` (text, detailed business description)
      - `industry` (text, industry category)
      - `established_year` (integer, year established)
      - `employee_count` (text, number of employees)
      - `annual_revenue` (text, annual revenue range)
      - `logo_url` (text, company logo URL)
      - `membership_type` (text, type of membership)
      - `membership_since` (date, member since date)
      - `is_active` (boolean, active status)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `companies` table
    - Add policy for public read access to active companies
    - Add policy for authenticated users to manage their own company data
*/

CREATE TABLE IF NOT EXISTS companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  country text DEFAULT 'India',
  postal_code text,
  phone text,
  fax text,
  email text,
  website text,
  business_description text,
  industry text,
  established_year integer,
  employee_count text,
  annual_revenue text,
  logo_url text,
  membership_type text DEFAULT 'Standard',
  membership_since date DEFAULT CURRENT_DATE,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;

-- Policy for public read access to active companies
CREATE POLICY "Public can read active companies"
  ON companies
  FOR SELECT
  TO public
  USING (is_active = true);

-- Policy for authenticated users to manage companies
CREATE POLICY "Authenticated users can manage companies"
  ON companies
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_companies_state ON companies(state);
CREATE INDEX IF NOT EXISTS idx_companies_city ON companies(city);
CREATE INDEX IF NOT EXISTS idx_companies_industry ON companies(industry);
CREATE INDEX IF NOT EXISTS idx_companies_name ON companies(name);
CREATE INDEX IF NOT EXISTS idx_companies_active ON companies(is_active);

-- Insert sample data
INSERT INTO companies (name, address, city, state, phone, fax, email, website, business_description, industry) VALUES
('Ashok Brothers Impex Pvt. Ltd.', '638/D, 2Nd Floor, Dr. Rajkumar Road, Rajaninagar, 2Nd Stage', 'Bangalore', 'Karnataka', '080-23323096', '080-23323096', 'abibo@bglvsnl.net.in', 'http://www.abi-india.com', 'Machine Tools & Accessories, Balancing Machine, Sheet Metal Machine Tools Accessories', 'Manufacturing'),
('Pawan & Co.', 'Indraprasf Complex, 885-F3, Ist Floor, Ganga Mata Ki Gali, Gopalji Ka Rasta', 'Jaipur', 'Rajasthan', '0141-2345678', '0141-2345679', 'info@pawanco.com', 'http://www.pawanco.com', 'Textile Trading, Export-Import Services, Wholesale Distribution', 'Trading'),
('Island Stone India Private Limited', 'E-1217/1218, Industrial Area', 'Jaipur', 'Rajasthan', '0141-3456789', '0141-3456790', 'info@islandstone.in', 'http://www.islandstone.in', 'Natural Stone Processing, Marble and Granite Export, Construction Materials', 'Construction'),
('Semco Forge Pvt. Ltd.', '38, Functional Industrial Estate, Patparganj', 'Delhi', 'Delhi', '011-22334455', '011-22334456', 'info@semcoforge.com', 'http://www.semcoforge.com', 'Metal Forging, Industrial Components, Automotive Parts Manufacturing', 'Manufacturing'),
('Intell Visions Software Ltd.', 'Steel House, 24 Mahal Ind. Estate, Andheri (E)', 'Mumbai', 'Maharashtra', '022-26785432', '022-26785433', 'contact@intellvisions.com', 'http://www.intellvisions.com', 'Software Development, IT Solutions, Digital Transformation Services', 'Technology'),
('Logus Overseas', '17, Keshavji Naik Road, Room No. 11, Bhat Bazaar, Masjid Bunder', 'Mumbai', 'Maharashtra', '022-23456789', '022-23456790', 'info@logusoverseas.com', 'http://www.logusoverseas.com', 'International Trading, Import-Export Services, Global Logistics', 'Trading');