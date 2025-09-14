
import React from 'react';
import { Palette, Heart, Star } from 'lucide-react';
import { getAssetPath } from '@/utils/assetPath';

const About = () => {
  return (
    <section id='about' className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-serif font-bold mb-4 elegant-text'>
              Meet the Artist
            </h2>
            <div className='w-24 h-1 nature-gradient mx-auto mb-8'></div>
          </div>

          <div className='grid md:grid-cols-2 gap-12 items-center mb-16'>
            <div>
              <img
                src={getAssetPath('/artist/artist.jpg')}
                alt='Artist at work'
                className='rounded-lg shadow-lg w-full h-[650px] object-cover'
              />
            </div>
            <div>
              <h3 className='text-2xl font-serif font-bold mb-4 text-foreground'>
                Nature Preserved in Art
              </h3>
              <p className='text-muted-foreground mb-6 leading-relaxed font-sans'>
                I create resin artworks that are inspired by the beauty and
                rhythm of nature. The flow of the ocean, the calm of the sky,
                the textures of earth—all of these guide my hand as I work with
                resin to capture movement, light, and emotion in every piece.
              </p>
              <p className='text-muted-foreground mb-6 leading-relaxed font-sans'>
                Alongside expressive abstracts, I also create memorial and
                preservation artworks that hold onto cherished memories. Whether
                it’s preserving flowers from a special day or creating a piece
                in remembrance of a loved one, I see my art as a way of honoring
                life’s most meaningful moments and giving them a lasting form.
              </p>
              <p className='text-muted-foreground leading-relaxed font-sans'>
                For me, resin is more than a medium—it’s a way to connect with
                people, to turn fleeting feelings into something permanent, and
                to create art that speaks both to the heart and to the space it
                belongs in.
              </p>
            </div>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center p-6 bg-secondary/50 rounded-lg sophisticated-shadow'>
              <Palette className='w-12 h-12 text-primary mx-auto mb-4' />
              <h4 className='text-xl font-serif font-semibold mb-2 text-foreground'>
                Nature-Inspired
              </h4>
              <p className='text-muted-foreground font-sans'>
                Every piece incorporates real botanical elements, creating
                unique connections to the natural world.
              </p>
            </div>
            <div className='text-center p-6 bg-accent/50 rounded-lg sophisticated-shadow'>
              <Heart className='w-12 h-12 text-elegant mx-auto mb-4' />
              <h4 className='text-xl font-serif font-semibold mb-2 text-foreground'>
                Handcrafted with Intent
              </h4>
              <p className='text-muted-foreground font-sans'>
                Each artwork is thoughtfully created to preserve meaningful
                moments and natural beauty.
              </p>
            </div>
            <div className='text-center p-6 bg-muted/50 rounded-lg sophisticated-shadow'>
              <Star className='w-12 h-12 text-primary mx-auto mb-4' />
              <h4 className='text-xl font-serif font-semibold mb-2 text-foreground'>
                Timeless Quality
              </h4>
              <p className='text-muted-foreground font-sans'>
                Using archival-quality materials to ensure your piece remains
                beautiful for generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
