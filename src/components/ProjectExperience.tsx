"use client";

import React from "react";

const PROFESSIONAL_PROJECTS = [
    {
        id: "p1",
        company: "DaivTech",
        role: "Software Engineer",
        duration: "Jan 2025 — Present",
        projects: [
            {
                title: "Scalable SaaS Backend",
                desc: "Architected a multi-tenant backend system capable of handling high-concurrency requests.",
                impact: [
                    "Optimized database schemas resulting in 40% faster query performance.",
                    "Increased system throughput by 2.5x through efficient resource allocation.",
                    "Significantly reduced server infrastructure costs by optimizing cloud instances."
                ],
                tech: ["Node.js", "PostgreSQL", "Redis", "AWS"]
            },
            {
                title: "Global Payment Orchestration",
                desc: "Integrated Stripe and Razorpay to support multi-currency transactions across different regions.",
                impact: [
                    "Ensured 100% PCI-DSS compliance and implemented robust error handling.",
                    "Enabled seamless cross-border payments for users across 15+ countries.",
                    "Reduced transaction failure rates by 15% through intelligent webhook retry logic."
                ],
                tech: ["Express", "Stripe API", "Razorpay", "Webhooks"]
            }
        ]
    },
    {
        id: "p2",
        company: "Iamneo",
        role: "Software Engineer",
        duration: "May 2022 — Jan 2025",
        projects: [
            {
                title: "Result Evaluation Engine",
                desc: "Built a high-performance engine for automated code grading in a distributed environment.",
                impact: [
                    "Reduced evaluation latency by 60% through containerized execution environments.",
                    "Handled 100k+ concurrent submissions during peak exam periods with zero downtime.",
                    "Implemented an isolated sandboxing layer to prevent malicious code execution."
                ],
                tech: ["Docker", "Kubernetes", "Microservices", "RabbitMQ"]
            }
        ]
    }
];

export default function ProjectExperience({ id }: { id: string }) {
    return (
        <section id={id} className="sequential-wrapper">
            <style>{`
                .sequential-wrapper {
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
                    letter-spacing: -2px;
                    margin: 0;
                    color: #fff;
                    text-transform: uppercase;
                }

                .header-centered span {
                    color: transparent;
                    -webkit-text-stroke: 1px #ff0080;
                }

                .company-section {
                    margin-bottom: 120px;
                }

                .company-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    padding-bottom: 20px;
                    margin-bottom: 50px;
                }

                .company-name {
                    font-size: 2.2rem;
                    font-weight: 800;
                    margin: 0;
                }

                .company-meta {
                    text-align: right;
                }

                .role-text {
                    display: block;
                    color: #ff0080;
                    font-family: monospace;
                    font-size: 1rem;
                    font-weight: 600;
                }

                .duration-text {
                    font-size: 0.85rem;
                    color: rgba(255, 255, 255, 0.4);
                    font-family: monospace;
                }

                .project-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 60px;
                }

                .project-item {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 50px;
                }

                .project-info h4 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin: 0 0 15px 0;
                    color: #fff;
                }

                .project-desc {
                    color: rgba(255, 255, 255, 0.5);
                    line-height: 1.7;
                    font-size: 1rem;
                }

                /* Impact Points Styling */
                .impact-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .impact-item {
                    position: relative;
                    padding-left: 25px;
                    margin-bottom: 12px;
                    font-size: 0.95rem;
                    color: #E0F7FA;
                    line-height: 1.5;
                }

                .impact-item::before {
                    content: "→";
                    position: absolute;
                    left: 0;
                    color: #ff0080;
                    font-weight: 900;
                }

                .tech-row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-top: 25px;
                }

                .tech-pill {
                    font-family: monospace;
                    font-size: 0.7rem;
                    color: #ff0080;
                    background: rgba(255, 0, 128, 0.05);
                    border: 1px solid rgba(255, 0, 128, 0.2);
                    padding: 4px 12px;
                    border-radius: 4px;
                    text-transform: uppercase;
                }

                @media (max-width: 850px) {
                    .project-item { grid-template-columns: 1fr; gap: 30px; }
                    .company-header { flex-direction: column; align-items: flex-start; gap: 10px; }
                    .company-meta { text-align: left; }
                }
            `}</style>

            <div className="header-centered">
                <h2>Project <span>Experience</span></h2>
            </div>

            {PROFESSIONAL_PROJECTS.map((comp) => (
                <div key={comp.id} className="company-section">
                    <div className="company-header">
                        <h3 className="company-name">{comp.company}</h3>
                        <div className="company-meta">
                            <span className="role-text">{comp.role}</span>
                            <span className="duration-text">{comp.duration}</span>
                        </div>
                    </div>

                    <div className="project-grid">
                        {comp.projects.map((project, idx) => (
                            <div key={idx} className="project-item">
                                <div className="project-info">
                                    <h4>{project.title}</h4>
                                    <p className="project-desc">{project.desc}</p>
                                    <div className="tech-row">
                                        {project.tech.map(t => (
                                            <span key={t} className="tech-pill">{t}</span>
                                        ))}
                                    </div>
                                </div>

                                <div className="impact-container">
                                    <ul className="impact-list">
                                        {project.impact.map((point, pIdx) => (
                                            <li key={pIdx} className="impact-item">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}