import { Button } from "@/components/Button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import profilePic from "../assets/placeholder.jpg";
import heroImage from "../assets/hero-bg.jpg";

const skills = [
  "React",
  "Javascript",
  "Tailwind CSS",
  "HTML & CSS",
  "Python",
  "SQL",
  "Git",
];

export const CodeProfile = () => {
  return (
    <div className="bg-[#0f1418] rounded-2xl overflow-hidden border border-white/10 font-mono max-w-md">
      <div className="bg-[#1a2329] px-4 py-3 flex items-center gap-2 border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-xs text-white/40">portfolio.tsx</span>
      </div>
      <div className="p-6 text-sm leading-relaxed">
        <p>
          <span className="text-blue-400">const</span>{" "}
          <span className="text-green-300">developer</span>{" "}
          <span className="text-white">= {"{"}</span>
        </p>
        <p className="pl-5">
          <span className="text-red-300">name</span>
          <span className="text-white">:</span>{" "}
          <span className="text-yellow-200">"Yasmin Haanpää"</span>
          <span className="text-white">,</span>
        </p>
        <p className="pl-5">
          <span className="text-red-300">role</span>
          <span className="text-white">:</span>{" "}
          <span className="text-yellow-200">"Frontend Developer"</span>
          <span className="text-white">,</span>
        </p>
        <p className="pl-5">
          <span className="text-red-300">skills</span>
          <span className="text-white">: [</span>
          <span className="text-yellow-200">"React"</span>
          <span className="text-white">, </span>
          <span className="text-yellow-200">"Tailwind CSS"</span>
          <span className="text-white">, </span>
          <span className="text-yellow-200">"UX/UI"</span>
          <span className="text-white">],</span>
        </p>
        <p className="pl-5">
          <span className="text-red-300">available</span>
          <span className="text-white">:</span>{" "}
          <span className="text-blue-400">true</span>
        </p>
        <p>
          <span className="text-white">{"}"}</span>
        </p>
        <div className="flex items-center gap-2 mt-4">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-white/40 text-xs">available for work</span>
        </div>
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to background" />
      </div>

      {/* Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Luo N placeholder-elementin tyhjällä taulukolla ja käy indeksit läpi.
            Creates N placeholder elements using an empty array mapped over indices*/}
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "var(--color-primary)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm text-primary text-white">
                <span className="text-sm text-primary font-medium tracking-wider" />
                Hi, I'm Yasmin Haanpää{" "}
                <span className="inline-block animate-bounce">👋</span>
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font bold leading-tight animate-fade-in animation-delay-100">
                Learning,{" "}
                <span className="text-primary glow-text">building</span>
                <br />
                and growing as a
                <br />
                <span className="font-serif italic font-normal text-white">
                  frontend developer.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                I'm a frontend developer student with a passion for building
                interfaces that are both beautiful and functional.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">
                {" "}
                Follow me:{" "}
              </span>
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile image? */}
          <div className="relative animate-fade-in animation-delay-300 self-start mt-18">
            {/* Profile pic */}
            <CodeProfile />

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Available for work</span>
              </div>
            </div>
            {/* Stats Badge */}
            <div className="absolute -top-4 -right-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
              <div className="text-2xl font-bold text-primary">0</div>
              <div className="text-xs text-muted-foreground">Years Exp.</div>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            {" "}
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
