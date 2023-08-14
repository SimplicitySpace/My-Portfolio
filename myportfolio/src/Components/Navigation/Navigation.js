import React from "react";
import classes from "./Navigation.module.css";

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
        <p>Blog</p>
        <p>Projects</p>
        <p>Store</p>
      </div>
    </section>
  );
};

export default Navigation;
