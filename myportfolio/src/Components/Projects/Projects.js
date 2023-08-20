import React, { useEffect } from "react";
import classes from "./Projects.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <section>
      <main className={classes.main}>
        <div id="projects" className={classes.projectTypeWrapper}>
          <div className={classes.projectTypeLive}>
            <h4>Live</h4>
          </div>
          <div className={classes.projectTypeDemo}>
            <h4>Demo</h4>
          </div>
        </div>

        <div className={classes.projectBlock}>
          <div className={classes.projectTypeLiveNew}>
            <h4>Live</h4>
          </div>
          <div className={classes.pad}>
            {data.slice(0, 3).map((item, index) => (
              <div className={classes.margin} key={index}>
                <div
                  data-aos="fade-up"
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
          <div className={classes.projectTypeDemoNew}>
            <h4>Demo</h4>
          </div>
          <div>
            {data.slice(3).map((item, index) => (
              <div className={classes.margin} key={index}>
                <div
                  data-aos="fade-up"
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
        </div>
      </main>
    </section>
  );
};

export default Projects;
