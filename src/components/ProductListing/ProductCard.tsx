import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard = ({ product, index }: ProductCardProps) => (
  <Link 
    key={index ? `${product.id}-${index}` : product.id} 
    to={`/product/${product.id}`}
  >
    <Card className='group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-3xl cursor-pointer'>
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
          <p className='text-muted-foreground mb-2 font-sans'>
            {product.description}
          </p>
          <p className='text-sm text-muted-foreground mb-1 font-sans'>
            {product.defaultSize}
          </p>
          <p className='text-lg font-semibold text-elegant mb-4 font-sans'>
            Starting at {product.startingPrice}
          </p>
          <Button className='w-full nature-gradient hover:opacity-90 text-primary-foreground font-sans sophisticated-shadow pointer-events-none'>
            View Sizes & Prices
          </Button>
        </div>
      </CardContent>
    </Card>
  </Link>
);