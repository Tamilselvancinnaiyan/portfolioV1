"use client";

import React from "react";

export default function Skills({ id }: { id: string }) {
    return (
        <section id={id} className="skills-section">
            <style>{`
        .skills-section {
          padding: 100px 24px;
          max-width: 1100px;
          margin: 0 auto;
          color: #fff;
          font-family: 'Inter', system-ui, sans-serif;
        }

        /* Unified Stroke Header */
        .header-area {
            text-align: center;
            margin-bottom: 100px;
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

        /* Bento Grid with Obsidian Glass */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: auto;
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .bento-item {
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 32px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .bento-item:hover {
          border-color: #ff0080;
          background: rgba(0, 0, 0, 0.6);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        /* Grid Spanning */
        .large { grid-column: span 2; }
        .tall { grid-row: span 2; }

        .skill-chip {
          display: inline-block;
          background: rgba(255, 255, 255, 0.03);
          padding: 8px 18px;
          border-radius: 12px;
          margin: 4px;
          font-size: 0.85rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: 0.3s;
        }

        .bento-item:hover .skill-chip {
            background: rgba(255, 255, 255, 0.06);
            color: #fff;
            border-color: rgba(255, 255, 255, 0.1);
        }

        .stat-number {
          font-size: 4rem;
          font-weight: 900;
          display: block;
          line-height: 1;
          margin-bottom: 0.5rem;
          background: linear-gradient(90deg, #ff0080, #7928ca);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .description {
          color: rgba(255, 255, 255, 0.5);
          font-size: 1rem;
          line-height: 1.6;
        }

        h3 {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
        }

        @media (max-width: 900px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr); }
          .large { grid-column: span 2; }
        }

        @media (max-width: 600px) {
          .bento-grid { grid-template-columns: 1fr; }
          .large, .tall { grid-column: span 1; grid-row: span 1; }
          .header-area { margin-bottom: 60px; }
        }
      `}</style>

            <div className="header-area">
                <h2>Capabilities <span>& Tools</span></h2>
            </div>

            <div className="bento-grid">
                {/* Box 1: Core Backend */}
                <div className="bento-item large">
                    <h3>Backend Mastery</h3>
                    <div className="skill-chip">Node.js</div>
                    <div className="skill-chip">Java</div>
                    <div className="skill-chip">Python</div>
                    <div className="skill-chip">Shell Scripting</div>
                    <p className="description" style={{ marginTop: '20px' }}>
                        Architecting scalable server-side systems with a focus on performance and isolated execution.
                    </p>
                </div>

                {/* Box 2: Experience Stat */}
                <div className="bento-item tall" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <span className="stat-number">3+</span>
                    <p style={{ fontWeight: '800', fontSize: '1.1rem', letterSpacing: '1px' }}>YEARS EXP</p>
                    <p className="description">Full-Stack Dev</p>
                </div>

                {/* Box 3: Databases */}
                <div className="bento-item">
                    <h3>Data</h3>
                    <div className="skill-chip">PostgreSQL</div>
                    <div className="skill-chip">NoSQL</div>
                    <div className="skill-chip">Redis</div>
                </div>

                {/* Box 4: DevOps & Cloud */}
                <div className="bento-item large">
                    <h3>Cloud & Infrastructure</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', marginBottom: '15px' }}>
                        <span style={{ color: '#4285F4', fontWeight: '700' }}>GCP</span>
                        <span style={{ color: '#FF9900', fontWeight: '700' }}>AWS</span>
                        <span style={{ color: '#2496ED', fontWeight: '700' }}>Docker</span>
                        <span style={{ color: '#326CE5', fontWeight: '700' }}>K8s</span>
                    </div>
                    <p className="description">Optimizing CI/CD pipelines and managing containerized orchestrations.</p>
                </div>

                {/* Box 5: Automation */}
                <div className="bento-item">
                    <h3>Automation</h3>
                    <p className="description">Selenium Expert</p>
                    <div className="skill-chip" style={{ marginTop: '10px' }}>REST API Testing</div>
                </div>

                {/* Box 6: Frontend */}
                <div className="bento-item">
                    <h3>Frontend</h3>
                    <div className="skill-chip">Next.js</div>
                    <div className="skill-chip">Angular</div>
                </div>
            </div>
        </section>
    );
}