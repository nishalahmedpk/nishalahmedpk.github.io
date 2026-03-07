import { FileText, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left content */}
        <div className="space-y-6">
          <div>
            <p className="font-display text-sm text-muted-foreground tracking-wider mb-1">
              this is
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
              Nishal Ahmed
            </h1>
          </div>

          <p className="text-base md:text-lg leading-relaxed">
            he{" "}
            <span className="text-highlight-green font-medium">builds</span>,{" "}
            <span className="text-highlight-red font-bold">breaks</span>,{" "}
            <span className="text-highlight-gold font-medium">builds again</span>,{" "}
            <span className="text-highlight-green font-medium">hikes</span>,{" "}
            <span className="text-highlight-blue font-medium">bikes</span>, and{" "}
            <span className="text-highlight-gold font-medium">lifts</span>.
            <br />
            this website goes through some of the cool things he built.
          </p>

          <div className="flex items-center gap-5 pt-2">
            <a
              href="/cv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="Download CV"
            >
              <FileText size={24} />
            </a>
            <a
              href="https://github.com/nishal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/nishal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Right photo */}
        <div className="flex justify-center md:justify-end">
          <div className="photo-frame w-64 h-80 md:w-72 md:h-96">
            <img
              src={profilePhoto}
              alt="Nishal Ahmed"
              className="relative z-10 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
