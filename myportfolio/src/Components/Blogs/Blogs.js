import React from "react";
import classes from "./Blogs.module.css";

const Blogs = ({ data }) => {
  return (
    <section>
      <div className={classes.headerBox}>
        <h4>Blogs</h4>
      </div>
      <div className={classes.blogsContainer}>
        {data.map((item) => (
          <div className={classes.imageBox}>
            <div
              className={`${classes.imageWrapper} ${
                item.tag === "2" ? classes.right : ""
              }`}
            >
              <img
                style={{ border: `4px solid ${item.color}` }}
                src={item.image}
                alt={item.name}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
