"use client";

import React from "react";

const EXP_DATA = [
  {
    year: "2025",
    company: "DaivTech, Coimbatore",
    role: "Software Engineer",
    duration: "Jan 2025 — Present",
    points: [
      "Architected scalable SaaS backend systems with optimized database schemas.",
      "Developed booking systems featuring complex slot management and transactional flows.",
      "Integrated secure global payment orchestrations via Stripe and Razorpay.",
      "Implemented real-time video connectivity using Zoom API integrations."
    ]
  },
  {
    year: "2022",
    company: "Iamneo, Coimbatore",
    role: "Software Engineer",
    duration: "May 2022 — Jan 2025",
    points: [
      "Optimized result evaluation engines, drastically reducing error rates within 30 days.",
      "Managed Dockerized full-stack environments using Kubernetes and Azure.",
      "Built custom Chrome extensions for real-time exam integrity monitoring.",
      "Developed biometric security modules including face liveness detection."
    ]
  }
];

export default function Experience({ id }: { id: string }) {
  return (
    <section id={id} className="parallax-section">
      <style>{`
        .parallax-section {
          padding: 100px 24px;
          max-width: 1100px;
          margin: 0 auto;
          color: #fff;
          font-family: 'Inter', system-ui, sans-serif;
        }

        /* Updated Header Area to match Contact component structure */
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
            -webkit-text-stroke: 1px var(--sky-cyan);
        }

        /* End of Header update */

        .exp-container {
          display: flex;
          flex-direction: column;
          gap: 120px;
        }

        .exp-block {
          display: flex;
          align-items: center;
          gap: 60px;
          position: relative;
        }

        .year-side {
          font-size: clamp(5rem, 12vw, 9rem);
          font-weight: 900;
          line-height: 0.8;
          flex: 1;
          user-select: none;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
          position: relative;
          transition: transform 1.2s cubic-bezier(0.22, 1, 0.36, 1), -webkit-text-stroke 0.5s ease;
        }

        .year-side::after {
          content: attr(data-year);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          color: transparent;
          -webkit-text-stroke: 1px var(--sky-cyan);
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 50%,
            transparent 100%
          );
          mask-size: 200% 100%;
          mask-repeat: no-repeat;
          mask-position: -150% 0;
          transition: mask-position 0s;
          pointer-events: none;
        }

        .exp-block:hover .year-side {
          transform: translateX(30px) scale(1.05);
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
        }

        .exp-block:hover .year-side::after {
          animation: passingLight 2.5s linear infinite;
        }

        @keyframes passingLight {
          from { mask-position: -150% 0; }
          to { mask-position: 150% 0; }
        }

        .content-side {
          flex: 1.2;
        }

        .company-tag {
          color: var(--sky-cyan);
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 3px;
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }

        .role-title {
          font-size: 2.2rem;
          font-weight: 800;
          margin: 0 0 20px 0;
          letter-spacing: -1px;
        }

        .points-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .points-list li {
          color: #999;
          line-height: 1.6;
          font-size: 1rem;
          margin-bottom: 12px;
          position: relative;
          padding-left: 24px;
        }

        .points-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 12px;
          width: 12px;
          height: 1px;
          background: var(--sky-primary);
        }

        .duration-text {
          font-family: monospace;
          color: #555;
          font-weight: 600;
          letter-spacing: 0;
          text-transform: none;
        }

        .reverse {
          flex-direction: row-reverse;
          text-align: right;
        }

        .reverse .company-tag {
          justify-content: flex-end;
        }

        .reverse:hover .year-side {
          transform: translateX(-30px) scale(1.05);
        }

        .reverse .points-list li {
          padding-left: 0;
          padding-right: 24px;
        }

        .reverse .points-list li::before {
          left: auto;
          right: 0;
        }

        @media (max-width: 900px) {
          .exp-block, .reverse {
            flex-direction: column;
            text-align: left;
            gap: 20px;
          }
          .reverse .company-tag { justify-content: flex-start; }
          .exp-block:hover .year-side, .reverse:hover .year-side {
            transform: translateY(-10px);
          }
          .year-side { font-size: 5rem; }
          .role-title { font-size: 1.8rem; }
          .reverse .points-list li { padding-right: 0; padding-left: 24px; text-align: left; }
          .reverse .points-list li::before { right: auto; left: 0; }
        }
      `}</style>

      <div className="header-area">
        <h2>Professional <span>Experience</span></h2>
      </div>

      <div className="exp-container">
        {EXP_DATA.map((job, index) => (
          <div key={index} className={`exp-block ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="year-side" data-year={job.year}>{job.year}</div>

            <div className="content-side">
              <div className="company-tag">
                {job.company}
                <span className="duration-text">// {job.duration}</span>
              </div>
              <h3 className="role-title">{job.role}</h3>
              <ul className="points-list">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}