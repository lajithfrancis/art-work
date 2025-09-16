import React, { useRef, useState } from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '@/types/product';

interface ProductListingProps {
  title: string;
  products: Product[];
}

export const ProductListing = ({ title, products }: ProductListingProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft } = scrollRef.current;
    const cardWidth = 288;
    const gap = 24;
    const itemWidth = cardWidth + gap;
    const totalItems = products.length;
    const sectionWidth = itemWidth * totalItems;

    // Calculate current index directly from scrollLeft
    const currentIndex = Math.round(scrollLeft / itemWidth);
    const normalizedIndex = Math.min(Math.max(0, currentIndex), totalItems - 1);
    setActiveIndex(normalizedIndex);

    // Only prevent scrolling past the right boundary
    if (scrollLeft >= sectionWidth - itemWidth) {
      scrollRef.current.scrollLeft = sectionWidth - itemWidth;
    }
  };

  return (
    <div className='container mx-auto px-4'>
      <h2 className='text-4xl md:text-5xl font-serif font-bold mb-8 elegant-text text-center'>
        {title}
      </h2>

      {/* Mobile Infinite Scroll */}
      <div
        ref={scrollRef}
        className='md:hidden overflow-x-auto pb-4 scrollbar-hide'
        onScroll={handleScroll}
      >
        <div className='flex space-x-6 px-4'>
          {[...products].map((product, index) => (
            <div key={`${product.id}-${index}`} className='flex-shrink-0 w-72'>
              <ProductCard product={product} index={index} />
            </div>
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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};