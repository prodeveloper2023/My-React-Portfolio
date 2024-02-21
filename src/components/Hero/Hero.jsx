import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Md Tanvirul Islam</h1>
        <p className={styles.description}>
          As a front-end developer, I create captivating digital experiences with elegant design and cutting-edge technology. My focus is on crafting intuitive interfaces and immersive web applications that elevate brands and engage users. Reach out
          if you'd like to learn more!
        </p>
        <div className={styles.buttonContainer}>
          {/* "Contact Me" button */}
          <a href="mailto:palindrome1988@gmail.com" className={`${styles.contactBtn} ${styles.contactMeBtn}`}>
            Contact Me
          </a>
          {/* "View My Resume" button */}
          <a href="assets/resume/cv.mdtislam.docx.pdf" download className={`${styles.contactBtn} ${styles.viewResumeBtn}`}>
            Download My Resume
          </a>
        </div>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      <div>fin</div>
    </section>
  );
};

export default Hero;
