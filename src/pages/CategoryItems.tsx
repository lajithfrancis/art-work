import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const CategoryItems = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  const categoryData = {
    'geode-art': {
      title: 'Geode Art',
      description: 'Beautiful crystalline formations in resin',
      items: [
        { id: 1, title: "Amethyst Cave", description: "Purple geode with gold accents", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop", price: "₹245" },
        { id: 2, title: "Ocean Depth", description: "Blue and teal geode formation", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop", price: "₹280" },
        { id: 3, title: "Golden Agate", description: "Warm golden crystalline patterns", image: "https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=400&h=400&fit=crop", price: "₹320" },
        { id: 4, title: "Forest Crystal", description: "Green emerald-like formations", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop", price: "₹290" },
        { id: 5, title: "Rose Quartz Dreams", description: "Soft pink crystalline beauty", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop", price: "₹260" },
        { id: 6, title: "Midnight Sparkle", description: "Dark blue with silver crystals", image: "https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=400&h=400&fit=crop", price: "₹310" },
        { id: 7, title: "Sunset Geode", description: "Orange and red crystalline flow", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop", price: "₹275" },
        { id: 8, title: "Crystal Garden", description: "Multi-colored crystal formation", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop", price: "₹350" }
      ]
    },
    'wall-installations': {
      title: 'Wall Installations',
      description: 'Large scale artistic wall pieces',
      items: [
        { id: 1, title: "Ocean Wave Panel", description: "Large flowing blue installation", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop", price: "₹850" },
        { id: 2, title: "Forest Canopy", description: "Green multi-panel nature piece", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop", price: "₹920" },
        { id: 3, title: "Abstract Flow", description: "Modern geometric wall art", image: "https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=400&h=400&fit=crop", price: "₹750" },
        { id: 4, title: "Cosmic Horizon", description: "Space-themed large installation", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop", price: "₹1100" },
        { id: 5, title: "Golden Waterfall", description: "Metallic flowing wall piece", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop", price: "₹980" },
        { id: 6, title: "Urban Skyline", description: "City-inspired geometric design", image: "https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=400&h=400&fit=crop", price: "₹820" }
      ]
    },
    'resin-mirror': {
      title: 'Resin Mirror',
      description: 'Functional art pieces with mirror elements',
      items: [
        { id: 1, title: "Sunrise Mirror", description: "Golden frame with mirror center", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop", price: "₹450" },
        { id: 2, title: "Ocean Reflection", description: "Blue resin frame mirror", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop", price: "₹420" },
        { id: 3, title: "Forest Edge Mirror", description: "Green and wood resin frame", image: "https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=400&h=400&fit=crop", price: "₹380" },
        { id: 4, title: "Cosmic Portal", description: "Dark blue with stars mirror", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop", price: "₹520" },
        { id: 5, title: "Rose Garden Mirror", description: "Pink and floral resin frame", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop", price: "₹410" }
      ]
    },
    'religion-wall-frames': {
      title: 'Religion Wall Frames',
      description: 'Spiritual and religious themed artwork',
      items: [
        { id: 1, title: "Divine Light", description: "Golden spiritual frame art", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop", price: "₹320" },
        { id: 2, title: "Sacred Lotus", description: "Lotus flower resin art", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop", price: "₹280" },
        { id: 3, title: "Peaceful Buddha", description: "Buddha silhouette in resin", image: "https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=400&h=400&fit=crop", price: "₹350" },
        { id: 4, title: "Om Meditation", description: "Om symbol with flowing resin", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop", price: "₹290" }
      ]
    }
  };

  const category = categoryData[categoryId as keyof typeof categoryData];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Category Not Found</h1>
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
              Back to Collections
            </Link>
          </Button>
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {category.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {category.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {category.items.map((item) => (
            <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">{item.price}</span>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-full">
                      Inquire
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;