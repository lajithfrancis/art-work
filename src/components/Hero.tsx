
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();

  const heroSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop",
      title: "Geode Art Collection",
      subtitle: "Handcrafted Nature-Infused Art",
      description: "Abstract, multi-panel designs featuring metallic and marble-like textures",
      badge: "Best Seller"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1920&h=1080&fit=crop",
      title: "Wall Installations",
      subtitle: "Transform Your Space",
      description: "Large scale artistic installations with flowing resin compositions",
      badge: "Featured"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1920&h=1080&fit=crop",
      title: "Premium Resin Art",
      subtitle: "Wild. Beautiful. Unforgettable.",
      description: "Breathtaking artwork with rich blends mimicking natural agate formations",
      badge: "Premium"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=1920&h=1080&fit=crop",
      title: "Resin Mirrors",
      subtitle: "Functional Art Pieces",
      description: "Beautiful resin work combined with high-quality mirror elements",
      badge: "New"
    }
  ];

  useEffect(() => {
    if (!api) return;

    const autoPlay = setInterval(() => {
      api.scrollNext();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(autoPlay);
  }, [api]);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <Carousel setApi={setApi} className="w-full h-screen" opts={{ loop: true }}>
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id} className="relative min-h-screen">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center px-4 max-w-4xl mx-auto text-white">
                  <Badge className="mb-4 bg-elegant text-elegant-foreground">
                    {slide.badge}
                  </Badge>
                  
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  
                  <p className="text-xl md:text-2xl mb-2 font-serif italic text-elegant-foreground">
                    {slide.subtitle}
                  </p>
                  
                  <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto text-white/90 font-sans">
                    {slide.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="nature-gradient hover:opacity-90 text-primary-foreground px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 sophisticated-shadow font-sans"
                    >
                      <a href="#gallery">Shop Collection</a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg transition-all duration-300 font-sans bg-white/10 backdrop-blur-sm"
                    >
                      <a href="#contact">Custom Order</a>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
        <CarouselNext className="right-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
      </Carousel>
    </section>
  );
};

export default Hero;
