
import React from 'react';
import { Heart, MessageCircle, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "1234567890";
    const message = "Hi! I'm interested in your resin artwork.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid md:grid-cols-4 gap-8'>
          {/* Brand */}
          <div className='md:col-span-2'>
            <h3 className='text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
              Winged Aura Artistry
            </h3>
            <p className='text-gray-300 mb-6 max-w-md'>
              Creating unique, handcrafted resin art pieces that bring beauty
              and inspiration to your space. Each artwork tells its own story
              through flowing colors and organic patterns.
            </p>
            <div className='flex space-x-4'>
              <button
                onClick={handleWhatsAppClick}
                className='bg-green-500 hover:bg-green-600 p-3 rounded-full transition-colors duration-300'
              >
                <MessageCircle className='w-5 h-5' />
              </button>
              <button className='bg-pink-500 hover:bg-pink-600 p-3 rounded-full transition-colors duration-300'>
                <Instagram className='w-5 h-5' />
              </button>
              <button className='bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300'>
                <Mail className='w-5 h-5' />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='#home'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#gallery'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='text-gray-300 hover:text-white transition-colors duration-300'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>Services</h4>
            <ul className='space-y-2 text-gray-300'>
              <li>Custom Artwork</li>
              <li>Commission Pieces</li>
              <li>Corporate Art</li>
              <li>Gift Items</li>
            </ul>
          </div>
        </div>

        <div className='border-t border-gray-700 mt-8 pt-8 text-center'>
          <p className='text-gray-300 flex items-center justify-center space-x-1'>
            <span>Made with</span>
            <Heart className='w-4 h-4 text-red-500' />
            <span>by ArtFlow Resin © 2024. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
