"use client";

import { useState, useEffect } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-scrolled" : "bg-transparent"}`}>
            <div className="container mx-auto flex justify-between items-center py-4 px-4">
                <a href="#home" className="font-mono text-xl font-bold tracking-tight">
                    <span className="text-red-600">TW</span>
                    <span className="text-white animate-pulse">_</span>
                </a>

                <div className="flex gap-6 items-center">
                    <a href="#home"      className="nav-link">Home</a>
                    <a href="#about"     className="nav-link">About</a>
                    <a href="#skills"    className="nav-link">Skills</a>
                    <a href="#portfolio" className="nav-link">Portfolio</a>
                </div>

                <a href="#contact" className="btn-red-outline">Contact Me</a>
            </div>
        </nav>
    );
}

export default Navbar;
