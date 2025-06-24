
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const artworks = [
    {
      id: 1,
      title: "Ocean Waves",
      description: "Deep blue resin with white waves",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "$125"
    },
    {
      id: 2,
      title: "Golden Sunset",
      description: "Warm golden and orange tones",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
      price: "$150"
    },
    {
      id: 3,
      title: "Purple Dreams",
      description: "Ethereal purple and silver swirls",
      image: "https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=400&h=400&fit=crop",
      price: "$110"
    },
    {
      id: 4,
      title: "Forest Mist",
      description: "Green and white organic patterns",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      price: "$130"
    },
    {
      id: 5,
      title: "Cosmic Flow",
      description: "Deep space blues with metallic accents",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop",
      price: "$175"
    },
    {
      id: 6,
      title: "Rose Garden",
      description: "Pink and rose gold marble effect",
      image: "https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=400&h=400&fit=crop",
      price: "$140"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each piece is uniquely crafted, capturing the beauty of flowing resin in stunning compositions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <Card key={artwork.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{artwork.title}</h3>
                  <p className="text-gray-600 mb-3">{artwork.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">{artwork.price}</span>
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
    </section>
  );
};

export default Gallery;
