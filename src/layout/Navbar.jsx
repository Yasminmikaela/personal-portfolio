import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useEffectEvent, useState } from "react";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect (() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"}bg-transparent py- z-50`}>
            <nav className="container mx-auto px-6 flex items-center justify-between">
                <a href="#" className="font-serif italic text-xl tracking-tight hover:text-primary">
                    Yasmin<span className="font-sans not-italic font-bold text-primary">.</span>
                </a>

                { /* Desktop Nav*/ }
                <div className="hidden md:flex items-center gap-1">
                    <div className="px-2 py-1 flex items-center gap-1">
                        {navLinks.map((link, index) => ( 
                            <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:underline">{link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Call to action */}
                <div className="hidden md:block">
                    <Button size = "sm">Contact me</Button>
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden p-2 text-foreground cursor-pointer" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                {isMobileMenuOpen ? <X size={24}/> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
            <div className="md:hidden glass-strong animate-fade-in">
                <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                    {navLinks.map((link, index) => ( 
                            <a href={link.href} 
                            key={index}
                            onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-muted-foreground hover:text-foreground py-2">{link.label}
                            </a>
                        ))}

                        <Button size="sm">Contact me</Button>
                    
                </div>
            </div>
            )}
        </header>
    );
}