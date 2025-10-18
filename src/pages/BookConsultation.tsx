import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const BookConsultation = () => {
  const benefits = [
    "No-obligation conversation about your business needs",
    "Expert advice from certified Salesforce consultants",
    "Tailored recommendations for your specific challenges",
    "Clear next steps and transparent pricing",
    "Discover how Salesforce can transform your operations",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Book Your Free Consultation
            </h1>
            <p className="text-xl text-white/90">
              30 minutes that could transform your business
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Benefits */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">What to Expect</h2>
                <p className="text-muted-foreground mb-6">
                  During your free 30-minute consultation, we'll take the time to understand 
                  your business challenges and explore how Salesforce solutions can help you 
                  achieve your goals.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">You'll Get:</h3>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>

              <Card className="bg-muted/50 border-accent/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">No Pressure, Just Honest Advice</h3>
                  <p className="text-sm text-muted-foreground">
                    We believe in building long-term partnerships, not making quick sales. 
                    If we're not the right fit, we'll tell you. If we can help, we'll show 
                    you exactly how.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form Placeholder */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Schedule Your Call</h2>
                  
                  <div className="bg-muted/30 rounded-lg p-8 text-center">
                    <p className="text-muted-foreground mb-4">
                      To schedule your free consultation, please contact us directly:
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold mb-1">UK</p>
                        <a
                          href="tel:+447424742415"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          +44 7424 742415
                        </a>
                      </div>
                      
                      <div>
                        <p className="font-semibold mb-1">Canada</p>
                        <a
                          href="tel:+13432971992"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          +1 343 297 1992
                        </a>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <p className="font-semibold mb-1">Email</p>
                        <a
                          href="mailto:info@cohbyconsult.com"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          info@cohbyconsult.com
                        </a>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mt-6">
                      Available Monday to Saturday, 10 AM - 6 PM
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookConsultation;
