"use client";

import { useState } from "react";
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

    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                TS
            </Link>

            {/* Desktop Menu */}
            <ul className={styles.links}>
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link href={item.href} className={styles.link}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
                className={styles.mobileMenuBtn}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? "✕" : "☰"}
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={styles.mobileLink}
                        onClick={() => setIsOpen(false)}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
