import { Mail, Phone, Github, Linkedin, Code2, Trophy, FileCode } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, label: "GitHub", url: "https://github.com/imthevishal" },
  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/imthevishal/" },
  { icon: Code2, label: "HackerRank", url: "https://www.hackerrank.com/profile/imthevishal_m" },
  { icon: Trophy, label: "CodeChef", url: "https://www.codechef.com/users/bliss_snow_29" },
  { icon: FileCode, label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/imtheviwv9t" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Contact</h2>
        
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-4">
                <a
                  href="mailto:imthevishal.m@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>imthevishal.m@gmail.com</span>
                </a>
                <a
                  href="tel:7010069334"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>7010069334</span>
                </a>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-medium text-foreground mb-4">Connect with me</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.label}
                      variant="outline"
                      size="sm"
                      asChild
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <link.icon className="w-4 h-4 mr-2" />
                        {link.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
