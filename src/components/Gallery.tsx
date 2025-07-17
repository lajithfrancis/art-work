import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Gallery = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollY !== undefined) {
      window.scrollTo(0, location.state.scrollY);
    }
  }, [location.state?.scrollY]);

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
    <section id='gallery' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
            Our Products
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Discover our handcrafted resin art pieces, available in multiple
            sizes and custom options
          </p>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className='md:hidden overflow-x-auto pb-4'>
          <div className='flex space-x-6 px-4'>
            {products.map((product) => (
              <Card
                key={product.id}
                className='group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex-shrink-0 w-72'
              >
                <CardContent className='p-0'>
                  <div className='relative overflow-hidden rounded-t-lg'>
                    <img
                      src={product.image}
                      alt={product.title}
                      className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  </div>
                  <div className='p-6'>
                    <h3 className='text-xl font-semibold mb-2 text-gray-800'>
                      {product.title}
                    </h3>
                    <p className='text-gray-600 mb-2'>{product.description}</p>
                    <p className='text-sm text-gray-500 mb-1'>
                      {product.defaultSize}
                    </p>
                    <p className='text-lg font-semibold text-purple-600 mb-4'>
                      Starting at {product.startingPrice}
                    </p>
                    <Button
                      asChild
                      className='w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
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

        {/* Desktop Grid View */}
        <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8'>
          {products.map((product) => (
            <Card
              key={product.id}
              className='group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
            >
              <CardContent className='p-0'>
                <div className='relative overflow-hidden rounded-t-lg'>
                  <img
                    src={product.image}
                    alt={product.title}
                    className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-2 text-gray-800'>
                    {product.title}
                  </h3>
                  <p className='text-gray-600 mb-2'>{product.description}</p>
                  <p className='text-sm text-gray-500 mb-1'>
                    {product.defaultSize}
                  </p>
                  <p className='text-lg font-semibold text-purple-600 mb-4'>
                    Starting at {product.startingPrice}
                  </p>
                  <Button
                    asChild
                    className='w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
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
