import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:palindrome1988@gmail.com">My E-mail</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
            <a href="https://www.linkedin.com/in/md-tanvirul-islam-340ab256/">My linkedin</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a href="https://github.com/prodeveloper2023">My GitHub</a>
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className={`${styles.content} ${styles.formContainer}`}>
        <form className={styles.form}>
          <input type="text" className="form-control" placeholder="Name" />
          <input type="email" className="form-control" placeholder="Email" />
          <textarea className="form-control" rows="4" placeholder="Message"></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Contact;
