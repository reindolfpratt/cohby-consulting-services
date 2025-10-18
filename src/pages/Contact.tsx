import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://form.jotform.com/jsform/251077501258050';
    script.type = 'text/javascript';
    document.getElementById('jotform-container')?.appendChild(script);
    
    return () => {
      const container = document.getElementById('jotform-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-white/90">
              We'd love to hear from you. Let's discuss how we can help your business thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Contact Cards */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Phone</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="text-sm">UK: +44 7424 742415</p>
                  <p className="text-sm">Canada: +1 343 297 1992</p>
                  <p className="text-sm mt-2">WhatsApp available</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Email</h3>
                <a
                  href="mailto:info@cohbyconsult.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@cohbyconsult.com
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Business Hours</h3>
                <div className="text-muted-foreground space-y-1">
                  <p className="text-sm">Monday - Saturday</p>
                  <p className="text-sm">10:00 AM - 6:00 PM</p>
                  <p className="text-sm mt-2">(UK & Canada Time)</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
                <div id="jotform-container" className="w-full"></div>
              </CardContent>
            </Card>
          </div>

          {/* Serving Areas */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted rounded-full">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium">Proudly serving clients in the UK and Canada</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
