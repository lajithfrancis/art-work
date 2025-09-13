
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();

  const heroSlides = [
    {
      id: 1,
      image: '/geode-art/1.2.jpg',
      title: 'Geode Art Collection',
      subtitle: 'Handcrafted Nature-Infused Art',
      description:
        'Abstract, multi-panel designs featuring metallic and marble-like textures',
      badge: 'Best Seller',
    },
    {
      id: 2,
      image: '/wall-installations/2.2.jpg',
      title: 'Wall Installations',
      subtitle: 'Transform Your Space',
      description:
        'Large scale artistic installations with flowing resin compositions',
      badge: 'Featured',
    },
    {
      id: 3,
      image: '/resin-mirror/3.1.jpg',
      title: 'Resin Mirror',
      subtitle: 'Wild. Beautiful. Unforgettable.',
      description:
        'Breathtaking artwork with rich blends mimicking natural agate formations',
      badge: 'Premium',
    },
    {
      id: 4,
      image: '/religion-wall-frames/4.2.jpg',
      title: 'Religion Wall Frames',
      subtitle: 'Functional Art Pieces',
      description:
        'Beautiful resin work combined with high-quality mirror elements',
      badge: 'New',
    },
    {
      id: 5,
      image: '/resin-clock/2.5.jpg',
      title: 'Resin Clocks',
      subtitle: 'Colorful and Dynamic',
      description:
        'Abstract art pieces that also serve as functional timepieces',
      badge: 'Popular',
    },
    {
      id: 6,
      image: '/resin-key-chains/3.4.jpg',
      title: 'Resin Key Chains',
      subtitle: 'Small but Impactful',
      description:
        'Vibrant, customizable key chains made with intricate resin designs',
      badge: 'Compact Art',
    },
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
