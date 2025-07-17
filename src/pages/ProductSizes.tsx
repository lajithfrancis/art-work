import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { products, ProductSize } from '@/data/products';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ProductSizes: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const product = products[productId as keyof typeof products];

  if (!product) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-gray-800 mb-4'>Product Not Found</h1>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen pt-32 pb-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <Button
          variant='outline'
          className='mb-6'
          onClick={() => {
            if (location.state?.from) {
              navigate(location.state.from);
            } else {
              navigate('/');
            }
          }}
        >
          <span className='flex items-center gap-2'>
            <ArrowLeft className='h-4 w-4' />
            Back to Product
          </span>
        </Button>
        <h1 className='text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
          {product.title} - Sizes & Prices
        </h1>
        <div className='grid gap-6 max-w-2xl mx-auto'>
          {product.sizes.map((size: ProductSize) => (
            <Card key={size.id} className='hover:shadow-lg'>
              <CardContent className='p-6'>
                <div className='flex items-center justify-between mb-2'>
                  <span className='font-semibold text-lg text-gray-800'>{size.name}</span>
                  <span className='text-xl font-bold text-purple-600'>{size.price}</span>
                </div>
                {size.popular && (
                  <span className='bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium'>
                    Popular
                  </span>
                )}
                <p className='text-gray-600 mt-2'>{size.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSizes;