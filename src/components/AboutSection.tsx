import { GraduationCap, Lightbulb, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">About Me</h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-muted-foreground leading-relaxed text-center">
            I am a Computer Science Engineering student with a strong interest in Java, Python, and Web Development. 
            I enjoy building practical applications, learning new technologies, and improving my problem-solving skills. 
            I am passionate about growing as a developer and contributing to meaningful software projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardContent className="pt-6">
              <GraduationCap className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-foreground mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">
                B.E CSE — Easwari Engineering College
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Lightbulb className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-foreground mb-2">Interests</h3>
              <p className="text-sm text-muted-foreground">
                Web Development • Python • Java Programming
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Rocket className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-semibold text-foreground mb-2">Goal</h3>
              <p className="text-sm text-muted-foreground">
                To become a skilled developer with strong frontend + backend knowledge.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
