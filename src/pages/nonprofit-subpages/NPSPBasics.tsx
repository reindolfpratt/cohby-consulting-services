import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ArrowRight } from "lucide-react";

const NPSPBasics = () => {
  const features = [
    {
      title: "Constituent Management",
      description: "Keep track of individuals (donors, volunteers, beneficiaries) and organisations (foundations, companies) in one place. No more scattered spreadsheets, just a single, searchable database.",
    },
    {
      title: "Donation & Gift Management",
      description: "Record all types of donations: one-off gifts, pledges, recurring donations and track them easily. You can see giving history at a glance and never miss a thank you.",
    },
    {
      title: "Household Management",
      description: "Link related people into households. This means you can communicate with families or groups together, making your outreach more personal and organised.",
    },
    {
      title: "Campaign Management",
      description: "Track your fundraising campaigns, appeals, and events. See which efforts are bringing in donations and where to focus your energy.",
    },
    {
      title: "Engagement Plans",
      description: "Automate follow-ups and communications. For example, send a welcome email series to new donors or schedule check-ins with volunteers.",
    },
    {
      title: "Reports & Dashboards",
      description: "Get visual snapshots of your fundraising progress, donor retention, and more. No technical expertise needed to create clear, informative reports.",
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
                <Sparkles className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nonprofit Success Pack Basics
            </h1>
            <p className="text-xl text-white/90">
              Your Foundation for Nonprofit Success on Salesforce
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <p className="text-lg text-muted-foreground mb-6">
              You've got Salesforce, now meet its nonprofit superpower: the <strong>Nonprofit 
              Success Pack (NPSP)</strong>! If you're a charity or nonprofit just starting out 
              with Salesforce, NPSP is your launchpad for better donor management, fundraising, 
              and more.
            </p>
          </div>

          <Card className="mb-12 bg-accent/5 border-accent/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">What is NPSP?</h2>
              <p className="text-muted-foreground mb-4">
                NPSP (Nonprofit Success Pack) is a <strong>free, open source package</strong> built 
                on Salesforce, designed specifically for nonprofits. It comes ready to use, so you 
                don't have to build everything from scratch.
              </p>
              <p className="text-muted-foreground">
                NPSP helps you turn Salesforce into a nonprofit CRM that's tailored for your needs.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold mb-8">Core NPSP Features Simply Explained</h2>

          <div className="space-y-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-12 bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">Why Start with NPSP?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>It's Free:</strong> NPSP is included with your Salesforce nonprofit 
                    account at no extra cost.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Built for Nonprofits:</strong> Unlike generic CRMs, NPSP speaks your 
                    language - donors, not customers; campaigns, not sales targets.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Room to Grow:</strong> Start simple and add more features as your 
                    organisation's needs evolve.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span>
                    <strong>Community Support:</strong> There's a huge community of nonprofits 
                    using NPSP, so plenty of resources and help available.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold mb-6">Getting Started Is Easier Than You Think</h2>
          <p className="text-muted-foreground mb-8">
            If the idea of setting up NPSP feels daunting, don't worry. That's what we're here for. 
            At Cohby Consulting Services, we've helped dozens of nonprofits get up and running with 
            NPSP quickly and painlessly. We'll handle the technical setup, train your team, and make 
            sure you're confident using your new system.
          </p>

          <Card className="bg-gradient-to-br from-primary to-secondary text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started with NPSP?</h3>
              <p className="text-white/90 mb-6">
                Let us help you set up and optimize your Nonprofit Success Pack for maximum impact
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book-consultation">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/non-profits">
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    Back to Non-Profits
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default NPSPBasics;
