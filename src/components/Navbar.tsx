"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            const scrollPosition = window.scrollY + 200; // Offset for navbar

            let current = "";

            // Explicit check for top of page to default to Home
            if (window.scrollY < 100) {
                current = "home";
            } else {
                sections.forEach((section) => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;

                    if (
                        scrollPosition >= sectionTop &&
                        scrollPosition < sectionTop + sectionHeight
                    ) {
                        current = section.getAttribute("id") || "";
                    }
                });
            }

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <ul className={styles.links}>
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className={`${styles.link} ${activeSection === item.href.substring(1) ? styles.active : ""}`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`${styles.mobileLink} ${activeSection === item.href.substring(1) ? styles.active : ""}`}
                        onClick={() => setIsOpen(false)}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
