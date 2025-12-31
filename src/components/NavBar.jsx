import { href } from "react-router-dom"
import { cn } from "../lib/utils"
import { useEffect, useState } from "react"


const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#About" },
    { name: "Skills", href: "#Skills" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#Contact" },
];





export const NavBar = () => {
    
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);

        };

        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    },[])




    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            
            <div className="container flex items-center justify-between ">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Yasindu</span> {""} Portfolio
                        </span>
                </a>

                {/* desktop nav */}

                <div className="hidden md:flex space-x-8">
                    {navItems.map((items,key) => (
                        <a
                            key={key}
                            href={items.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {items.name}

                        </a>
                    ))}
                </div>

                {/* mobile nav */}
                <div className={}>

                </div>

            </div>

      </nav>  
    );
}