"use client";

import React from "react";

const PROJECT_DATA = [
    {
        id: "01",
        category: "Backend Architecture",
        title: "Evaluation Engine",
        desc: "A high-performance processing engine for real-time code evaluation, featuring automated grading logic and isolated execution environments.",
        tech: ["Node.js", "Docker", "Redis", "K8s"],
        github: "https://github.com",
        live: "https://demo.com"
    },
    {
        id: "02",
        category: "Computer Vision",
        title: "Face Liveness AI",
        desc: "Biometric security module developed to prevent identity spoofing in remote proctoring environments using real-time facial analysis.",
        tech: ["Python", "OpenCV", "Azure", "TensorFlow"],
        github: "https://github.com",
        live: "https://demo.com"
    }
];

export default function Projects({ id }: { id: string }) {
    return (
        <section id={id} className="projects-wrapper">
            <style>{`
                .projects-wrapper {
                    max-width: 1100px;
                    margin: 0 auto;
                    padding: 100px 24px;
                    color: #fff;
                    font-family: 'Inter', system-ui, sans-serif;
                }

                .header-centered {
                    text-align: center;
                    margin-bottom: 100px;
                }

                .header-centered h2 {
                    font-size: clamp(2.5rem, 6vw, 4rem);
                    font-weight: 900;
                    letter-spacing: -3px;
                    margin: 0;
                }

                .header-centered span {
                    color: transparent;
                    -webkit-text-stroke: 1px #ff0080;
                }

                .projects-column {
                    display: flex;
                    flex-direction: column;
                    gap: 100px;
                }

                .floating-card {
                    display: grid;
                    grid-template-columns: 1fr 350px;
                    gap: 0;
                    position: relative;
                    transition: all 0.5s ease;
                }

                /* Obsidian Glass Effect (Black Glass) */
                .main-tile {
                    background: rgba(0, 0, 0, 0.4); /* Dark transparency */
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 255, 255, 0.08); /* Light edge to define shape */
                    padding: 60px;
                    border-radius: 40px;
                    position: relative;
                    z-index: 2;
                    transition: all 0.4s ease;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
                }

                .floating-card:hover .main-tile {
                    border-color: rgba(255, 0, 128, 0.5);
                    background: rgba(0, 0, 0, 0.6);
                    transform: translateY(-5px);
                }

                /* Dark Glass Side Panel */
                .side-panel {
                    padding: 40px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    transform: translateX(-40px);
                    background: rgba(0, 0, 0, 0.3);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 40px;
                    margin: 40px 0;
                    z-index: 1;
                    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .floating-card:hover .side-panel {
                    transform: translateX(20px);
                    border-color: #ff0080;
                    background: rgba(0, 0, 0, 0.5);
                }

                .p-id {
                    font-family: monospace;
                    color: #ff0080;
                    font-weight: bold;
                    display: block;
                    margin-bottom: 10px;
                }

                .p-title {
                    font-size: clamp(2rem, 4vw, 3rem);
                    font-weight: 800;
                    margin-bottom: 20px;
                    letter-spacing: -2px;
                    /* Subtle glow on title */
                    text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
                }

                .p-desc {
                    color: rgba(255, 255, 255, 0.5);
                    line-height: 1.7;
                    font-size: 1.1rem;
                    max-width: 90%;
                }

                .tech-cloud {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }

                .tech-item {
                    font-size: 0.7rem;
                    background: rgba(255, 255, 255, 0.03);
                    padding: 5px 12px;
                    border-radius: 6px;
                    color: rgba(255, 255, 255, 0.4);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    border: 1px solid rgba(255, 255, 255, 0.03);
                }

                .link-group {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .link-item {
                    text-decoration: none;
                    color: #fff;
                    font-weight: 700;
                    font-size: 0.8rem;
                    letter-spacing: 1px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    transition: all 0.3s;
                }

                .link-item:hover {
                    color: #ff0080;
                    text-shadow: 0 0 10px rgba(255, 0, 128, 0.3);
                }

                .arrow-icon {
                    width: 14px;
                    height: 14px;
                    transition: transform 0.3s;
                }

                .link-item:hover .arrow-icon {
                    transform: translate(3px, -3px);
                }

                @media (max-width: 1000px) {
                    .floating-card { grid-template-columns: 1fr; }
                    .side-panel { transform: none; margin: -20px 20px 0 20px; }
                    .floating-card:hover .side-panel { transform: translateY(10px); }
                    .main-tile { padding: 40px; }
                }
            `}</style>

            <div className="header-centered">
                <h2>Project <span>Archive</span></h2>
            </div>

            <div className="projects-column">
                {PROJECT_DATA.map((proj) => (
                    <div key={proj.id} className="floating-card">
                        <div className="main-tile">
                            <span className="p-id">// {proj.id}</span>
                            <h3 className="p-title">{proj.title}</h3>
                            <p className="p-desc">{proj.desc}</p>
                        </div>

                        <div className="side-panel">
                            <div className="tech-cloud">
                                {proj.tech.map(t => (
                                    <span key={t} className="tech-item">{t}</span>
                                ))}
                            </div>

                            <div className="link-group">
                                <a
                                    href={proj.github}
                                    className="link-item"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    SOURCE CODE
                                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </a>
                                <a
                                    href={proj.live}
                                    className="link-item"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LIVE PREVIEW
                                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <line x1="7" y1="17" x2="17" y2="7"></line>
                                        <polyline points="7 7 17 7 17 17"></polyline>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}