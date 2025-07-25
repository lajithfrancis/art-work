import React, { useState } from 'react';
import { Card } from '@/components/ui/card';

interface ProductImageGalleryProps {
  mainImage: string;
  title: string;
  images?: string[];
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
  mainImage,
  title,
  images = []
}) => {
  const [selectedImage, setSelectedImage] = useState(mainImage);
  const allImages = [mainImage, ...images];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <Card className="overflow-hidden">
        <div className="aspect-square bg-card">
          <img
            src={selectedImage}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </Card>

      {/* Thumbnail Gallery */}
      {allImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {allImages.map((image, index) => (
            <Card
              key={index}
              className={`flex-shrink-0 cursor-pointer overflow-hidden transition-all ${
                selectedImage === image ? 'ring-2 ring-primary' : 'hover:ring-1 ring-border'
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <div className="w-16 h-16 bg-card">
                <img
                  src={image}
                  alt={`${title} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImageGallery;