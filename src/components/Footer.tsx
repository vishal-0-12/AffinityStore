import React from 'react';
import { 
  Building,
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">AICC</h3>
                <p className="text-sm text-gray-400">Chamber of Commerce</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              All India Chamber of Commerce facilitates business growth across the globe through networking, education, and strategic partnerships.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <Youtube className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3">
              {[
                'About Us',
                'Membership Benefits',
                'Member Directory',
                'Events & Activities',
                'International Trade',
                'Business Courses',
                'Certification Programs',
                'News & Updates'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center">
                    <ArrowRight className="w-3 h-3 mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Business Networking',
                'Trade Facilitation',
                'Export-Import Support',
                'Legal Advisory',
                'Market Research',
                'Business Matchmaking',
                'Training & Development',
                'Government Liaison'
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors text-sm flex items-center">
                    <CheckCircle className="w-3 h-3 mr-2" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">
                    123 Business District,<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">+91-99907-33308</p>
                  <p className="text-sm text-gray-300">+91-22-1234-5678</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">info@aicc.ind.in</p>
                  <p className="text-sm text-gray-300">support@aicc.ind.in</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-300">Mon - Fri: 8:00am - 7:00pm</p>
                  <p className="text-sm text-gray-300">Sat: 9:00am - 5:00pm</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h5 className="text-md font-semibold mb-4 text-white">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                />
                <button className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-r-lg hover:from-orange-600 hover:to-red-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 All India Chamber of Commerce. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                Privacy Policy
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                Terms of Service
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                Cookie Policy
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors flex items-center">
                Sitemap
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;