import React from "react";
import classes from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={classes.section}>
      <div className={classes.headerTag}>
        <h1>Front&nbsp;End Developer</h1>
      </div>
      <div className={classes.subHeadingTag}>
        <h4>
          Proficient in HTML, CSS, Javascript, Dart(Flutter) with experience in
          responsive <br /> design and cross-browser compatibility.
        </h4>
      </div>
    </section>
  );
};

export default Hero;
