"use client";

import React from "react";

const CONTACT_METHODS = [
    {
        label: "Direct Mail",
        value: "tamilselvancinnaiyan@gmail.com",
        href: "mailto:tamilselvancinnaiyan@gmail.com",
        tag: "OFFICIAL",
        color: "#ff0080", // Pink
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    },
    {
        label: "LinkedIn",
        value: "Tamilselvan C",
        href: "https://www.linkedin.com/in/thamizhc/",
        tag: "NETWORK",
        color: "#0077b5", // LinkedIn Blue
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
    },
    {
        label: "GitHub",
        value: "Tamilselvan",
        href: "https://github.com/Tamilselvancinnaiyan",
        tag: "SOURCE",
        color: "#333", // Dark Grey (so white icon is visible on hover)
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
    }
];

export default function Contact({ id }: { id: string }) {
    return (
        <section id={id} className="contact-wrap">
            <style>{`
                .contact-wrap {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 100px 24px;
                    color: #fff;
                    font-family: 'Inter', system-ui, sans-serif;
                }

                .header-area {
                    text-align: center;
                    margin-bottom: 80px;
                }

                .header-area h2 {
                    font-size: clamp(2.5rem, 6vw, 4rem);
                    font-weight: 900;
                    letter-spacing: -3px;
                    margin: 0;
                }

                .header-area span {
                    color: transparent;
                    -webkit-text-stroke: 1px #ff0080;
                }

                .command-center {
                    display: grid;
                    grid-template-columns: 1.4fr 1fr;
                    gap: 30px;
                    align-items: stretch;
                }

                .main-portal {
                    background: rgba(0, 0, 0, 0.4);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 40px;
                    padding: 60px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                .portal-title {
                    font-size: 2.5rem;
                    font-weight: 800;
                    margin-bottom: 20px;
                    letter-spacing: -1.5px;
                }

                .availability {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    background: rgba(0, 255, 128, 0.1);
                    color: #00ff80;
                    padding: 8px 16px;
                    border-radius: 100px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 1px;
                    width: fit-content;
                    margin-bottom: 30px;
                }

                .pulse {
                    width: 8px;
                    height: 8px;
                    background: #00ff80;
                    border-radius: 50%;
                    box-shadow: 0 0 10px #00ff80;
                    animation: pulse-ring 1.5s infinite;
                }

                @keyframes pulse-ring {
                    0% { transform: scale(0.8); opacity: 0.5; }
                    50% { transform: scale(1.2); opacity: 1; }
                    100% { transform: scale(0.8); opacity: 0.5; }
                }

                .side-terminal {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .terminal-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    padding: 24px;
                    border-radius: 24px;
                    text-decoration: none;
                    color: #fff;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .terminal-card:hover {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: #ff0080;
                    transform: translateX(10px);
                }

                .method-icon {
                    width: 48px;
                    height: 48px;
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #888; /* Default icon color */
                    transition: all 0.4s ease;
                    flex-shrink: 0;
                }

                .terminal-card:hover .method-icon {
                    background: var(--brand-color);
                    color: #fff; /* Icons turn white on brand color background */
                    box-shadow: 0 0 25px var(--brand-glow);
                }

                .method-icon svg {
                    width: 24px;
                    height: 24px;
                }

                .method-info {
                    flex-grow: 1;
                }

                .method-tag {
                    font-family: monospace;
                    font-size: 0.6rem;
                    color: #555;
                    margin-bottom: 4px;
                    display: block;
                    letter-spacing: 1px;
                }

                .method-value {
                    font-weight: 700;
                    font-size: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .external-icon {
                    opacity: 0.2;
                    transition: 0.3s;
                }

                .terminal-card:hover .external-icon {
                    opacity: 1;
                    color: #ff0080;
                    transform: translate(2px, -2px);
                }

                @media (max-width: 900px) {
                    .command-center { grid-template-columns: 1fr; }
                    .main-portal { padding: 40px; }
                }
            `}</style>

            <div className="header-area">
                <h2>Get In <span>Touch</span></h2>
            </div>

            <div className="command-center">
                <div className="main-portal">
                    <div className="availability">
                        <div className="pulse"></div>
                        AVAILABLE FOR NEW PROJECTS
                    </div>
                    <h3 className="portal-title">Let's build something <br /> exceptional.</h3>
                    <p style={{ color: '#666', lineHeight: '1.6', fontSize: '1.1rem' }}>
                        Whether you have a question or just want to say hi, my inbox is always open!
                    </p>
                </div>

                <div className="side-terminal">
                    {CONTACT_METHODS.map((method) => (
                        <a
                            key={method.label}
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="terminal-card"
                            style={{
                                "--brand-color": method.color,
                                "--brand-glow": `${method.color}88` // Increased glow opacity
                            } as React.CSSProperties}
                        >
                            <div className="method-icon">
                                {method.icon}
                            </div>
                            <div className="method-info">
                                <span className="method-tag">{method.tag} // {method.label}</span>
                                <div className="method-value">
                                    {/* {method.value} */}
                                    <span className="external-icon"> take a look
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}