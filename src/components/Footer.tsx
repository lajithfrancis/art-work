import React from 'react';
import { Heart, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '918891021394';
    const message = "Hi! I'm interested in your resin artwork.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
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
                <svg viewBox='0 0 24 24' className='w-5 h-5 fill-current'>
                  <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
                </svg>
              </button>
              <a
                href='https://www.instagram.com/winged_auraartistry'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center space-x-4 cursor-pointer no-underline'
              >
                <button className='bg-pink-500 hover:bg-pink-600 p-3 rounded-full transition-colors duration-300'>
                  <Instagram className='w-5 h-5' />
                </button>
              </a>
              <a href='mailto:wingedauraartistry@gmail.com'>
                <button className='bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-colors duration-300'>
                  <Mail className='w-5 h-5' />
                </button>
              </a>
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
