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
    description:
      'Resin coated on 10 mm MDF board featuring abstract, multi-panel designs with metallic and marble-like textures',
    // image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    image: '/geode-art/1.1.jpg',
    sizes: [
      {
        id: 'small',
        name: '24" x 24" (Customizable)',
        price: '₹5800',
        popular: false,
        description:
          'Resin coated  on 10 mm MDF board in the image appears to be an abstract, multi-panel design featuring a mix of metallic and marble-like textures. It has a luxurious and artistic feel, with swirling patterns of silver, gray, and black, accented by gold embellishments that add a touch of opulence. The central portion has a clustered gold texture, giving it a geode-inspired look. The resin finish enhances the depth and shine, making the piece stand out as an elegant and modern decorative element.',
        // image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop"
        image: '/geode-art/1.1.jpg',
      },
      {
        id: 'medium',
        name: '60" x 24" (Customizable)',
        price: '₹9200',
        popular: true,
        description:
          'This resin frame features a stunning geode-inspired design with vibrant shades of blue, turquoise, and white, creating a mesmerizing natural stone effect. The edges are accentuated with gold detailing, adding a luxurious touch that enhances the organic, fluid shapes within the piece. The resin finish provides a glossy, high-shine effect, making the colors appear rich and dynamic. The intricate layering and texture mimic the beauty of agate or crystal formations, making this frame a bold and elegant statement piece for any space',
        // image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop"
        image: '/geode-art/1.2.jpg',
      },
      {
        id: 'large',
        name: '30" x 16" (Customizable)',
        price: '₹7500',
        popular: false,
        description:
          'This resin frame is a striking geode-inspired art piece with a rich, dark color palette featuring shades of deep brown, black, and shimmering metallic accents. The organic, irregular shape mimics the natural formation of a sliced geode, with intricate layers enhanced by gold detailing along the edges. The central portion is adorned with sparkling crystal-like embellishments, creating a dramatic contrast against the darker tones. The glossy resin finish amplifies the depth and brilliance of the design, making this frame an elegant and luxurious statement piece.',
        // image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop&sat=-100"
        image: '/geode-art/1.3.jpg',
      },
      {
        id: 'xlarge',
        name: '32" x 20" (Customizable)',
        price: '₹8000',
        popular: false,
        description:
          'This resin frame is a breathtaking geode-inspired artwork with a rich blend of deep emerald green, teal, and white, mimicking the natural layers of an agate slice. The outer edges are adorned with a textured gold finish, enhancing its organic, raw mineral appearance. Intricate swirling patterns and shimmering crystal-like accents create a mesmerizing depth, making the piece feel luxurious and dynamic. The central hollow area adds an authentic geode effect, and the glossy resin finish amplifies the vibrancy and texture. This frame is a stunning statement piece, perfect for adding elegance and nature-inspired beauty to any space.',
        // image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop"
        image: '/geode-art/1.4.jpg',
      },
      {
        id: 'premium',
        name: '60" x 24" Premium (Customizable)',
        price: '₹9200',
        popular: false,
        description:
          'This resin frame features a sophisticated, nature-inspired design with warm, earthy tones of beige, cream, and gold. The layered, abstract pattern mimics the organic flow of natural stone or agate, creating a visually stunning depth. The textured gold accents along the edges enhance its luxurious appeal, resembling mineral formations. The multi-panel arrangement adds a modern and dynamic touch, making it a statement piece. The glossy resin finish amplifies the richness of the colors and textures, giving the artwork an elegant and refined look. Perfect for adding warmth and elegance to any space.',
        // image:
        //   'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&hue=30',
        image: '/geode-art/1.5.jpg',
      },
    ],
  },
  'wall-installations': {
    id: 'wall-installations',
    title: 'Wall Installations',
    description:
      'Large scale artistic installations designed to transform your space with flowing resin compositions',
    image: '/wall-installations/2.1.jpg',
    // image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop",
    sizes: [
      {
        id: 'large',
        name: '24 " ,18" , 12" dia(Customizable)',
        price: '₹9800',
        popular: false,
        description:
          'These resin frames consist of a set of three circular, geode-inspired designs in neutral tones of beige, white, black, and gold. The swirling, layered patterns mimic natural agate or marble, with flowing lines and metallic gold accents adding a luxurious touch. Each piece has embedded textures resembling mineral formations, creating a visually dynamic and organic effect. The high-gloss resin finish enhances depth and elegance, making these frames a sophisticated decorative addition to any space. Their modern yet earthy aesthetic makes them versatile for various interior styles.',
        // image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=600&fit=crop"
        image: '/wall-installations/2.1.jpg',
      },
      {
        id: 'xlarge',
        name: '24 " dia(Customizable)',
        price: '₹7500',
        popular: true,
        description:
          'This circular resin frame features a striking contrast between two distinct textures and finishes. One half of the frame has a raw, concrete-like surface with a matte gray finish, giving it an industrial and minimalist feel. The other half is covered in a richly textured, crumpled fabric-like design, coated in metallic gold, creating a luxurious and dramatic effect. The fusion of these two elements—rough and smooth, matte and metallic—adds depth and sophistication, making this piece a bold statement for modern and contemporary interiors.',
        // image:
        //   'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=600&fit=crop&hue=120',
        image: '/wall-installations/2.2.jpg',
      },
      {
        id: 'xxlarge',
        name: '16" , 14" , 12" dia(Customizable)',
        price: '₹8500',
        popular: false,
        description:
          'This resin frame features an organic and nature-inspired design, resembling delicate lily pads or sea coral formations. The set includes three irregularly shaped pieces in a soft, translucent green hue with intricate radial patterns that mimic natural textures. The glossy, almost glass-like resin finish enhances the depth and elegance of the design. The fluid, wavy edges give it a handcrafted, artistic feel, making it a perfect decorative piece for modern, botanical, or coastal-themed interiors.',
        // image:
        //   'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop&hue=270',
        image: '/wall-installations/2.3.jpg',
      },
      {
        id: 'custom',
        name: '24 " ,18" , 12" dia(Customizable)',
        price: '₹8500',
        popular: false,
        description:
          'This resin frame set features a modern, abstract design with a striking contrast between deep black and sculpted white fabric-like textures. The circular frames have portions covered with a draped, wrinkled effect, resembling fabric frozen in motion. The white, sculptural elements stand out dramatically against the black background, creating a visually dynamic and elegant composition. The overall aesthetic is contemporary and minimalist, making it a perfect statement piece for modern interiors.',
        // image:
        //   'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&blur=2',
        image: '/wall-installations/2.4.jpg',
      },
      {
        id: 'custom1',
        name: '32" x 20"(Customizable)',
        price: '₹8000',
        popular: false,
        description:
          'The image showcases a striking abstract wall art installation mounted on a dark wall. The artwork consists of multiple irregularly shaped resin pieces arranged in a dynamic, flowing pattern. The pieces feature a mix of blue, green, yellow, and hints of white, creating a marbled or oceanic effect. The design gives the impression of movement, resembling flames, waves, or organic growth. The glossy, textured finish of the resin enhances the depth and visual appeal of the artwork. This piece serves as a bold and contemporary statement, ideal for modern interior decor.',
        // image:
        //   'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&blur=2',
        image: '/wall-installations/2.5.jpg',
      },
    ],
  },
  'resin-mirror': {
    id: 'resin-mirror',
    title: 'Resin Mirror',
    description:
      'Functional art pieces combining beautiful resin work with high-quality mirror elements',
    // image:
    //   'https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=600&h=600&fit=crop',
    image: '/resin-mirror/3.1.jpg',
    sizes: [
      {
        id: 'small',
        name: '24 " dia(Customizable)',
        price: '₹6500',
        popular: false,
        description:
          'The resin mirror in the image is a stunning, handcrafted piece with a geode-inspired design. It has a circular shape with a unique, textured border made of resin, mimicking the crystalline structure of natural geodes. The border features a blend of silver, white, and gray tones, with shimmering embedded elements that resemble crushed crystals or glitter. The irregular, wavy edge gives it an organic and artistic look.',
        // image:
        //   'https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=600&h=600&fit=crop&hue=30',
        image: '/resin-mirror/3.1.jpg',
      },
      {
        id: 'medium',
        name: '32" x 20"(Customizable)',
        price: '₹9000',
        popular: true,
        description:
          'The resin mirror in the image has an organic, irregular shape with a design that resembles agate or geode formations. The border is crafted with layers of white, beige, and gray resin swirls, mimicking natural stone patterns. Some sections of the frame incorporate glittering, crystal-like accents that add a touch of luxury and depth. The mirror itself is embedded within this artistic resin frame, creating a unique and elegant decor piece. The overall aesthetic is modern and nature-inspired, making it a statement piece for any interior space',
        // image:
        //   'https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=600&h=600&fit=crop&hue=200',
        image: '/resin-mirror/3.2.jpg',
      },
      {
        id: 'large',
        name: '26 " dia(Customizable)',
        price: '₹7500',
        popular: false,
        description:
          'The resin mirror in this image has a circular design with an irregular, wavy-edged frame. The frame is predominantly black with gold accents, creating a luxurious and dramatic aesthetic. The gold details appear to be embedded within the resin, resembling natural mineral or geode formations. The mirror itself is simple and round, contrasting with the textured and artistic border. This piece has a bold, elegant style, making it a striking accent for sophisticated interiors.',
        // image:
        //   'https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=600&h=600&fit=crop&hue=120',
        image: '/resin-mirror/3.3.jpg',
      },
      {
        id: 'rectangular',
        name: '48 " x 24" (Customizable)',
        price: '₹10000',
        popular: false,
        description: `This resin mirror has a rectangular shape with an artistic, irregularly edged frame. The frame features a mix of white, beige, and gold resin layers, creating a luxurious, geode-inspired aesthetic. The gold accents add a shimmering, high-end touch, enhancing the mirror's elegance. The organic flow of the resin design gives it a handcrafted and unique appeal, making it a stylish statement piece for sophisticated interiors. The mirror is placed against a white wall, complementing its refined look.`,
        // image:
        //   'https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=600&h=600&fit=crop',
        image: '/resin-mirror/3.4.jpg',
      },
      {
        id: 'custom',
        name: '24 " dia(Customizable)',
        price: '₹6500',
        popular: false,
        description:
          'This resin mirror has a circular shape with a partially decorated frame. The design features a geode-inspired aesthetic with blue, white, and gray resin layers, creating a natural, stone-like appearance. The edges of the decorated section include shimmering crystal-like accents, adding a touch of elegance and luxury. The contrast between the smooth mirror surface and the textured resin border enhances its artistic appeal. This piece would be a stunning addition to modern or contemporary interiors, offering a sophisticated and unique look.',
        // image:
        //   'https://images.unsplash.com/photo-1578662015358-4c8d6e2a2c0a?w=600&h=600&fit=crop',
        image: '/resin-mirror/3.5.jpg',
      },
    ],
  },
  'religion-wall-frames': {
    id: 'religion-wall-frames',
    title: 'Religion Wall Frames',
    description:
      'Spiritual and religious themed artwork with sacred symbolism in beautiful resin compositions',
    // image:
    //   'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop',
    image: '/religion-wall-frames/4.1.jpg',
    sizes: [
      {
        id: 'small',
        name: '24 " x 24 "(Customizable)',
        price: '₹5000',
        popular: false,
        description:
          'This resin artwork features a stunning geode-inspired design with deep emerald, black, and gold tones, accented by shimmering white and gold crystal embellishments. The fluid, marbled resin swirls create an elegant and organic look, resembling natural agate formations. The piece is further enhanced with Arabic calligraphy in gold, adding a spiritual and artistic touch. The combination of rich colors, metallic details, and crystalline textures makes this a luxurious and meaningful decorative piece, ideal for modern or contemporary interiors.',
        // image:
        //   'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&hue=320',
        image: '/religion-wall-frames/4.1.jpg',
      },
      {
        id: 'medium',
        name: '48" x 24"(Customizable)',
        price: '₹10000',
        popular: true,
        description:
          'This resin artwork features a luxurious deep green background with marbled patterns resembling natural malachite stone. Gold accents and veining flow through the design, adding richness and elegance. The centerpiece is an ornate circular Arabic calligraphy design in gold, surrounded by sparkling crystal embellishments. The intricate combination of colors, textures, and materials creates a high-end, spiritual, and artistic piece, perfect for modern and classic interiors.',
        // image:
        //   'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&hue=50',
        image: '/religion-wall-frames/4.2.jpg',
      },
      {
        id: 'large',
        name: '40" x 20"(Customizable)',
        price: '₹7500',
        popular: false,
        description: `This resin artwork is a beautifully crafted spiritual piece featuring a Jain mantra written in elegant script. The background has a soft gradient of earthy tones, giving it a serene and calming effect. The artwork is bordered with gold, adding a touch of luxury and depth.
At the top, there is an intricate cut-out of a meditating figure under a tree, symbolizing enlightenment and inner peace. The presence of gold leaf detailing and delicate botanical motifs on the sides further enhances its aesthetic appeal. This piece would be perfect for spiritual or meditative spaces, blending tradition with modern resin art techniques.`,
        // image:
        //   'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&hue=240',
        image: '/religion-wall-frames/4.3.jpg',
      },
      {
        id: 'premium',
        name: '12" x 12" ( Customizable)',
        price: '₹2500',
        popular: false,
        description:
          'This resin artwork features a pair of angel wings made of golden crushed glass, giving it a striking and textured 3D effect. The soft blue background creates a celestial feel, complementing the gold elements beautifully. Above the wings, a delicate golden halo is placed, adding a divine touch.',
        // image:
        //   'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&brightness=20',
        image: '/religion-wall-frames/4.4.jpg',
      },
      {
        id: 'custom',
        name: '12" x 12" ( Customizable)',
        price: '₹3000',
        popular: false,
        description:
          'This is a beautiful handcrafted resin cross embedded with real dried flowers and ferns. The clear resin creates a stunning effect, allowing the vibrant pink, white, blue, and orange flowers to shine through naturally. The design gives a sense of peace and spirituality, making it a perfect decorative piece or a meaningful gift. The background of greenery enhances the organic and nature-inspired aesthetic of the artwork.',
        // image:
        //   'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop&brightness=20',
        image: '/religion-wall-frames/4.5.jpg',
      },
    ],
  },
  'resin-clock': {
    id: 'resin-clock',
    title: 'Resin Clock',
    description:
      'Functional art pieces combining beautiful resin work with high-quality clock mechanisms',
    image: '/resin-clock/5.1.jpg',
    sizes: [
      {
        id: 'standard',
        name: `26 " x 24 " ( Customizable)`,
        price: '₹4800',
        popular: false,
        description:
          'This is a stunning handcrafted resin clock with an elegant, organic shape. The clock face features a luxurious blend of white and gold hues, resembling marble or agate stone, with Roman numerals adding a classic touch. The intricate border is adorned with shimmering crystals, pearls, and metallic accents, giving it a glamorous and sophisticated look. This piece would make a perfect statement decor item for a modern or luxurious interior.',
        image: '/resin-clock/2.1.jpg',
      },
      {
        id: 'small',
        name: `10" x 10" ( Customizable)`,
        price: '₹1500',
        popular: true,
        description:
          'This is a beautiful handcrafted resin clock with a delicate, nature-inspired design. The clock face features preserved flowers and leaves embedded in a soft, translucent resin base with gold accents. The organic, scalloped edges give it a handmade, artisanal feel. The gold and white numbering and elegant clock hands add a vintage charm. This piece would make a lovely decorative accent for a cozy or bohemian-style space.',
        image: '/resin-clock/2.2.jpg',
      },
      {
        id: 'premium',
        name: `24 " x 24 " (Customizable)`,
        price: '₹4000',
        popular: false,
        description:
          'This is a stunning, handcrafted resin clock with a rich emerald green color, resembling malachite stone. The deep green swirls on the clock face create an elegant, luxurious aesthetic. The Roman numeral frame in gold adds a vintage and sophisticated touch, complementing the gemstone-like textured border. This piece blends artistry with functionality and would make a striking statement in a modern or classic interior.',
        image: '/resin-clock/2.3.jpg',
      },
      {
        id: 'custom',
        name: `24 " x 24 " (Customizable)`,
        price: '₹4000',
        popular: false,
        description:
          'The image shows a modern and artistic wall clock with a unique resin design. The clock face appears to depict an abstract ocean or volcanic landscape, featuring black, white, and gold tones. The upper part has a glossy, reflective surface with a blue sky and tree branches reflecting on it. The lower portion has a textured, blackened area resembling burnt or volcanic rock, transitioning into white, smoky waves. The clock hands are gold, and the hour markers are minimalist gold bars.',
        image: '/resin-clock/2.4.jpg',
      },
      {
        id: 'custom1',
        name: `24 " x 24 " (Customizable)`,
        price: '₹3500',
        popular: false,
        description:
          'The image shows a beautifully designed wall clock with a resin art finish, creating a stunning ocean-inspired scene. The clock face features deep blue waves with white foamy crests transitioning into a sandy beach with small stones and shells embedded for texture. The glossy surface reflects light, creating a dynamic look. Gold-colored minimalist hour markers and hands complement the aesthetic.',
        image: '/resin-clock/2.5.jpg',
      },
    ],
  },
  'resin-key-chains': {
    id: 'resin-key-chains',
    title: 'Resin Key Chains',
    description: 'Colorful and dynamic abstract art pieces',
    image: '/resin-key-chains/3.1.jpg',
    sizes: [
      {
        id: 'standard',
        name: `2.5 " x 1.5 " (Customizable)`,
        price: '₹200',
        popular: false,
        description:
          'The image shows a beautifully crafted resin keychain. The keychain consists of a rectangular pendant with a black and gold design, featuring the phrase "expect miracles" written in elegant gold script. The bottom of the pendant contains embedded gold flakes, adding a luxurious touch. Attached to the keyring are additional decorative resin charms, including one with a gold key and another with a small tree design, both maintaining the black and gold theme.',
        image: '/resin-key-chains/3.1.jpg',
      },
      {
        id: 'small',
        name: `2.5 " x 1.5 " (Customizable)`,
        price: '₹150',
        popular: false,
        description:
          'resin keychains shaped as letters, each featuring a combination of black, white, and gold tones. The designs incorporate embedded gold flakes, giving them an elegant and luxurious appearance. The keychains are attached to gold rings, complementing the overall aesthetic. The letters appear to be partially translucent, with a gradient effect blending from black to clear resin with gold accents.',
        image: '/resin-key-chains/3.2.jpg',
      },
      {
        id: 'extra-small',
        name: `2" round ( Customizable)`,
        price: '₹100',
        popular: false,
        description:
          'Custom photo keychain featuring a printed picture of a family inside a resin casing. The keychain is attached to a metal ring and clasp, allowing it to be easily connected to keys or bags.',
        image: '/resin-key-chains/3.3.jpg',
      },
      {
        id: 'small',
        name: `2" round ( Customizable)`,
        price: '₹150',
        popular: false,
        description:
          'This image showcases personalized resin keychains with gold flakes and elegant printed text. Each keychain features names, dates, and special occasions such as weddings and birthdays. The circular designs, paired with gold key rings, create a sophisticated and meaningful keepsake.',
        image: '/resin-key-chains/3.4.jpg',
      },
      {
        id: 'small',
        name: `2.5 " x 1.5 " (Customizable)`,
        price: '₹150',
        popular: false,
        description:
          'This keychain features a beautifully crafted resin design with an ocean-inspired theme. The deep blue resin mimics waves crashing onto a sandy shore, complete with real sand, small shells, and white accents resembling seafoam. The word "Trust" is elegantly inscribed on the surface, adding a meaningful touch. The piece is attached to a silver chain, making it a stylish and symbolic accessory. This type of keychain is likely handcrafted, making it a unique and personalized item.',
        image: '/resin-key-chains/3.5.jpg',
      },
    ],
  },
  'baby-keepsake-frame': {
    id: 'baby-keepsake-frame',
    title: 'Baby Keepsake Frame',
    description:
      'Personalized resin frames to commemorate the birth of a baby with beautiful designs and embedded keepsakes',
    image: '/resin-frames/7) Baby Keepsake Frame/7.1.jpeg',
    sizes: [
      {
        id: 'standard',
        name: `8" Dia 10" Dia 12" Dia ( Customizable)`,
        price: `
₹1800 /
₹2200 /
₹2600
(As per size)`,
        popular: false,
        description:
          'This is a customized resin frame commemorating the birth of a baby. It features the  birth details, photos, hospital tags, and decorative elements. A touching resin  keepsake  frame  celebrating the baby  arrival.',
        image: '/resin-frames/7) Baby Keepsake Frame/7.1.jpeg',
      },
      {
        id: 'large',
        name: `14" Dia 16" Dia 24" Dia ( Customizable)`,
        price: `
₹2800 /
₹3200 /
₹6500
(As per size)`,
        popular: false,
        description:
          'This is a customized resin frame commemorating the birth of a baby. It features the  birth details, photos, hospital tags, and decorative elements. A touching resin  keepsake  frame  celebrating the baby  arrival.',
        image: '/resin-frames/7) Baby Keepsake Frame/7.2.jpeg',
      },
      {
        id: 'standard1',
        name: `8" Dia 10" Dia 12" Dia ( Customizable)`,
        price: `
₹1800 /
₹2200 /
₹2600
(As per size)`,
        popular: false,
        description:
          'The frame has a charming and vibrant look with a glossy, ocean-themed design. The wavy edges, shimmering blue tones, and embedded keepsakes like hearts and tiny accessories give it a playful yet elegant feel. Photos and elements are thoughtfully arranged, making it a visually heartwarming and memorable display piece.',
        image: '/resin-frames/7) Baby Keepsake Frame/7.3.jpeg',
      },
      {
        id: 'standard2',
        name: `8" Dia 10" Dia 12" Dia ( Customizable)`,
        price: `
₹1800 /
₹2200 /
₹2600
(As per size)`,
        popular: false,
        description: `This resin frame is a beautiful twin baby  keepsake for Nihal and Niharikha, showcasing their birth details, photos, hospital tags, tiny footprints, and personal mementos. Split into blue and pink sections, it celebrates the twins' arrival .`,
        image: '/resin-frames/7) Baby Keepsake Frame/7.4.jpeg',
      },
      {
        id: 'standard3',
        name: `8" Dia 10" Dia 12" Dia ( Customizable)`,
        price: `
₹1800 /
₹2200 /
₹2600
(As per size)`,
        popular: false,
        description: `This resin baby frame is a personalized keepsake for Rihan Mathew, featuring his birth details (date, time, weight, height, and hospital name), ultrasound images, baby tag, family photos, and tiny memorabilia. Decorated with pressed flowers and heart accents, it lovingly honors his arrival and the joy of his proud parents, Vince & Ann.`,
        image: '/resin-frames/7) Baby Keepsake Frame/7.4.jpeg',
      },
    ],
  },
  'wedding-flower-preservation': {
    id: 'wedding-flower-preservation',
    title: 'Wedding Flower Preservation',
    description:
      'Beautifully preserved wedding flowers encased in clear resin to create lasting keepsakes',
    image: '/resin-frames/6) Wedding Flower preservation/7.1.jpeg',
    sizes: [
      {
        id: 'standard',
        name: `8" x 8" x 1" 10" x 10"x 1" 12" x 12" x1" ( Customizable)`,
        price: `₹2100 / ₹2500 / ₹2900 (As per size)`,
        popular: false,
        description:
          'This is a beautifully preserved wedding flower arrangement encased in clear resin. The piece features a mix of roses, greenery, and delicate filler flowers, creating a stunning and lasting keepsake of the special day. The resin enhances the colors and details of the flowers, making it a perfect decorative item or gift.',
        image: '/resin-frames/8) Wedding Flower preservation/8.1.jpg',
      },
    ],
  },
};