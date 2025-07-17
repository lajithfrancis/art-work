import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const [selectedSize, setSelectedSize] = useState<string>('');

  const productData = {
    'geode-art': {
      title: 'Geode Art',
      description: 'Beautiful crystalline formations in resin with natural stone-like appearance',
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      sizes: [
        { id: 'small', name: 'Small (8x10 inches)', price: '₹180', popular: false },
        { id: 'medium', name: 'Medium (12x16 inches)', price: '₹245', popular: true },
        { id: 'large', name: 'Large (16x20 inches)', price: '₹320', popular: false },
        { id: 'xlarge', name: 'Extra Large (20x24 inches)', price: '₹450', popular: false }
      ]
    },
    'wall-installations': {
      title: 'Wall Installations',
      description: 'Large scale artistic wall pieces designed to transform your space',
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop",
      sizes: [
        { id: 'large', name: 'Large (24x36 inches)', price: '₹850', popular: false },
        { id: 'xlarge', name: 'Extra Large (36x48 inches)', price: '₹1200', popular: true },
        { id: 'xxlarge', name: 'XXL (48x60 inches)', price: '₹1650', popular: false },
        { id: 'custom', name: 'Custom Size (Contact for Quote)', price: 'Quote', popular: false }
      ]
    },
    'resin-mirror': {
      title: 'Resin Mirror',
      description: 'Functional art pieces combining beautiful resin work with mirror elements',
      image: "https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=600&h=600&fit=crop",
      sizes: [
        { id: 'small', name: 'Small Round (12 inches)', price: '₹320', popular: false },
        { id: 'medium', name: 'Medium Round (18 inches)', price: '₹420', popular: true },
        { id: 'large', name: 'Large Round (24 inches)', price: '₹580', popular: false },
        { id: 'rectangular', name: 'Rectangular (18x24 inches)', price: '₹650', popular: false }
      ]
    },
    'religion-wall-frames': {
      title: 'Religion Wall Frames',
      description: 'Spiritual and religious themed artwork with sacred symbolism',
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      sizes: [
        { id: 'small', name: 'Small (12x16 inches)', price: '₹220', popular: false },
        { id: 'medium', name: 'Standard (16x20 inches)', price: '₹280', popular: true },
        { id: 'large', name: 'Large (20x24 inches)', price: '₹380', popular: false },
        { id: 'premium', name: 'Premium with LED (16x20 inches)', price: '₹450', popular: false }
      ]
    }
  };

  const product = productData[productId as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Button variant="outline" asChild className="mb-6">
            <Link to="/#gallery" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {product.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Select Size</h3>
              <div className="grid gap-3">
                {product.sizes.map((size) => (
                  <Card 
                    key={size.id} 
                    className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                      selectedSize === size.id 
                        ? 'ring-2 ring-purple-600 bg-purple-50' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedSize(size.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-800">{size.name}</span>
                            {size.popular && (
                              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                                Popular
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold text-purple-600">{size.price}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-6">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3"
                disabled={!selectedSize}
              >
                {selectedSize ? 'Add to Cart' : 'Select a Size'}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full"
                disabled={!selectedSize}
              >
                Contact for Custom Order
              </Button>
            </div>

            {/* Additional Info */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">What's Included:</h4>
              <ul className="text-blue-800 text-sm space-y-1">
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