import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const certifications = [
  { title: "MongoDB Basics for Students" },
  { title: "Python Essentials" },
  { title: "Introduction to Modern AI" },
  { title: "Security Connectivity Support" },
  { title: "Zidio Internship" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Certifications</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="pt-6">
                <div className="aspect-[4/3] bg-muted rounded-lg mb-4 flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                  <Award className="w-16 h-16 text-primary/50" />
                </div>
                <h3 className="font-medium text-foreground text-center">{cert.title}</h3>
                <p className="text-xs text-muted-foreground text-center mt-1">
                  Click to view certificate
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
