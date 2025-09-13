import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className='fixed top-0 w-full bg-background/95 backdrop-blur-md z-50 shadow-sm border-b border-border'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <img
              src='/lovable-uploads/icon-1.png'
              alt='Winged Aura Artistry'
              className='h-20 w-20'
            />
          </div>
          <h1 className='header-text'>Winged Aura Artistry</h1>
          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-foreground hover:text-primary transition-colors duration-300 font-sans'
              >
                {item.name}
              </a>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-foreground'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className='md:hidden mt-4 pb-4'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='block py-2 text-foreground hover:text-primary transition-colors duration-300 font-sans'
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
