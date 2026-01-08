import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Python", level: 60 },
  { name: "Java", level: 50 },
  { name: "HTML", level: 60 },
  { name: "CSS", level: 50 },
  { name: "C", level: 50 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">Skills</h2>
        
        <div className="max-w-2xl mx-auto space-y-6">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-3" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
