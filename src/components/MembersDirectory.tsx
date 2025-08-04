import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  Globe,
  Filter,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { apiClient, Company } from '../lib/api';

interface MembersDirectoryProps {
  onCompanySelect: (company: Company) => void;
}

const MembersDirectory: React.FC<MembersDirectoryProps> = ({ onCompanySelect }) => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedAlphabet, setSelectedAlphabet] = useState('');
  const [states, setStates] = useState<string[]>([]);

  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  useEffect(() => {
    fetchCompanies();
    fetchStates();
  }, []);

  const fetchCompanies = async () => {
    try {
      const filters = {
        state: selectedState || undefined,
        search: searchTerm || undefined,
        alphabet: selectedAlphabet || undefined
      };
      
      const response = await apiClient.getCompanies(filters);
      if (response.success) {
        setCompanies(response.data);
        setFilteredCompanies(response.data);
      }
    } catch (error) {
      console.error('Error fetching companies:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStates = async () => {
    try {
      const response = await apiClient.getStates();
      if (response.success) {
        setStates(['All States', ...response.data]);
      }
    } catch (error) {
      console.error('Error fetching states:', error);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, [searchTerm, selectedState, selectedAlphabet]);

  const handleSearch = () => {
    fetchCompanies();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading members directory...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        {/* City Skyline Background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
          <svg viewBox="0 0 1200 200" className="w-full h-full">
            <rect x="0" y="120" width="80" height="80" fill="white" opacity="0.3"/>
            <rect x="100" y="80" width="60" height="120" fill="white" opacity="0.4"/>
            <rect x="180" y="100" width="70" height="100" fill="white" opacity="0.3"/>
            <rect x="270" y="60" width="90" height="140" fill="white" opacity="0.5"/>
            <rect x="380" y="90" width="80" height="110" fill="white" opacity="0.3"/>
            <rect x="480" y="70" width="100" height="130" fill="white" opacity="0.4"/>
            <rect x="600" y="110" width="70" height="90" fill="white" opacity="0.3"/>
            <rect x="690" y="50" width="80" height="150" fill="white" opacity="0.5"/>
            <rect x="790" y="85" width="90" height="115" fill="white" opacity="0.4"/>
            <rect x="900" y="95" width="75" height="105" fill="white" opacity="0.3"/>
            <rect x="995" y="75" width="85" height="125" fill="white" opacity="0.4"/>
            <rect x="1100" y="105" width="100" height="95" fill="white" opacity="0.3"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Find the Business Members</h1>
          
          {/* Search Section */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-0 text-gray-700 focus:outline-none focus:ring-2 focus:ring-white appearance-none bg-white"
                >
                  {states.map(state => (
                    <option key={state} value={state === 'All States' ? '' : state}>
                      {state}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Type the keyword"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-0 text-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <button
                onClick={handleSearch}
                className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                SEARCH
              </button>
            </div>

            {/* Alphabet Filter */}
            <div className="mb-4">
              <p className="text-orange-100 mb-3">Search by Alphabet:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {alphabets.map(letter => (
                  <button
                    key={letter}
                    onClick={() => setSelectedAlphabet(selectedAlphabet === letter ? '' : letter)}
                    className={`w-8 h-8 rounded-full font-semibold transition-colors ${
                      selectedAlphabet === letter
                        ? 'bg-white text-orange-600'
                        : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                    }`}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Find the Best Members in Town
            </h2>
            <p className="text-gray-600">
              Showing {filteredCompanies.length} companies
              {selectedState && ` in ${selectedState}`}
              {selectedAlphabet && ` starting with "${selectedAlphabet}"`}
            </p>
          </div>

          {/* Companies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-xl shadow-lg p-6 border border-orange-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-lg mr-4 flex-shrink-0">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                      {company.name}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-start text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0 text-orange-500" />
                    <span className="line-clamp-3">
                      {company.address}, {company.city}, {company.state}
                      {company.postal_code && ` - ${company.postal_code}`}
                    </span>
                  </div>
                  
                  {company.phone && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2 flex-shrink-0 text-orange-500" />
                      <span>{company.phone}</span>
                    </div>
                  )}
                  
                  {company.email && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2 flex-shrink-0 text-orange-500" />
                      <span className="truncate">{company.email}</span>
                    </div>
                  )}
                  
                  {company.website && (
                    <div className="flex items-center text-sm text-gray-600">
                      <Globe className="w-4 h-4 mr-2 flex-shrink-0 text-orange-500" />
                      <span className="truncate">{company.website}</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => onCompanySelect(company)}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-colors flex items-center justify-center"
                >
                  More Info
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>

          {companies.length === 0 && (
            <div className="text-center py-12">
              <Building className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No companies found</h3>
              <p className="text-gray-500">
                Try adjusting your search criteria or browse all members
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MembersDirectory;