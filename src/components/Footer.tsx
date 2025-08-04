import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f14da6] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            Welcome to Affinity Store, your one–stop destination for fashion that blends tradition with modern style! Established in 2019, we have been dedicated to providing a diverse range of apparel, ensuring that every customer finds something special.
          </p>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-bold mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Brand</a></li>
            <li><a href="#" className="hover:underline">Gallery</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Career</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Find us */}
        <div>
          <h3 className="text-lg font-bold mb-4">Find us</h3>
          <p className="text-sm mb-2">DD colony, Pipli Rd, opposite New Bus Stand,<br />Kurukshetra, Haryana 136118</p>
          <p className="text-sm mb-2">090693 00099</p>
          <p className="text-sm">info@affinitystore.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#"><img src="/facebook.svg" alt="Facebook" className="w-5 h-5" /></a>
            <a href="#"><img src="/instagram.svg" alt="Instagram" className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#ec4c97] text-white text-sm text-center py-4">
        © 2025 affinitystore.com. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;