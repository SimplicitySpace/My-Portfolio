import React from "react";
import classes from "./Navigation.module.css";
import { Link } from "react-scroll";
const Navigation = () => {
  return (
    <section className={classes.navigation}>
      <div className={classes.logoBox}>
        <img
          className={classes.logo}
          src="https://res.cloudinary.com/da3avivzn/image/upload/v1692023743/My%20Portfolio/Black_and_White_Collection_12_o7jg7z.png"
          alt="logo"
        />
      </div>
      <div className={classes.navLinks}>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          {" "}
          <p>Projects</p>
        </Link>
        <Link to="store" spy={true} smooth={true} offset={-100} duration={500}>
          <p>Contact</p>
        </Link>
      </div>
    </section>
  );
};

export default Navigation;
