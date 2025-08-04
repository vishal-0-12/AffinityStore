import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'Fashion Enthusiast',
    text: 'Absolutely love the quality and variety of products! Fast shipping and great customer support.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    side: 'left',
  },
  {
    name: 'Sana Kapoor',
    role: 'Style Blogger',
    text: 'A perfect destination for trendy outfits. The return process was seamless!',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    side: 'right',
  },
  {
    name: 'Kabir Sharma',
    role: 'Father of Two',
    text: 'Bought clothes for my kids and myself—excellent quality and delivery on time!',
    image: 'https://randomuser.me/api/portraits/men/65.jpg',
    side: 'left',
  },
  {
    name: 'Ishita Rao',
    role: 'Creative Director',
    text: 'The fabrics are top-notch and the designs are so chic. I always find something unique here!',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    side: 'right',
  },
  {
    name: 'Rohan Desai',
    role: 'Startup Founder',
    text: 'The minimalistic styles and quality fabrics are perfect for my everyday wear. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    side: 'left',
  },
  {
    name: 'Priya Nair',
    role: 'UI/UX Designer',
    text: 'It’s refreshing to find a store that blends comfort with design. I always get compliments on my outfits.',
    image: 'https://randomuser.me/api/portraits/women/56.jpg',
    side: 'right',
  },
  {
    name: 'Ananya Verma',
    role: 'College Student',
    text: 'Affordable and trendy! I shop here before every new semester — love the seasonal collections.',
    image: 'https://randomuser.me/api/portraits/women/75.jpg',
    side: 'left',
  },
  {
    name: 'Dev Patel',
    role: 'Photographer',
    text: 'As someone always on the move, I appreciate the durability and fit of these clothes. Stylish and sturdy.',
    image: 'https://randomuser.me/api/portraits/men/88.jpg',
    side: 'right',
  },
];

const Testimonials: React.FC = () => {
  const [chatMessages, setChatMessages] = useState<typeof testimonials>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typing, setTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const showTyping = setTimeout(() => {
      setTyping(true);
    }, 1000);

    const showMessage = setTimeout(() => {
      const nextMessage = testimonials[currentIndex % testimonials.length];
      setChatMessages((prev) => [...prev, nextMessage]);
      setCurrentIndex((prev) => prev + 1);
      setTyping(false);
    }, 2500);

    return () => {
      clearTimeout(showTyping);
      clearTimeout(showMessage);
    };
  }, [currentIndex]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [chatMessages, typing]);

  return (
    <section className="bg-blue-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          A live conversation with our happy customers.
        </p>

        <div
          ref={chatRef}
          className="h-[400px] overflow-hidden pr-2 space-y-4"
        >
          {chatMessages.map((msg, idx) => {
            const isRight = msg.side === 'right';
            return (
              <motion.div
                key={idx}
                className={`flex items-end ${isRight ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {!isRight && (
                  <img
                    src={msg.image}
                    alt={msg.name}
                    className="w-10 h-10 rounded-full mr-3 object-cover border border-gray-300"
                  />
                )}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className={`max-w-sm p-4 rounded-2xl shadow ${
                    isRight
                      ? 'bg-pink-100 text-right rounded-br-none'
                      : 'bg-white rounded-bl-none'
                  }`}
                >
                  <p className="text-gray-800 italic mb-2">“{msg.text}”</p>
                  <div className="text-sm text-gray-600 font-semibold">
                    {msg.name}
                    <div className="text-xs font-normal text-gray-400">{msg.role}</div>
                  </div>
                </motion.div>
                {isRight && (
                  <img
                    src={msg.image}
                    alt={msg.name}
                    className="w-10 h-10 rounded-full ml-3 object-cover border border-gray-300"
                  />
                )}
              </motion.div>
            );
          })}

          {/* Typing indicator */}
          {typing && (
            <motion.div
              key="typing"
              className={`flex items-end ${
                testimonials[currentIndex % testimonials.length].side === 'right'
                  ? 'justify-end'
                  : 'justify-start'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`max-w-xs px-4 py-2 text-sm rounded-2xl font-medium ${
                  testimonials[currentIndex % testimonials.length].side === 'right'
                    ? 'bg-pink-100 text-gray-600 rounded-br-none'
                    : 'bg-white text-gray-500 rounded-bl-none'
                }`}
              >
                <div className="animate-pulse">Typing...</div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
