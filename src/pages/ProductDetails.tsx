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
      description: 'Resin coated on 10 mm MDF board featuring abstract, multi-panel designs with metallic and marble-like textures',
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      sizes: [
        { 
          id: 'small', 
          name: '24" x 24" (Customizable)', 
          price: '₹800', 
          popular: false,
          description: 'Abstract, multi-panel design featuring a mix of metallic and marble-like textures with swirling patterns of silver, gray, and black, accented by gold embellishments. The central portion has a clustered gold texture, giving it a geode-inspired look.'
        },
        { 
          id: 'medium', 
          name: '60" x 24" (Customizable)', 
          price: '₹9200', 
          popular: true,
          description: 'Stunning geode-inspired design with vibrant shades of blue, turquoise, and white, creating a mesmerizing natural stone effect. The edges are accentuated with gold detailing, adding a luxurious touch with intricate layering and texture.'
        },
        { 
          id: 'large', 
          name: '30" x 16" (Customizable)', 
          price: '₹7500', 
          popular: false,
          description: 'Striking geode-inspired art piece with rich, dark color palette featuring shades of deep brown, black, and shimmering metallic accents. The organic, irregular shape mimics natural formation with crystal-like embellishments.'
        },
        { 
          id: 'xlarge', 
          name: '32" x 20" (Customizable)', 
          price: '₹8000', 
          popular: false,
          description: 'Breathtaking geode-inspired artwork with rich blend of deep emerald green, teal, and white, mimicking natural layers of an agate slice. Textured gold finish enhances its organic, raw mineral appearance with mesmerizing depth.'
        },
        { 
          id: 'premium', 
          name: '60" x 24" Premium (Customizable)', 
          price: '₹9200', 
          popular: false,
          description: 'Sophisticated, nature-inspired design with warm, earthy tones of beige, cream, and gold. The layered, abstract pattern mimics organic flow of natural stone with luxurious appeal and elegant refined look.'
        }
      ]
    },
    'wall-installations': {
      title: 'Wall Installations',
      description: 'Large scale artistic installations designed to transform your space with flowing resin compositions',
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop",
      sizes: [
        { 
          id: 'large', 
          name: '36" x 48" Ocean Flow', 
          price: '₹12500', 
          popular: false,
          description: 'Massive ocean-inspired installation with deep blues and whites creating wave-like patterns. Multi-panel design with metallic silver accents that catch and reflect light beautifully.'
        },
        { 
          id: 'xlarge', 
          name: '48" x 60" Forest Canopy', 
          price: '₹15800', 
          popular: true,
          description: 'Grand forest-themed installation featuring rich greens, browns, and gold veining. The organic flow mimics tree canopies with intricate texturing and dimensional depth.'
        },
        { 
          id: 'xxlarge', 
          name: '60" x 72" Cosmic Horizon', 
          price: '₹18900', 
          popular: false,
          description: 'Spectacular space-inspired installation with deep purples, blacks, and metallic stars. Creates an otherworldly atmosphere with flowing nebula-like patterns and shimmering accents.'
        },
        { 
          id: 'custom', 
          name: 'Custom Size Installation', 
          price: 'Quote', 
          popular: false,
          description: 'Bespoke wall installation tailored to your space requirements. Choose your own color palette, size, and design elements for a truly unique artistic statement.'
        }
      ]
    },
    'resin-mirror': {
      title: 'Resin Mirror',
      description: 'Functional art pieces combining beautiful resin work with high-quality mirror elements',
      image: "https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=600&h=600&fit=crop",
      sizes: [
        { 
          id: 'small', 
          name: '18" Round Sunrise Mirror', 
          price: '₹4200', 
          popular: false,
          description: 'Elegant round mirror with warm golden resin frame featuring sunrise-inspired gradients. The flowing patterns create a natural sunburst effect around the mirror surface.'
        },
        { 
          id: 'medium', 
          name: '24" Round Ocean Mirror', 
          price: '₹5800', 
          popular: true,
          description: 'Stunning round mirror with ocean-inspired blue and teal resin frame. Wave-like patterns with white foam effects and gold accents create a coastal luxury feel.'
        },
        { 
          id: 'large', 
          name: '30" Round Forest Mirror', 
          price: '₹7200', 
          popular: false,
          description: 'Large round mirror with forest-themed green resin frame. Rich emerald and jade tones with gold veining create an organic, natural appearance perfect for nature lovers.'
        },
        { 
          id: 'rectangular', 
          name: '24" x 36" Geode Mirror', 
          price: '₹8500', 
          popular: false,
          description: 'Rectangular mirror with dramatic geode-inspired resin frame. Features crystalline formations, metallic accents, and natural stone patterns that frame your reflection beautifully.'
        }
      ]
    },
    'religion-wall-frames': {
      title: 'Religion Wall Frames',
      description: 'Spiritual and religious themed artwork with sacred symbolism in beautiful resin compositions',
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      sizes: [
        { 
          id: 'small', 
          name: '16" x 20" Sacred Lotus', 
          price: '₹3200', 
          popular: false,
          description: 'Beautiful lotus-themed resin art with soft pinks, whites, and gold accents. The flowing petals create a serene meditation focal point with spiritual symbolism.'
        },
        { 
          id: 'medium', 
          name: '20" x 24" Divine Light', 
          price: '₹4200', 
          popular: true,
          description: 'Radiant spiritual artwork featuring golden rays and divine light effects. The resin work creates depth and luminosity that evokes feelings of peace and transcendence.'
        },
        { 
          id: 'large', 
          name: '24" x 30" Om Meditation', 
          price: '₹5800', 
          popular: false,
          description: 'Powerful Om symbol rendered in flowing resin with deep blues, purples, and gold. The sacred geometry creates a perfect meditation piece with spiritual energy.'
        },
        { 
          id: 'premium', 
          name: '20" x 24" LED Buddha Serenity', 
          price: '₹6500', 
          popular: false,
          description: 'Premium Buddha silhouette with integrated LED lighting. The backlit resin creates a gentle glow through peaceful blues and whites, perfect for meditation spaces.'
        }
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
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Select Size & Style</h3>
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
                      <div className="space-y-3">
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
                        {(size as any).description && (
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {(size as any).description}
                          </p>
                        )}
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