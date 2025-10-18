import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";

const FreeSalesforce = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <div className="mb-6 flex justify-center">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Gift className="h-16 w-16" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Free CRM for Non-Profits? Yes!
            </h1>
            <p className="text-xl text-white/90">
              Access powerful Salesforce tools at no cost through the Power of Us Programme
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              What if you could get powerful CRM software, designed for non-profits, for free? 
              Many charities and non-profit organisations are concerned about technology costs. 
              Salesforce, a global leader in CRM, offers a solution that removes this barrier. 
              Through its commitment to social good, Salesforce provides a free CRM for non-profits 
              through the Power of Us Programme.
            </p>

            <Card className="mb-12 bg-accent/5 border-accent/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">What is the Power of Us Programme?</h2>
                <p className="text-muted-foreground mb-4">
                  The Salesforce Power of Us Programme is a donation scheme that gives eligible 
                  non-profits <strong>10 free licences</strong> for either Nonprofit Cloud or Sales 
                  Cloud Enterprise Edition.
                </p>
                <p className="text-muted-foreground">
                  Nonprofit Cloud is Salesforce's modern CRM solution for non-profits, with tools 
                  for donor management, fundraising, grant tracking, and programme delivery. 
                  Alternatively, you can use the Nonprofit Success Pack (NPSP), which is a set of 
                  features tailored for non-profit needs and can be added to Sales Cloud.
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mb-6">Who Qualifies?</h2>
            <p className="text-muted-foreground mb-6">
              To benefit from the Salesforce Power of Us Programme, your organisation must be a 
              registered non-profit or charity and meet certain criteria. This includes being 
              recognised as a charitable organisation in your country and using the CRM for 
              mission-related work.
            </p>
            
            <a
              href="https://www.salesforce.com/en-us/wp-content/uploads/sites/4/documents/company/p10-eligibility-guidelines-English-2023.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              View full eligibility guidelines
              <ExternalLink className="h-4 w-4" />
            </a>

            <h2 className="text-3xl font-bold mb-6 mt-12">
              Beyond the Free Licences: Nonprofit Cloud and NPSP
            </h2>
            <p className="text-muted-foreground mb-6">
              Once you have your free licences, you gain access to either Nonprofit Cloud or 
              Sales Cloud with the Nonprofit Success Pack (NPSP). Both options are designed to 
              help non-profits manage:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Donors and constituents",
                "Fundraising campaigns",
                "Grants and applications",
                "Programme delivery and outcomes",
                "Volunteer management",
                "Impact reporting",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <Card className="my-12 bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-3">Getting Started Is Simple</h3>
                <ol className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="font-semibold text-primary">1.</span>
                    <span>Check your organisation's eligibility</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-primary">2.</span>
                    <span>Apply for the Power of Us Programme through Salesforce.org</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-primary">3.</span>
                    <span>Receive your free licences and start building your CRM</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold mb-6">Need Help Getting Started?</h2>
            <p className="text-muted-foreground mb-8">
              Setting up Salesforce, even with free licences, can feel overwhelming. That's where 
              we come in. At Cohby Consulting Services, we specialise in helping non-profits get 
              the most out of their Salesforce investment (or in this case, donation!).
            </p>

            <Card className="bg-gradient-to-br from-primary to-secondary text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Non-Profit?</h3>
                <p className="text-white/90 mb-6">
                  Let's discuss how we can help you leverage free Salesforce tools to maximize your impact
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
        </div>
      </section>
    </div>
  );
};

export default FreeSalesforce;
