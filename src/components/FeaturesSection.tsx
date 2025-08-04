import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

import loadingCarAnimation from "../animations/Loading_car.json";
import paymentAnimation from "../animations/Wallet_Animation.json";
import returnAnimation from "../animations/return.json";
import supportAnimation from "../animations/customer_support.json";

const features = [
  {
    title: "Free Shipping",
    description: "Free shipping on orders above ₹999",
    lottieAnimation: loadingCarAnimation,
  },
  {
    title: "Flexible Payment",
    description: "Multiple payment options available",
    lottieAnimation: paymentAnimation,
  },
  {
    title: "14 Day Returns",
    description: "Easy returns within 14 days",
    lottieAnimation: returnAnimation,
  },
  {
    title: "Premium Support",
    description: "24/7 customer support",
    lottieAnimation: supportAnimation,
  },
];

const FeaturesSection: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
      >
        {features.map(({ title, description, lottieAnimation }) => (
          <motion.div
            key={title}
            className="text-center group cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <div className="mb-4">
              <Lottie
                animationData={lottieAnimation}
                loop
                autoplay
                style={{ width: 150, height: 150, margin: "0 auto" }}
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-pink-600">
              {title}
            </h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;
