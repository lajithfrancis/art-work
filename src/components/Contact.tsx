
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
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Ready to commission a custom piece or have questions about my artwork? Let's connect!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mt-8"></div>
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
                    <div className="text-white">
                      <h3 className="font-semibold">WhatsApp</h3>
                      <p className="text-gray-200">Quick and easy communication</p>
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
                    <div className="text-white">
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-200">info@artflowresin.com</p>
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
                    <div className="text-white">
                      <h3 className="font-semibold">Instagram</h3>
                      <p className="text-gray-200">@artflowresin</p>
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
                    <div className="text-white">
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-gray-200">Toronto, Canada</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Start Your Custom Order
                </h3>
                <p className="text-gray-200 mb-8">
                  Click the WhatsApp button below to discuss your custom resin art piece. I'll help bring your vision to life!
                </p>
                
                <Button
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 mx-auto"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span className="text-lg">Chat on WhatsApp</span>
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <h4 className="text-lg font-semibold text-white mb-3">What to expect:</h4>
                <ul className="text-gray-200 space-y-2">
                  <li>• Quick response within 24 hours</li>
                  <li>• Custom design consultation</li>
                  <li>• Transparent pricing</li>
                  <li>• Progress updates during creation</li>
                  <li>• Secure packaging and shipping</li>
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
