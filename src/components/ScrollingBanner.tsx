import React from 'react';

const ScrollingBanner = () => {
  const keywords = [
    'HANDCRAFTED IN INDIA',
    'NATURE-INSPIRED ART', 
    'REAL FLOWERS',
    'WEARABLE ART',
    'SEASONS CAPTURED IN ART',
    'NATURE\'S ELEGANCE',
    'BOTANICAL TREASURES',
    'RESIN ARTISTRY',
    'PRESERVED BEAUTY',
    'NATURAL WONDER'
  ];

  return (
    <div className="w-full bg-muted py-3 overflow-hidden">
      <div className="animate-scroll whitespace-nowrap">
        {/* Duplicate content for seamless loop */}
        {[...keywords, ...keywords].map((keyword, index) => (
          <span 
            key={index}
            className="inline-block mx-8 text-sm font-sans font-medium text-muted-foreground tracking-wider"
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;