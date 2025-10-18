import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Gift, Users, TrendingUp, ArrowRight } from "lucide-react";

const NonProfits = () => {
  const benefits = [
    {
      icon: <Gift className="h-8 w-8 text-accent" />,
      title: "Free Salesforce Licenses",
      description: "Access up to 10 free Salesforce licenses through the Power of Us Programme.",
      link: "/non-profits/free-salesforce",
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Nonprofit Success Pack",
      description: "Purpose-built tools for donor management, fundraising, and program delivery.",
      link: "/non-profits/npsp-basics",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Overcome Common Challenges",
      description: "Solutions for data fragmentation, fundraising tracking, and impact reporting.",
      link: "/non-profits/challenges",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Heart className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Salesforce Solutions for Non-Profits
            </h1>
            <p className="text-xl text-white/90">
              Maximize your impact with powerful, affordable Salesforce solutions designed specifically for non-profit organizations
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Technology That Amplifies Your Mission
            </h2>
            <p className="text-lg text-muted-foreground text-center">
              Running a non-profit is challenging enough without worrying about expensive technology. 
              That's why we specialize in helping non-profits leverage Salesforce's powerful tools 
              at little to no cost, so you can focus on what matters most: making a difference.
            </p>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{benefit.description}</p>
                  <Link to={benefit.link}>
                    <Button variant="outline" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Salesforce for Non-Profits */}
          <div className="bg-muted/30 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Salesforce for Non-Profits?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Unified Donor Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep all donor information, interactions, and giving history in one place.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Powerful Fundraising Tools</h3>
                  <p className="text-sm text-muted-foreground">
                    Track campaigns, pledges, and donations with purpose-built features.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Program Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Measure program outcomes and demonstrate impact to stakeholders.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Volunteer Coordination</h3>
                  <p className="text-sm text-muted-foreground">
                    Manage volunteer recruitment, scheduling, and engagement efficiently.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Grant Tracking</h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor grant applications, requirements, and reporting deadlines.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Cost-Effective</h3>
                  <p className="text-sm text-muted-foreground">
                    Free or heavily discounted licensing through Salesforce.org programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Non-Profit?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how Salesforce can help you achieve more with less
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-consultation">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NonProfits;
