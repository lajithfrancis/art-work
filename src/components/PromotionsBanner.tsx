import React from 'react';

const PromotionsBanner = () => {
  return (
    <div className='w-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white py-2 overflow-hidden shadow-lg relative mt-20'>
      <div className='text-center relative z-10'>
        <span className='text-xs md:text-sm font-sans font-bold tracking-wide animate-pulse'>
          🚚 FREE SHIPPING ON ORDERS OVER ₹5000 • 🇮🇳 HANDMADE IN INDIA • 🌿
          NATURE-INSPIRED ART
        </span>
      </div>
      {/* Animated background effect */}
      <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer'></div>
    </div>
  );
};

export default PromotionsBanner;