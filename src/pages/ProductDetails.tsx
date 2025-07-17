import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { products, Product, ProductSize } from '@/data/products';

const SizeCard: React.FC<{
  size: ProductSize;
  selected: boolean;
  onSelect: () => void;
}> = ({ size, selected, onSelect }) => (
  <Card
    className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
      selected ? 'ring-2 ring-purple-600 bg-purple-50' : 'hover:bg-gray-50'
    }`}
    onClick={onSelect}
  >
    <CardContent className='p-4'>
      <div className='space-y-3'>
        <div className='flex items-center justify-between'>
          <div className='flex-1'>
            <div className='flex items-center gap-2'>
              <span className='font-medium text-gray-800'>{size.name}</span>
              {size.popular && (
                <span className='bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium'>
                  Popular
                </span>
              )}
            </div>
          </div>
          <div className='text-right'>
            <span className='text-xl font-bold text-purple-600'>
              {size.price}
            </span>
          </div>
        </div>
        {size.description && (
          <p className='text-sm text-gray-600 leading-relaxed'>
            {size.description}
          </p>
        )}
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
    <div className='min-h-screen pt-4 pb-8 bg-gray-50'>
      <div className='container mx-auto px-2'>
        <div className='mb-4'>
          <Button
            variant='outline'
            className='mb-4'
            onClick={() => {
              navigate(-1);
            }}
          >
            <span className='flex items-center gap-2'>
              <ArrowLeft className='h-4 w-4' />
              Back to Main
            </span>
          </Button>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {/* Product Image */}
          <div className='relative'>
            <img
              src={product.image}
              alt={product.title}
              className='w-full h-80 lg:h-[350px] object-cover rounded-lg shadow-lg'
            />
          </div>

          {/* Product Details */}
          <div className='space-y-4'>
            <div>
              <h1 className='text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
                {product.title}
              </h1>
              <p className='text-lg text-gray-600 leading-relaxed'>
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3
                className='text-xl font-semibold mb-4 text-gray-800 cursor-pointer hover:underline'
                onClick={() =>
                  navigate(`/product/${product.id}/sizes`, {
                    state: {
                      from: location.pathname + location.search + location.hash,
                    },
                  })
                }
                role='button'
                tabIndex={0}
              >
                Select Size & Style
              </h3>
              <div className='grid gap-3'>
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
            <div className='space-y-3 pt-6'>
              <Button
                size='lg'
                className='w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3'
                disabled={!selectedSize}
              >
                {selectedSize ? 'Enquire' : 'Select a Size'}
              </Button>
              <Button
                variant='outline'
                size='lg'
                className='w-full'
                disabled={!selectedSize}
              >
                Contact for Custom Order
              </Button>
            </div>

            {/* Additional Info */}
            <div className='bg-blue-50 p-4 rounded-lg'>
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
