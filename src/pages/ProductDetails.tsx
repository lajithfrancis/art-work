import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { products, Product, ProductSize } from '@/data/products';

const SizeCard: React.FC<{
  size: ProductSize;
  selected: boolean;
  onSelect: () => void;
}> = ({ size, selected, onSelect }) => (
  <Card
    className={`cursor-pointer transition-all duration-200 hover:shadow-lg rounded-2xl ${
      selected ? 'ring-2 ring-purple-600 bg-purple-50' : 'hover:bg-gray-50'
    }`}
    onClick={onSelect}
  >
    <CardContent className='p-4'>
      <div className='space-y-2'>
        <div className='flex items-center justify-between'>
          <span className='font-medium text-gray-800'>{size.name}</span>
          <span className='text-xl font-bold text-purple-600'>
            {size.price}
          </span>
        </div>
        {size.popular && (
          <span className='bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium'>
            Popular
          </span>
        )}
        <p className='text-sm text-gray-600 leading-relaxed'>
          {size.description}
        </p>
      </div>
    </CardContent>
  </Card>
);

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();

  const product: Product | undefined =
    products[productId as keyof typeof products];

  useEffect(() => {
    if (location.state?.scrollY !== undefined) {
      window.scrollTo(0, location.state.scrollY);
    }
  }, [location.state?.scrollY]);

  if (!product) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-gray-800 mb-4'>
            Product Not Found
          </h1>
          <Button asChild>
            <Link to='/'>Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen pt-12 pb-8 bg-gray-50'>
      <div className='container mx-auto px-2'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
          {/* Product Image & Highlights */}
          <div>
            <div className='relative w-full'>
              <img
                src={product.image}
                alt={product.title}
                className='w-full h-80 lg:h-[350px] object-cover rounded-3xl shadow-xl'
              />
              <div className='absolute bottom-4 left-4 bg-white/80 rounded-xl px-4 py-2 shadow text-purple-700 font-semibold text-lg'>
                {product.title}
              </div>
            </div>
            <div className='mt-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-4 shadow'>
              <h2 className='text-xl font-bold text-purple-700 mb-2'>
                Why You'll Love This
              </h2>
              <ul className='list-disc list-inside text-gray-700 space-y-1'>
                <li>Unique, handcrafted resin art</li>
                <li>Premium materials & finish</li>
                <li>Custom sizes available</li>
                <li>Certificate of authenticity</li>
              </ul>
            </div>
          </div>

          {/* Product Details & Actions */}
          <div className='space-y-6'>
            <div>
              <h1 className='text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
                {product.title}
              </h1>
              <p className='text-lg text-gray-600 leading-relaxed mb-4'>
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className='text-xl font-semibold mb-4 text-gray-800'>
                Select Size & Style
              </h3>
              <div className='grid gap-4'>
                {product.sizes.map((size) => (
                  <SizeCard
                    key={size.id}
                    size={size}
                    selected={selectedSize === size.id}
                    onSelect={() => setSelectedSize(size.id)}
                  />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className='flex flex-col gap-3 pt-4'>
              <Button
                size='lg'
                className='w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 text-lg font-semibold'
                disabled={!selectedSize}
              >
                {selectedSize ? 'Enquire Now' : 'Select a Size to Enquire'}
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='w-full text-lg'
                disabled={!selectedSize}
              >
                Contact for Custom Order
              </Button>
            </div>

            {/* Additional Info */}
            <div className='bg-blue-50 p-4 rounded-xl mt-6'>
              <h4 className='font-semibold text-blue-900 mb-2'>
                What's Included:
              </h4>
              <ul className='text-blue-800 text-sm space-y-1'>
                <li>• Handcrafted resin art piece</li>
                <li>• Ready to hang with mounting hardware</li>
                <li>• Certificate of authenticity</li>
                <li>• Protective packaging for shipping</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
