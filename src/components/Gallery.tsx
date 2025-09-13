import { ProductListing } from './ProductListing';

const Gallery = () => {
  return (
    <section id='gallery' className='py-20 bg-secondary/30'>
      <div className='text-center mb-16'>
        ̦
        <h2 className='text-4xl md:text-5xl font-serif font-bold mb-4 elegant-text'>
          Fresh from the Studio
        </h2>
        <p className='text-lg text-muted-foreground max-w-3xl mx-auto font-sans'>
          The latest pieces to emerge from our studio, inspired by the
          ever-changing beauty of nature.
        </p>
      </div>

      <ProductListing title='Wall Accents / Decors' products={productsA} />
      <ProductListing title='Resin Clock' products={productsB} />
      <ProductListing title='Resin Key Chains' products={productsC} />
      <ProductListing title='Resin Frames' products={productsD} />

      {/* You can add more product listings here */}
      {/* <ProductListing title="New Arrivals" products={newArrivals} /> */}
      {/* <ProductListing title="Best Sellers" products={bestSellers} /> */}
    </section>
  );
};
export default Gallery;

const productsA = [
  {
    id: 'geode-art',
    title: 'Geode Art',
    description: 'Beautiful crystalline formations in resin',
    // image:
    //   'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    image: '/geode-art/1.1.jpg',
    defaultSize: 'Medium (12x16 inches)',
    startingPrice: '₹6500',
  },
  {
    id: 'wall-installations',
    title: 'Wall Installations',
    description: 'Large scale artistic wall pieces',
    // image:
    //   'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop',
    image: '/wall-installations/2.1.jpg',
    defaultSize: 'Large (24x36 inches)',
    startingPrice: '₹7500',
  },
  {
    id: 'resin-mirror',
    title: 'Resin Mirror',
    description: 'Functional art pieces with mirror elements',
    // image:
    //   'https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=400&h=400&fit=crop',
    image: '/resin-mirror/3.1.jpg',
    defaultSize: 'Round (18 inches)',
    startingPrice: '₹6500',
  },
  {
    id: 'religion-wall-frames',
    title: 'Religion Wall Frames',
    description: 'Spiritual and religious themed artwork',
    // image:
    //   'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    image: '/religion-wall-frames/4.1.jpg',
    defaultSize: 'Standard (16x20 inches)',
    startingPrice: '₹2500',
  },
];

const productsB = [
  {
    id: 'resin-clock',
    title: 'Resin Clock',
    description: 'Colorful and dynamic abstract art pieces',
    image: '/resin-clock/2.1.jpg',
    defaultSize: `26 " x 24 " ( Customizable)`,
    startingPrice: '₹1500',
  },
];

const productsC = [
  {
    id: 'resin-key-chains',
    title: 'Resin Key Chains',
    description: 'Colorful and dynamic abstract art pieces',
    image: '/resin-key-chains/3.1.jpg',
    defaultSize: `2.5 " x 1.5 " (Customizable)`,
    startingPrice: '₹150',
  },
];

const productsD = [
  {
    id: 'baby-keepsake-frame',
    title: 'Baby Keepsake Frame',
    description: 'Customized resin frame commemorating the birth of a baby',
    image: 'resin-frames/baby-keepsake-frame/7.1.jpeg',
    defaultSize: `8" Dia ( Customizable)`,
    startingPrice: '₹1800',
  },
  {
    id: 'wedding-flower-preservation',
    title: 'Wedding Flower Preservation',
    description: 'Colorful and dynamic abstract art pieces',
    image: 'resin-frames/wedding-flower-preservation/8.1.jpg',
    defaultSize: `8" x 8" x 1" ( Customizable)`,
    startingPrice: '₹1800',
  },
  {
    id: 'anniversary-frame',
    title: 'Anniversary Frame',
    description: 'Customized resin frame commemorating a wedding anniversary',
    image: 'resin-frames/anniversary-frame/10.1.jpg',
    defaultSize: `24 " x 24" (Customizable)`,
    startingPrice: '₹5800',
  },
];
