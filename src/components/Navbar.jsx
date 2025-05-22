import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
    return (
        <nav className="fixed top-0 left-0 w-full z-40 bg-[#405a8c]/60 backdrop-blur-lg borber-b border-white/10 shadow-lg">
            <div className="px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        {" "}
                        portfolio<span className="text-blue-500">.vu</span>{" "}
                    </a>

                    <div 
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden" 
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-white hover:text-blue-300 transition-colors font-medium">
                            Home
                        </a>
                        <a href="#about" className="text-white hover:text-blue-300 transition-colors font-medium">
                            About
                        </a>
                        <a href="#projects" className="text-white hover:text-blue-300 transition-colors font-medium">
                            Projects
                        </a>
                        <a href="#contact" className="text-white hover:text-blue-300 transition-colors font-medium">
                            Contact
                        </a> 
                    </div>
                </div>
            </div>
        </nav>
    )
}