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
          <div>
            {data.slice(0, 3).map((item, index) => (
              <div key={index}>
                <div
                  style={{ border: `4px solid ${item.color}` }}
                  className={classes.imageWrapper}
                >
                  <div
                    className={classes.layer}
                    style={{ backgroundColor: item.color }}
                  >
                    <img src={item.img} alt="name" />
                    <div>
                      <p className={classes.description}>{item.description}</p>
                      <a href={item.link}>
                        <button style={{ backgroundColor: item.color }}>
                          Visit
                        </button>
                      </a>
                    </div>
                  </div>
                  <img src={item.img} alt="name" />
                </div>
              </div>
            ))}
          </div>
          <div>
            {data.slice(3).map((item, index) => (
              <div key={index}>
                <div
                  style={{ border: `4px solid ${item.color}` }}
                  className={classes.imageWrapper}
                >
                  <div
                    className={classes.layer}
                    style={{ backgroundColor: item.color }}
                  >
                    <img src={item.img} alt="name" />
                    <div>
                      <p className={classes.description}>{item.description}</p>
                      <button style={{ backgroundColor: item.color }}>
                        Visit
                      </button>
                    </div>
                  </div>
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
