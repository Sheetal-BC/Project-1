import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="title" id="about">
        <h1>BUILDING CHANGE</h1>
      </div>
      <div>
        <div className="about">
          <div className="about_img"></div>
          <div>
            <div className="about_text">
              <div className="about_text1">
                <div>
                  <h1>P</h1>
                </div>
                <div>
                  <h2>
                    PROBLEM <br /> SOLVING SKILL
                  </h2>
                  <p>
                    We believe to nurture problem <br /> solvers,who lead
                    better.
                  </p>
                </div>
              </div>

              <div className="about_text2">
                <div>
                  <h1>R</h1>
                </div>
                <div>
                  <h2> RELIABILITY</h2>
                  <p>
                    We believe transperancy is the first <br /> step to any
                    beginning.
                  </p>
                </div>
              </div>

              <div className="about_text3">
                <div>
                  <h1>I</h1>
                </div>
                <div>
                  <h2>
                    {" "}
                    INNOVATIVE <br /> THINKING
                  </h2>
                  <p>
                    We encourage innovative ideas and <br /> improvising new
                    things.
                  </p>
                </div>
              </div>
              <div className="about_text4">
                <div>
                  <h1>M</h1>
                </div>
                <div>
                  <h2>
                    MANAGEMENT <br /> SKILLS
                  </h2>
                  <p>
                    We thrive on good communication <br /> and motivation.
                  </p>
                </div>
              </div>
              <div className="about_text5">
                <div>
                  <h1>E</h1>
                </div>
                <div>
                  <h2>ENGAGEMENT</h2>
                  <p>
                    Team work is the secret to achieve <br /> uncommon results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
