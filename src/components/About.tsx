
import React from 'react';
import { Palette, Heart, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About the Artist
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop"
                alt="Artist at work"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">The Art of Resin</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Welcome to my world of resin art! I'm passionate about creating unique, handcrafted pieces that capture the beauty of flowing colors and organic patterns. Each artwork is a one-of-a-kind creation that brings life and vibrancy to any space.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My journey with resin art began three years ago, and since then, I've been mesmerized by the endless possibilities this medium offers. From ocean-inspired pieces to abstract compositions, every creation tells its own story.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I believe art should evoke emotion and create connections. Whether you're looking for a statement piece for your home or a meaningful gift, I'm here to help you find the perfect artwork that speaks to your soul.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
              <Palette className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Unique Creations</h4>
              <p className="text-gray-600">Every piece is handcrafted with love and attention to detail, ensuring no two artworks are alike.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Made with Love</h4>
              <p className="text-gray-600">Each artwork is created with passion and dedication, bringing positive energy to your space.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
              <Star className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2 text-gray-800">Premium Quality</h4>
              <p className="text-gray-600">Using only the finest materials and techniques to ensure lasting beauty and durability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
