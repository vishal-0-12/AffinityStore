import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Calendar,
  Users,
  DollarSign,
  Send,
  User,
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { Company, apiClient } from '../lib/api';

interface CompanyDetailProps {
  company: Company;
  onBack: () => void;
}

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const CompanyDetail: React.FC<CompanyDetailProps> = ({ company, onBack }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await apiClient.sendContactMessage({
        company_id: company.id,
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      });

      if (response.success) {
        alert('Message sent successfully! The company will get back to you soon.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const subjects = [
    'General Inquiry',
    'Business Partnership',
    'Product Information',
    'Service Request',
    'Quotation Request',
    'Technical Support',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <button
            onClick={onBack}
            className="flex items-center text-white hover:text-orange-200 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Directory
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Building className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">ALL INDIA CHAMBER OF COMMERCE</h1>
              <p className="text-orange-100">WE FACILITATE BUSINESS ACROSS THE GLOBE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Details */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Company Header */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6">
            <h1 className="text-3xl font-bold text-center">{company.name}</h1>
          </div>

          {/* Company Information */}
          <div className="p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-orange-500" />
                    Address:
                  </h3>
                  <p className="text-gray-600 ml-7">
                    {company.address}<br />
                    {company.city}, {company.state}
                    {company.postal_code && ` - ${company.postal_code}`}<br />
                    {company.country}
                  </p>
                </div>

                {company.business_description && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                      <Building className="w-5 h-5 mr-2 text-orange-500" />
                      Long Business Description:
                    </h3>
                    <p className="text-gray-600 ml-7">{company.business_description}</p>
                  </div>
                )}

                {company.website && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-orange-500" />
                      Website:
                    </h3>
                    <a 
                      href={company.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 ml-7 flex items-center"
                    >
                      {company.website}
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                )}

                {company.email && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-orange-500" />
                      E-mail Address:
                    </h3>
                    <a 
                      href={`mailto:${company.email}`}
                      className="text-orange-600 hover:text-orange-700 ml-7"
                    >
                      {company.email}
                    </a>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                {company.phone && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-orange-500" />
                      Business Phone Number:
                    </h3>
                    <a 
                      href={`tel:${company.phone}`}
                      className="text-orange-600 hover:text-orange-700 ml-7"
                    >
                      {company.phone}
                    </a>
                  </div>
                )}

                {company.fax && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-orange-500" />
                      Business Fax:
                    </h3>
                    <p className="text-gray-600 ml-7">{company.fax}</p>
                  </div>
                )}

                {company.industry && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                      <Building className="w-5 h-5 mr-2 text-orange-500" />
                      Industry:
                    </h3>
                    <p className="text-gray-600 ml-7">{company.industry}</p>
                  </div>
                )}

                {company.established_year && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-orange-500" />
                      Established:
                    </h3>
                    <p className="text-gray-600 ml-7">{company.established_year}</p>
                  </div>
                )}

                {company.employee_count && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                      <Users className="w-5 h-5 mr-2 text-orange-500" />
                      Employees:
                    </h3>
                    <p className="text-gray-600 ml-7">{company.employee_count}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-12">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-t-xl">
                <h2 className="text-2xl font-bold text-center">Send Message To Listing Owner</h2>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-b-xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. John Doe"
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map(subject => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        placeholder="Enter your message here..."
                        required
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;