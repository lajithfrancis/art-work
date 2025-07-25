import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProductSize } from '@/data/products';
import { Star, Shield, Truck, Award } from 'lucide-react';

interface ProductInfoProps {
  title: string;
  description: string;
  sizes: ProductSize[];
  selectedSize: string;
  onSizeSelect: (sizeId: string) => void;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  title,
  description,
  sizes,
  selectedSize,
  onSizeSelect
}) => {
  const selectedSizeData = sizes.find(size => size.id === selectedSize);

  return (
    <div className="space-y-6">
      {/* Title and Rating */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {title}
        </h1>
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-1 text-sm text-muted-foreground">(4.8)</span>
          </div>
          <Badge variant="secondary">Handcrafted</Badge>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {/* Price Display */}
      {selectedSizeData && (
        <div className="py-4 border-y border-border">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-foreground">
              {selectedSizeData.price}
            </span>
            <span className="text-lg text-muted-foreground line-through">
              ₹{(parseInt(selectedSizeData.price.replace('₹', '').replace(',', '')) * 1.2).toLocaleString('en-IN')}
            </span>
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
              17% off
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Inclusive of all taxes
          </p>
        </div>
      )}

      {/* Size Selection */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-foreground">
          Available Sizes
        </h3>
        <div className="grid gap-3">
          {sizes.map((size) => (
            <Card
              key={size.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedSize === size.id 
                  ? 'ring-2 ring-primary bg-primary/5' 
                  : 'hover:bg-accent/50'
              }`}
              onClick={() => onSizeSelect(size.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">
                        {size.name}
                      </span>
                      {size.popular && (
                        <Badge variant="secondary" className="text-xs">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {size.description}
                    </p>
                  </div>
                  <span className="text-lg font-bold text-primary ml-4">
                    {size.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 pt-4">
        <Button
          size="lg"
          className="w-full nature-gradient text-white py-3 text-lg font-semibold"
          disabled={!selectedSize}
        >
          {selectedSize ? 'Enquire Now' : 'Select a Size to Enquire'}
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="w-full text-lg border-primary text-primary hover:bg-primary/5"
          disabled={!selectedSize}
        >
          Contact for Custom Order
        </Button>
      </div>

      {/* Trust Indicators */}
      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
        <div className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          <span className="text-sm text-muted-foreground">Authenticity Guaranteed</span>
        </div>
        <div className="flex items-center gap-2">
          <Truck className="w-5 h-5 text-primary" />
          <span className="text-sm text-muted-foreground">Free Shipping ₹500+</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-primary" />
          <span className="text-sm text-muted-foreground">Handcrafted Quality</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-primary" />
          <span className="text-sm text-muted-foreground">Certificate Included</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;