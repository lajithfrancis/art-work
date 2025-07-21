
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Sophisticated Natural Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-accent">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary to-elegant rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-elegant to-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-accent to-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      {/* Elegant Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 elegant-text leading-tight">
          Handcrafted Nature-Infused Art
          <span className="block text-3xl md:text-4xl font-normal italic mt-2 text-muted-foreground">
            for those who collect moments, not just things
          </span>
        </h1>
        
        <p className="text-lg md:text-xl mb-2 font-serif italic text-elegant">
          Wild. Beautiful. Unforgettable.
        </p>
        
        <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto text-muted-foreground font-sans">
          The latest pieces to emerge from our studio, inspired by the ever-changing beauty of nature. 
          Discover handcrafted resin art that captures light, emotion, and the essence of natural wonder.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="nature-gradient hover:opacity-90 text-primary-foreground px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 sophisticated-shadow font-sans"
          >
            <a href="#gallery">Shop the Collections</a>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg transition-all duration-300 font-sans"
          >
            <a href="#contact">Contact for Custom Order</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
