import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-pink-500 to-pink-600 text-white">
      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
      >
        {/* About Us */}
        <div>
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed text-pink-100">
            Welcome to Affinity Store — your one–stop destination for fashion
            that blends tradition with modern style! Since 2019, we’ve helped
            customers express themselves through curated apparel for every
            occasion.
          </p>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            {["Privacy Policy", "Terms & Conditions", "Brand", "Gallery"].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:underline hover:text-white transition-colors duration-200 text-pink-100"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About Us", "Career", "Contact Us"].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:underline hover:text-white transition-colors duration-200 text-pink-100"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Find Us */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Find Us</h3>
          <div className="space-y-2 text-sm text-pink-100">
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 mt-0.5 text-white" />
              <p className="leading-relaxed">
                DD Colony, Pipli Rd, opposite New Bus Stand, <br />
                Kurukshetra, Haryana 136118
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-white" />
              <p>090693 00099</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-white" />
              <p>info@affinitystore.com</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="hover:scale-110 transition-transform duration-300 text-white hover:text-blue-300"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:scale-110 transition-transform duration-300 text-white hover:text-pink-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:scale-110 transition-transform duration-300 text-white hover:text-sky-300"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="hover:scale-110 transition-transform duration-300 text-white hover:text-red-300"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <div>
  <div className="border-t border-white/30 mx-20" />
  <div className="text-white text-sm text-center py-4">
    © 2025 <span className="font-semibold">Affinity Store</span>. All Rights Reserved.
  </div>
</div>

    </footer>
  );
};

export default Footer;
