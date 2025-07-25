import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { products, Product } from '@/data/products';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import ProductImageGallery from '@/components/ProductImageGallery';
import ProductInfo from '@/components/ProductInfo';
import ProductTabs from '@/components/ProductTabs';


const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const location = useLocation();

  const product: Product | undefined =
    products[productId as keyof typeof products];
    
  const [selectedSize, setSelectedSize] = useState<string>(product?.sizes[0]?.id || '');

  useEffect(() => {
    if (location.state?.scrollY !== undefined) {
      window.scrollTo(0, location.state.scrollY);
    }
  }, [location.state?.scrollY]);

  if (!product) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-background'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-foreground mb-4'>
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
    <div className='min-h-screen bg-background'>
      {/* Header with breadcrumbs */}
      <div className='bg-card border-b border-border pt-16 pb-4'>
        <div className='container mx-auto px-4'>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/#gallery">Gallery</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Main Product Content */}
      <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto'>
          {/* Left: Product Images */}
          <div className='lg:sticky lg:top-24 lg:self-start'>
            <ProductImageGallery
              sizes={product.sizes}
              selectedSize={selectedSize}
              onSizeSelect={setSelectedSize}
            />
          </div>

          {/* Right: Product Information */}
          <div>
            <ProductInfo
              title={product.title}
              description={product.description}
              sizes={product.sizes}
              selectedSize={selectedSize}
              onSizeSelect={setSelectedSize}
            />
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className='max-w-7xl mx-auto'>
          <ProductTabs />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
