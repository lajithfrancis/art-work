import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const ProductTabs: React.FC = () => {
  return (
    <div className='mt-12'>
      <Tabs defaultValue='details' className='w-full'>
        <TabsList className='grid w-full grid-cols-4'>
          <TabsTrigger value='details'>Product Details</TabsTrigger>
          <TabsTrigger value='specifications'>Specifications</TabsTrigger>
          <TabsTrigger value='care'>Instructions</TabsTrigger>
          <TabsTrigger value='shipping'>Shipping</TabsTrigger>
        </TabsList>

        <TabsContent value='details' className='mt-6'>
          <Card>
            <CardContent className='p-6'>
              <h3 className='text-lg font-semibold mb-4'>Product Details</h3>
              <div className='space-y-3 text-muted-foreground'>
                <p>
                  Each piece is individually handcrafted using premium resin and
                  natural materials, creating a unique work of art that captures
                  the beauty of geological formations.
                </p>
                <p>
                  Our artisans carefully select pigments and additives to
                  achieve stunning visual effects that mimic the natural
                  patterns found in geodes and crystals.
                </p>
                <ul className='list-disc list-inside space-y-1 ml-4'>
                  <li>Handcrafted using premium epoxy resin</li>
                  <li>Natural mineral pigments and effects</li>
                  <li>UV-resistant coating for long-lasting colors</li>
                  <li>Ready to hang with included mounting hardware</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='specifications' className='mt-6'>
          <Card>
            <CardContent className='p-6'>
              <h3 className='text-lg font-semibold mb-4'>Specifications</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Material:</span>
                    <span>Premium Epoxy Resin</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Finish:</span>
                    <span>High Gloss</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Thickness:</span>
                    <span>6-8mm</span>
                  </div>
                </div>
                <div className='space-y-2'>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Style:</span>
                    <span>Contemporary</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Mounting:</span>
                    <span>Wall Mount Ready</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-muted-foreground'>Weight:</span>
                    <span>Varies by size</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='care' className='mt-6'>
          <Card>
            <CardContent className='p-6'>
              <h3 className='text-lg font-semibold mb-4'>Care Instructions</h3>
              <div className='space-y-3 text-muted-foreground'>
                <p>
                  To maintain the beauty and longevity of your resin art piece,
                  please follow these simple care instructions:
                </p>
                <ul className='list-disc list-inside space-y-1 ml-4'>
                  <li>Clean with a soft, lint-free cloth</li>
                  <li>Use mild soap and water for deeper cleaning</li>
                  <li>Avoid harsh chemicals or abrasive cleaners</li>
                  <li>Keep away from direct sunlight to prevent fading</li>
                  <li>Handle with care during cleaning or repositioning</li>
                  <li>Dust regularly to maintain the glossy finish</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='shipping' className='mt-6'>
          <Card>
            <CardContent className='p-6'>
              <h3 className='text-lg font-semibold mb-4'>
                Shipping Information
              </h3>
              <div className='space-y-4'>
                <div className='flex justify-between items-center p-3 bg-accent/20 rounded-lg'>
                  <span className='font-medium'>Free Shipping</span>
                  <span className='text-green-600'>On orders over ₹500</span>
                </div>
                <div className='space-y-2 text-muted-foreground'>
                  <p>
                    <strong>Processing Time:</strong> 2-3 business days
                  </p>
                  <p>
                    <strong>Delivery Time:</strong> 5-7 business days
                  </p>
                  <p>
                    <strong>Packaging:</strong> Secure protective packaging to
                    prevent damage
                  </p>
                  <p>
                    <strong>Tracking:</strong> You'll receive tracking
                    information via email
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductTabs;