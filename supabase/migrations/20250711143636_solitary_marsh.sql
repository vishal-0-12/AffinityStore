-- Members Directory Database Schema

CREATE TABLE IF NOT EXISTS companies (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  country TEXT DEFAULT 'India',
  postal_code TEXT,
  phone TEXT,
  fax TEXT,
  email TEXT,
  website TEXT,
  business_description TEXT,
  industry TEXT,
  established_year INTEGER,
  employee_count TEXT,
  annual_revenue TEXT,
  logo_url TEXT,
  membership_type TEXT DEFAULT 'Standard',
  membership_since DATE DEFAULT CURRENT_DATE,
  is_active BOOLEAN DEFAULT 1,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  company_id INTEGER NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (company_id) REFERENCES companies (id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_companies_state ON companies(state);
CREATE INDEX IF NOT EXISTS idx_companies_city ON companies(city);
CREATE INDEX IF NOT EXISTS idx_companies_industry ON companies(industry);
CREATE INDEX IF NOT EXISTS idx_companies_name ON companies(name);
CREATE INDEX IF NOT EXISTS idx_companies_active ON companies(is_active);

-- Insert sample data
INSERT OR IGNORE INTO companies (id, name, address, city, state, phone, fax, email, website, business_description, industry) VALUES
(1, 'Ashok Brothers Impex Pvt. Ltd.', '638/D, 2Nd Floor, Dr. Rajkumar Road, Rajaninagar, 2Nd Stage', 'Bangalore', 'Karnataka', '080-23323096', '080-23323096', 'abibo@bglvsnl.net.in', 'http://www.abi-india.com', 'Machine Tools & Accessories, Balancing Machine, Sheet Metal Machine Tools Accessories', 'Manufacturing'),
(2, 'Pawan & Co.', 'Indraprasf Complex, 885-F3, Ist Floor, Ganga Mata Ki Gali, Gopalji Ka Rasta', 'Jaipur', 'Rajasthan', '0141-2345678', '0141-2345679', 'info@pawanco.com', 'http://www.pawanco.com', 'Textile Trading, Export-Import Services, Wholesale Distribution', 'Trading'),
(3, 'Island Stone India Private Limited', 'E-1217/1218, Industrial Area', 'Jaipur', 'Rajasthan', '0141-3456789', '0141-3456790', 'info@islandstone.in', 'http://www.islandstone.in', 'Natural Stone Processing, Marble and Granite Export, Construction Materials', 'Construction'),
(4, 'Semco Forge Pvt. Ltd.', '38, Functional Industrial Estate, Patparganj', 'Delhi', 'Delhi', '011-22334455', '011-22334456', 'info@semcoforge.com', 'http://www.semcoforge.com', 'Metal Forging, Industrial Components, Automotive Parts Manufacturing', 'Manufacturing'),
(5, 'Intell Visions Software Ltd.', 'Steel House, 24 Mahal Ind. Estate, Andheri (E)', 'Mumbai', 'Maharashtra', '022-26785432', '022-26785433', 'contact@intellvisions.com', 'http://www.intellvisions.com', 'Software Development, IT Solutions, Digital Transformation Services', 'Technology'),
(6, 'Logus Overseas', '17, Keshavji Naik Road, Room No. 11, Bhat Bazaar, Masjid Bunder', 'Mumbai', 'Maharashtra', '022-23456789', '022-23456790', 'info@logusoverseas.com', 'http://www.logusoverseas.com', 'International Trading, Import-Export Services, Global Logistics', 'Trading');