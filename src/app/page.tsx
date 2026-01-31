import Link from "next/link";
import styles from "./page.module.css";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.hero} id="home">
        <div className={styles.content}>
          <span className={styles.greeting}>Hi, I&#39;m</span>
          <h1 className={styles.title}>Tamilselvan</h1>
          <h2 className={styles.subtitle}>
            Full-Stack Developer | Backend-Focused | Cloud & Scalable Systems
          </h2>
          <p className={styles.description}>
            I design and build scalable, secure, and high-performance web applications.
          </p>

          <div className={styles.buttonGroup}>
            <Link href="#projects" className={styles.primaryBtn}>
              View Projects <span>→</span>
            </Link>
            <a href="/resume.pdf" download className={styles.secondaryBtn}>
              <span>↓</span> Download Resume
            </a>
          </div>
        </div>
      </div>

      <Skills id="skills" />
      <Experience id="experience" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  );
}
