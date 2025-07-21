import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Gallery = () => {
  const location = useLocation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (location.state?.scrollY !== undefined) {
      window.scrollTo(0, location.state.scrollY);
    }
  }, [location.state?.scrollY]);

  useEffect(() => {
    // Set initial scroll position to start from middle section for seamless infinite scroll
    if (scrollRef.current) {
      const cardWidth = 288; // w-72 = 18rem = 288px
      const gap = 24; // space-x-6 = 1.5rem = 24px
      const itemWidth = cardWidth + gap;
      const totalItems = 4;
      const sectionWidth = itemWidth * totalItems;
      scrollRef.current.scrollLeft = sectionWidth;
    }
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    
    const { scrollLeft } = scrollRef.current;
    const cardWidth = 288; // w-72 = 18rem = 288px
    const gap = 24; // space-x-6 = 1.5rem = 24px
    const itemWidth = cardWidth + gap;
    const totalItems = 4;
    const sectionWidth = itemWidth * totalItems;
    
    // Calculate current active index (considering we're starting from middle section)
    const adjustedScrollLeft = scrollLeft - sectionWidth;
    const currentIndex = Math.round(adjustedScrollLeft / itemWidth);
    const normalizedIndex = ((currentIndex % totalItems) + totalItems) % totalItems;
    setActiveIndex(normalizedIndex);
    
    // If scrolled past the second section, reset to middle section
    if (scrollLeft >= sectionWidth * 2) {
      scrollRef.current.scrollLeft = sectionWidth;
    }
    // If scrolled before the first section, jump to middle section
    else if (scrollLeft <= 0) {
      scrollRef.current.scrollLeft = sectionWidth;
    }
  };

  const products = [
    {
      id: 'geode-art',
      title: 'Geode Art',
      description: 'Beautiful crystalline formations in resin',
      image:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      defaultSize: 'Medium (12x16 inches)',
      startingPrice: '₹245',
    },
    {
      id: 'wall-installations',
      title: 'Wall Installations',
      description: 'Large scale artistic wall pieces',
      image:
        'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop',
      defaultSize: 'Large (24x36 inches)',
      startingPrice: '₹850',
    },
    {
      id: 'resin-mirror',
      title: 'Resin Mirror',
      description: 'Functional art pieces with mirror elements',
      image:
        'https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=400&h=400&fit=crop',
      defaultSize: 'Round (18 inches)',
      startingPrice: '₹420',
    },
    {
      id: 'religion-wall-frames',
      title: 'Religion Wall Frames',
      description: 'Spiritual and religious themed artwork',
      image:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      defaultSize: 'Standard (16x20 inches)',
      startingPrice: '₹280',
    },
  ];

  return (
    <section id='gallery' className='py-20 bg-secondary/30'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-serif font-bold mb-4 elegant-text'>
            Fresh from the Studio
          </h2>
          <p className='text-lg text-muted-foreground max-w-3xl mx-auto font-sans'>
            The latest pieces to emerge from our studio, inspired by the ever-changing beauty of nature. 
            Discover new designs, seasonal botanicals, and the most recent one-of-a-kind art waiting to find a home.
          </p>
        </div>

        {/* Mobile Infinite Scroll */}
        <div 
          ref={scrollRef}
          className='md:hidden overflow-x-auto pb-4 scrollbar-hide' 
          onScroll={handleScroll}
        >
          <div className='flex space-x-6 px-4'>
            {[...products, ...products, ...products].map((product, index) => (
               <Card
                key={`${product.id}-${index}`}
                className='group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex-shrink-0 w-72 rounded-3xl'
              >
                <CardContent className='p-0'>
                  <div className='relative overflow-hidden rounded-t-3xl'>
                    <img
                      src={product.image}
                      alt={product.title}
                      className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 rounded-t-3xl'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl'></div>
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-serif font-semibold mb-2 text-foreground'>
                      {product.title}
                    </h3>
                    <p className='text-muted-foreground mb-2 font-sans'>{product.description}</p>
                    <p className='text-sm text-muted-foreground mb-1 font-sans'>
                      {product.defaultSize}
                    </p>
                    <p className='text-lg font-semibold text-elegant mb-4 font-sans'>
                      Starting at {product.startingPrice}
                    </p>
                    <Button
                      asChild
                      className='w-full nature-gradient hover:opacity-90 text-primary-foreground font-sans sophisticated-shadow'
                    >
                      <Link to={`/product/${product.id}`}>
                        View Sizes & Prices
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile Dots Indicator */}
        <div className='md:hidden flex justify-center space-x-2 mt-4'>
          {products.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-primary w-8' : 'bg-muted'
              }`}
            />
          ))}
        </div>

        {/* Desktop Grid View */}
        <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8'>
          {products.map((product) => (
            <Card
              key={product.id}
              className='group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-3xl'
            >
              <CardContent className='p-0'>
                <div className='relative overflow-hidden rounded-t-3xl'>
                  <img
                    src={product.image}
                    alt={product.title}
                    className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 rounded-t-3xl'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl'></div>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-serif font-semibold mb-2 text-foreground'>
                    {product.title}
                  </h3>
                  <p className='text-muted-foreground mb-2 font-sans'>{product.description}</p>
                  <p className='text-sm text-muted-foreground mb-1 font-sans'>
                    {product.defaultSize}
                  </p>
                  <p className='text-lg font-semibold text-elegant mb-4 font-sans'>
                    Starting at {product.startingPrice}
                  </p>
                  <Button
                    asChild
                    className='w-full nature-gradient hover:opacity-90 text-primary-foreground font-sans sophisticated-shadow'
                  >
                    <Link to={`/product/${product.id}`}>
                      View Sizes & Prices
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
