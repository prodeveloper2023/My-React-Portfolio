// import React, { useState } from "react";

// import styles from "./Navbar.module.css";
// import { getImageUrl } from "../../utils";

// export const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className={styles.navbar}>
//       <a className={styles.title} href="/">
//         Portfolio
//       </a>
//       <div className={styles.menu}>
//         <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt="menu-button" onClick={() => setMenuOpen(!menuOpen)} />
//         <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
//           <li>
//             <a href="#about">About</a>
//           </li>
//           <li>
//             <a href="#experience">Experience</a>
//           </li>
//           <li>
//             <a href="#projects">Projects</a>
//           </li>
//           <li>
//             <a href="#about">Contact</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.title} to="/">
        Portfolio
      </NavLink>
      <div className={styles.menu}>
        <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt="menu-button" onClick={() => setMenuOpen(!menuOpen)} />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>
          <li className="nav-item">
            <NavLink to="/about" className={styles.navLink}>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/skills" className={styles.navLink}>
              Skills
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className={styles.navLink}>
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={styles.navLink}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
