import React from "react";
import classes from "./Projects.module.css";
const Projects = ({ data }) => {
  return (
    <section>
      <main className={classes.main}>
        <div className={classes.projectTypeWrapper}>
          <div className={classes.projectTypeLive}>
            <h4>Live</h4>
          </div>
          <div className={classes.projectTypeDemo}>
            <h4>Demo</h4>
          </div>
        </div>

        <div className={classes.projectBlock}>
          <div className={classes.projectsWrapper}>
            {data.slice(0, 3).map((item, index) => (
              <div key={index}>
                <div
                  style={{ border: `4px solid ${item.color}` }}
                  className={classes.imageWrapper}
                >
                  <img src={item.img} alt="name" />
                </div>
              </div>
            ))}
          </div>
          <div className={classes.projectsWrapper}>
            {data.slice(3).map((item, index) => (
              <div key={index}>
                <div
                  style={{ border: `4px solid ${item.color}` }}
                  className={classes.imageWrapper}
                >
                  <img src={item.img} alt="name" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Projects;
