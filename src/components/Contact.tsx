import React from 'react';
import { MessageCircle, Mail, Instagram, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number (include country code without + sign)
    const phoneNumber = '918891021394'; // Example: for +1 234-567-8900, use "1234567890"
    const message = "Hi! I'm interested in your resin artwork.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id='contact'
      className='py-20 bg-gradient-to-br from-primary via-elegant to-primary'
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-serif font-bold mb-4 text-primary-foreground'>
              Let's Create Together
            </h2>
            <p className='text-xl text-primary-foreground/80 max-w-2xl mx-auto font-sans'>
              Ready to preserve your special moments in art? Let's discuss your
              custom nature-inspired piece.
            </p>
            <div className='w-24 h-1 bg-primary-foreground/50 mx-auto mt-8'></div>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {/* Contact Info */}
            <div className='space-y-6'>
              <Card className='bg-white/10 backdrop-blur-md border-white/20'>
                <CardContent className='p-6'>
                  <div
                    className='flex items-center space-x-4'
                    onClick={handleWhatsAppClick}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className='bg-green-500 p-3 rounded-full'>
                      <svg
                        viewBox='0 0 24 24'
                        className='w-5 h-5 fill-current text-white'
                      >
                        <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' />
                      </svg>
                    </div>
                    <div className='text-primary-foreground'>
                      <h3 className='font-semibold font-serif'>WhatsApp</h3>
                      <p className='text-primary-foreground/80 font-sans'>
                        Quick and easy communication
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className='bg-white/10 backdrop-blur-md border-white/20'>
                <CardContent className='p-6'>
                  <a
                    href='mailto:wingedauraartistry@gmail.com'
                    className='flex items-center space-x-4 cursor-pointer no-underline'
                  >
                    <div className='bg-blue-500 p-3 rounded-full'>
                      <Mail className='w-6 h-6 text-white' />
                    </div>
                    <div className='text-primary-foreground'>
                      <h3 className='font-semibold font-serif'>Email</h3>
                      <p className='text-primary-foreground/80 font-sans'>
                        wingedauraartistry@gmail.com
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className='bg-white/10 backdrop-blur-md border-white/20'>
                <CardContent className='p-6'>
                  <a
                    href='https://www.instagram.com/winged_auraartistry'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center space-x-4 cursor-pointer no-underline'
                  >
                    <div className='bg-pink-500 p-3 rounded-full'>
                      <Instagram className='w-6 h-6 text-white' />
                    </div>
                    <div className='text-primary-foreground'>
                      <h3 className='font-semibold font-serif'>Instagram</h3>
                      <p className='text-primary-foreground/80 font-sans'>
                        @winged_auraartistry
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className='bg-white/10 backdrop-blur-md border-white/20'>
                <CardContent className='p-6'>
                  <div className='flex items-center space-x-4'>
                    <div className='bg-purple-500 p-3 rounded-full'>
                      <MapPin className='w-6 h-6 text-white' />
                    </div>
                    <div className='text-primary-foreground'>
                      <h3 className='font-semibold font-serif'>Location</h3>
                      <p className='text-primary-foreground/80 font-sans'>
                        Edappally, Kochi, India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className='flex flex-col justify-center space-y-8'>
              <div className='text-center'>
                <h3 className='text-2xl font-serif font-bold text-primary-foreground mb-4'>
                  Commission Your Nature Art
                </h3>
                <p className='text-primary-foreground/80 mb-8 font-sans'>
                  Connect with me to discuss your custom nature-inspired piece.
                  Let's preserve your special moments in art!
                </p>

                <Button
                  onClick={handleWhatsAppClick}
                  size='lg'
                  className='bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 mx-auto border-2 border-green-400 hover:border-green-300'
                >
                  <MessageCircle className='w-6 h-6 text-white' />
                  <span className='text-lg font-semibold text-white'>
                    Chat on WhatsApp
                  </span>
                </Button>
              </div>

              <div className='bg-primary-foreground/10 backdrop-blur-md rounded-lg p-6 border border-primary-foreground/20'>
                <h4 className='text-lg font-serif font-semibold text-primary-foreground mb-3'>
                  What to expect:
                </h4>
                <ul className='text-primary-foreground/80 space-y-2 font-sans'>
                  <li>• Personal consultation about your vision</li>
                  <li>• Custom botanical selection process</li>
                  <li>• Transparent, fair pricing</li>
                  <li>• Creation progress updates</li>
                  <li>• Careful packaging and shipping</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
