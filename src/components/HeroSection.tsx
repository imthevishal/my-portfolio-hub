import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <img
            src={profilePhoto}
            alt="Vishal M"
            className="w-40 h-40 rounded-full mx-auto border-4 border-primary object-cover shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Hi, I'm <span className="text-primary">VISHAL M</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-6">
          2nd-year CSE Student
        </p>
        <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          I am a B.E. CSE student, an Aspiring software engineer with skills in HTML, CSS, Java, C, and Python. 
          I enjoy learning new technologies and building meaningful solutions. Interested in Front-end development.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
