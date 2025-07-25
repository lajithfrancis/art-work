export type ProductSize = {
  id: string;
  name: string;
  price: string;
  popular: boolean;
  description: string;
  image: string;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  sizes: ProductSize[];
};

export const products: Record<string, Product> = {
  'geode-art': {
    id: 'geode-art',
    title: 'Geode Art',
    description: 'Resin coated on 10 mm MDF board featuring abstract, multi-panel designs with metallic and marble-like textures',
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    sizes: [
      { 
        id: 'small', 
        name: '24" x 24" (Customizable)', 
        price: '₹800', 
        popular: false,
        description: 'Abstract, multi-panel design featuring a mix of metallic and marble-like textures with swirling patterns of silver, gray, and black, accented by gold embellishments. The central portion has a clustered gold texture, giving it a geode-inspired look.',
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop"
      },
      { 
        id: 'medium', 
        name: '60" x 24" (Customizable)', 
        price: '₹9200', 
        popular: true,
        description: 'Stunning geode-inspired design with vibrant shades of blue, turquoise, and white, creating a mesmerizing natural stone effect. The edges are accentuated with gold detailing, adding a luxurious touch with intricate layering and texture.',
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop"
      },
      { 
        id: 'large', 
        name: '30" x 16" (Customizable)', 
        price: '₹7500', 
        popular: false,
        description: 'Striking geode-inspired art piece with rich, dark color palette featuring shades of deep brown, black, and shimmering metallic accents. The organic, irregular shape mimics natural formation with crystal-like embellishments.',
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop&sat=-100"
      },
      { 
        id: 'xlarge', 
        name: '32" x 20" (Customizable)', 
        price: '₹8000', 
        popular: false,
        description: 'Breathtaking geode-inspired artwork with rich blend of deep emerald green, teal, and white, mimicking natural layers of an agate slice. Textured gold finish enhances its organic, raw mineral appearance with mesmerizing depth.',
        image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop"
      },
      { 
        id: 'premium', 
        name: '60" x 24" Premium (Customizable)', 
        price: '₹9200', 
        popular: false,
        description: 'Sophisticated, nature-inspired design with warm, earthy tones of beige, cream, and gold. The layered, abstract pattern mimics organic flow of natural stone with luxurious appeal and elegant refined look.',
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&hue=30"
      }
    ]
  },
  'wall-installations': {
    id: 'wall-installations',
    title: 'Wall Installations',
    description: 'Large scale artistic installations designed to transform your space with flowing resin compositions',
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop",
    sizes: [
      { 
        id: 'large', 
        name: '36" x 48" Ocean Flow', 
        price: '₹12500', 
        popular: false,
        description: 'Massive ocean-inspired installation with deep blues and whites creating wave-like patterns. Multi-panel design with metallic silver accents that catch and reflect light beautifully.',
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=600&fit=crop"
      },
      { 
        id: 'xlarge', 
        name: '48" x 60" Forest Canopy', 
        price: '₹15800', 
        popular: true,
        description: 'Grand forest-themed installation featuring rich greens, browns, and gold veining. The organic flow mimics tree canopies with intricate texturing and dimensional depth.',
        image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop&hue=120"
      },
      { 
        id: 'xxlarge', 
        name: '60" x 72" Cosmic Horizon', 
        price: '₹18900', 
        popular: false,
        description: 'Spectacular space-inspired installation with deep purples, blacks, and metallic stars. Creates an otherworldly atmosphere with flowing nebula-like patterns and shimmering accents.',
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop&hue=270"
      },
      { 
        id: 'custom', 
        name: 'Custom Size Installation', 
        price: 'Quote', 
        popular: false,
        description: 'Bespoke wall installation tailored to your space requirements. Choose your own color palette, size, and design elements for a truly unique artistic statement.',
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&blur=2"
      }
    ]
  },
  'resin-mirror': {
    id: 'resin-mirror',
    title: 'Resin Mirror',
    description: 'Functional art pieces combining beautiful resin work with high-quality mirror elements',
    image: "https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=600&h=600&fit=crop",
    sizes: [
      { 
        id: 'small', 
        name: '18" Round Sunrise Mirror', 
        price: '₹4200', 
        popular: false,
        description: 'Elegant round mirror with warm golden resin frame featuring sunrise-inspired gradients. The flowing patterns create a natural sunburst effect around the mirror surface.',
        image: "https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=600&h=600&fit=crop&hue=30"
      },
      { 
        id: 'medium', 
        name: '24" Round Ocean Mirror', 
        price: '₹5800', 
        popular: true,
        description: 'Stunning round mirror with ocean-inspired blue and teal resin frame. Wave-like patterns with white foam effects and gold accents create a coastal luxury feel.',
        image: "https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=600&h=600&fit=crop&hue=200"
      },
      { 
        id: 'large', 
        name: '30" Round Forest Mirror', 
        price: '₹7200', 
        popular: false,
        description: 'Large round mirror with forest-themed green resin frame. Rich emerald and jade tones with gold veining create an organic, natural appearance perfect for nature lovers.',
        image: "https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=600&h=600&fit=crop&hue=120"
      },
      { 
        id: 'rectangular', 
        name: '24" x 36" Geode Mirror', 
        price: '₹8500', 
        popular: false,
        description: 'Rectangular mirror with dramatic geode-inspired resin frame. Features crystalline formations, metallic accents, and natural stone patterns that frame your reflection beautifully.',
        image: "https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=600&h=600&fit=crop"
      }
    ]
  },
  'religion-wall-frames': {
    id: 'religion-wall-frames',
    title: 'Religion Wall Frames',
    description: 'Spiritual and religious themed artwork with sacred symbolism in beautiful resin compositions',
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    sizes: [
      { 
        id: 'small', 
        name: '16" x 20" Sacred Lotus', 
        price: '₹3200', 
        popular: false,
        description: 'Beautiful lotus-themed resin art with soft pinks, whites, and gold accents. The flowing petals create a serene meditation focal point with spiritual symbolism.',
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&hue=320"
      },
      { 
        id: 'medium', 
        name: '20" x 24" Divine Light', 
        price: '₹4200', 
        popular: true,
        description: 'Radiant spiritual artwork featuring golden rays and divine light effects. The resin work creates depth and luminosity that evokes feelings of peace and transcendence.',
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&hue=50"
      },
      { 
        id: 'large', 
        name: '24" x 30" Om Meditation', 
        price: '₹5800', 
        popular: false,
        description: 'Powerful Om symbol rendered in flowing resin with deep blues, purples, and gold. The sacred geometry creates a perfect meditation piece with spiritual energy.',
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&hue=240"
      },
      { 
        id: 'premium', 
        name: '20" x 24" LED Buddha Serenity', 
        price: '₹6500', 
        popular: false,
        description: 'Premium Buddha silhouette with integrated LED lighting. The backlit resin creates a gentle glow through peaceful blues and whites, perfect for meditation spaces.',
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&brightness=20"
      }
    ]
  }
};