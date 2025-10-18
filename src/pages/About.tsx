import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Cohby Consulting Services</h1>
            <p className="text-xl text-white/90">
              Your trusted partner in Salesforce and data transformation
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Cohby Consulting Services was founded on a simple belief: technology should empower businesses, not complicate them. We've seen too many organisations struggle with Salesforce implementations that don't deliver, data systems that don't connect, and consultants who speak in jargon rather than solutions.
              </p>
              <p>
                That's why we do things differently. We're hands-on consultants who take the time to understand your unique challenges and goals. Whether you're a growing business looking to streamline operations or a non-profit maximising your impact with limited resources, we're here to make technology work for you.
              </p>
              <p>
                Based in the UK and Canada, we serve clients across multiple sectors with one common thread: a commitment to practical, results-driven consulting that delivers real business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-accent/10 rounded-full">
                    <Target className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Results-Driven</h3>
                <p className="text-muted-foreground">
                  We focus on outcomes that matter to your business, not just checking boxes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-accent/10 rounded-full">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaborative</h3>
                <p className="text-muted-foreground">
                  We work alongside your team, not above them, ensuring knowledge transfer and empowerment.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-accent/10 rounded-full">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert</h3>
                <p className="text-muted-foreground">
                  Certified Salesforce consultants with deep technical expertise and practical experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-accent/10 rounded-full">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">Transparent</h3>
                <p className="text-muted-foreground">
                  Clear communication, honest advice, and no hidden surprises. Ever.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose Cohby Consulting?</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-World Experience</h3>
                  <p className="text-muted-foreground">
                    We've worked with organisations of all sizes, from startups to established enterprises, across various industries. We bring practical insights from real implementations, not just theoretical knowledge.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Certified Expertise</h3>
                  <p className="text-muted-foreground">
                    Our consultants hold Salesforce certifications and stay current with the latest platform updates and best practices. You're in expert hands.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Flexible Engagement</h3>
                  <p className="text-muted-foreground">
                    Whether you need a one-off project, ongoing support, or strategic guidance, we adapt to your needs and budget.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Reach, Local Service</h3>
                  <p className="text-muted-foreground">
                    Operating in both the UK and Canada, we understand different markets while providing personalized, accessible service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
