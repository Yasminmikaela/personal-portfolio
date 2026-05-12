import { Code2 } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, sclable code that stands the test of time.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, sclable code that stands the test of time.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, sclable code that stands the test of time.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, sclable code that stands the test of time.",
  },
];
export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I'm an Information and Communications Technology student
                specializing in frontend development and UX/UI design. I've
                always been drawn to the visual side of technology and there's
                something deeply satisfying about writing code and seeing the
                result come to life instantly on screen.
              </p>
              <p>
                I'm passionate about building interfaces that are both beautiful
                and functional. This portfolio is a reflection of that, a
                project I took on to challenge myself and combine everything
                I've learned into something I'm proud of. Through my studies,
                including a thesis focused on UX/UI design, I've been working
                with React, JavaScript and Tailwind CSS with a strong focus on
                user experience.
              </p>
              <p>
                I'm currently looking for frontend developer opportunities where
                I can keep growing and contribute to products that people
                actually enjoy using.
              </p>
            </div>

            <div className="glass rounded-2-xl p-6 glow-border animate-fade-in animation-delay-300">
                <p className="text-lg font-medium italic text-foreground">
                    "My mission is to build frontend experiences that just work. Clean, fast and intuitive interfaces where every detail serves a purpose."
                </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm-grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
                <div key={idx} 
                className="glass p-6 rounded-2xl animate-fade-in" 
                style={{animationDelay: `${idx + 1 * 100} ms`}}
            >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                        <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg  font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
