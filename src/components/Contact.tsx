
import React from 'react';
import { MessageCircle, Mail, Instagram, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const handleWhatsAppClick = () => {
    // Replace with your actual WhatsApp number (include country code without + sign)
    const phoneNumber = "1234567890"; // Example: for +1 234-567-8900, use "1234567890"
    const message = "Hi! I'm interested in your resin artwork.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary via-elegant to-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary-foreground">
              Let's Create Together
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto font-sans">
              Ready to preserve your special moments in art? Let's discuss your custom nature-inspired piece.
            </p>
            <div className="w-24 h-1 bg-primary-foreground/50 mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-500 p-3 rounded-full">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-primary-foreground">
                      <h3 className="font-semibold font-serif">WhatsApp</h3>
                      <p className="text-primary-foreground/80 font-sans">Quick and easy communication</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-primary-foreground">
                      <h3 className="font-semibold font-serif">Email</h3>
                      <p className="text-primary-foreground/80 font-sans">info@wingedauraresin.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-pink-500 p-3 rounded-full">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-primary-foreground">
                      <h3 className="font-semibold font-serif">Instagram</h3>
                      <p className="text-primary-foreground/80 font-sans">@wingedauraresin</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-500 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-primary-foreground">
                      <h3 className="font-semibold font-serif">Location</h3>
                      <p className="text-primary-foreground/80 font-sans">India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-4">
                  Commission Your Nature Art
                </h3>
                <p className="text-primary-foreground/80 mb-8 font-sans">
                  Connect with me to discuss your custom nature-inspired piece. Let's preserve your special moments in art!
                </p>
                
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 mx-auto border-2 border-green-400 hover:border-green-300"
                >
                  <MessageCircle className="w-6 h-6 text-white" />
                  <span className="text-lg font-semibold text-white">Chat on WhatsApp</span>
                </Button>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-md rounded-lg p-6 border border-primary-foreground/20">
                <h4 className="text-lg font-serif font-semibold text-primary-foreground mb-3">What to expect:</h4>
                <ul className="text-primary-foreground/80 space-y-2 font-sans">
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
