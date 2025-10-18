import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

const Challenges = () => {
  const challenges = [
    {
      title: "Challenge 1: Fragmented Donor & Constituent Data",
      problem: "Spreadsheets here, email lists there, sticky notes everywhere. When your donor and volunteer info is scattered across different places, it's easy to miss opportunities and hard to keep communications personal.",
      solution: "Salesforce brings all your data together in one place. Imagine having a 360-degree view of every supporter - donors, volunteers, beneficiaries, all in a single, searchable database. Suddenly, you can see who's engaged, personalise your outreach, and never forget a birthday (or a major gift anniversary) again.",
    },
    {
      title: "Challenge 2: Tracking Fundraising Campaigns & Donations",
      problem: "You're running multiple campaigns - online appeals, events, grant applications - and trying to track who gave what, when, and why. Without a clear system, it's nearly impossible to know what's working, follow up promptly, or plan your next move.",
      solution: "Salesforce's campaign and donation tracking tools (especially with NPSP or Nonprofit Cloud) let you see exactly where every pound or dollar came from, which campaigns are hitting targets, and which donors need a thank-you call. Automated workflows can even send receipts and follow-ups instantly, freeing you to focus on relationships, not admin.",
    },
    {
      title: "Challenge 3: Demonstrating Impact to Funders & Stakeholders",
      problem: "Funders want proof: How many people did you help? What outcomes did you achieve? When your data is messy or incomplete, creating compelling reports feels like pulling teeth. You know you're making a difference, but showing it is another story.",
      solution: "With Salesforce, you can track program outcomes, beneficiary progress, and key metrics in real-time. Dashboards and reports are built in, so you can generate beautiful, data-driven stories for grant applications, board meetings, and annual reports. Show your impact clearly and confidently, without the last-minute scramble.",
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
                <AlertCircle className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Top 3 Challenges Non-Profits Face
            </h1>
            <p className="text-xl text-white/90">
              And How Salesforce Solves Them
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-muted-foreground text-center mb-8">
            Let's be honest, running a non-profit is a labour of love, but it's not always smooth 
            sailing. You're juggling big missions, tight budgets, and a million moving parts. If 
            you've ever felt like you're herding cats when it comes to your data, fundraising, or 
            reporting, you're definitely not alone.
          </p>
          <p className="text-lg text-muted-foreground text-center">
            Here are the top three non-profit challenges we see all the time and how Salesforce 
            can help you turn chaos into clarity.
          </p>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-12">
            {challenges.map((challenge, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-destructive/10 p-6 border-l-4 border-destructive">
                    <h2 className="text-2xl font-bold mb-4 flex items-start gap-3">
                      <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                      {challenge.title}
                    </h2>
                    <p className="text-muted-foreground pl-9">{challenge.problem}</p>
                  </div>
                  
                  <div className="bg-accent/5 p-6 border-l-4 border-accent">
                    <h3 className="text-xl font-semibold mb-4 flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      How Salesforce Helps
                    </h3>
                    <p className="text-muted-foreground pl-9">{challenge.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Line */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-center">The Bottom Line</h2>
              <p className="text-muted-foreground mb-6">
                Non-profits face unique challenges, but you don't have to tackle them alone. 
                Salesforce, especially with tools like NPSP or Nonprofit Cloud, is built to handle 
                exactly these pain points. And with the right support (hint: that's where we come in), 
                you can go from overwhelmed to organised, from guessing to knowing, and from surviving 
                to thriving.
              </p>
              <p className="text-muted-foreground text-center">
                <strong>Sound familiar? Let's chat.</strong> We'll show you how Salesforce can 
                solve these challenges for your organisation, no jargon, no pressure.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Solve These Challenges?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how Salesforce can transform your non-profit operations
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenges;
