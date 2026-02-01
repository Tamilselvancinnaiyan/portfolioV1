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
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo}>
                    {/* Add your logo here */}
                </Link>

                <ul className={styles.links}>
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link href={item.href} className={styles.link}>
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
