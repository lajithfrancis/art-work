import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProductSize } from '@/data/products';

interface ProductImageGalleryProps {
  sizes: ProductSize[];
  selectedSize: string;
  onSizeSelect: (sizeId: string) => void;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  sizes,
  selectedSize,
  onSizeSelect
}) => {
  const selectedSizeData = sizes.find(size => size.id === selectedSize) || sizes[0];
  const mainImage = selectedSizeData?.image || sizes[0]?.image;

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <Card className="overflow-hidden">
        <div className="aspect-square bg-card">
          <img
            src={mainImage}
            alt={selectedSizeData?.name || 'Product image'}
            className="w-full h-full object-cover"
          />
        </div>
      </Card>

      {/* Size Variant Images */}
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-muted-foreground">Available Variants</h4>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {sizes.map((size) => (
            <Card
              key={size.id}
              className={`flex-shrink-0 cursor-pointer overflow-hidden transition-all ${
                selectedSize === size.id ? 'ring-2 ring-primary' : 'hover:ring-1 ring-border'
              }`}
              onClick={() => onSizeSelect(size.id)}
            >
              <div className="w-20 h-20 bg-card relative">
                <img
                  src={size.image}
                  alt={size.name}
                  className="w-full h-full object-cover"
                />
                {size.popular && (
                  <Badge className="absolute -top-1 -right-1 text-xs px-1 py-0">
                    Popular
                  </Badge>
                )}
                {selectedSize === size.id && (
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;