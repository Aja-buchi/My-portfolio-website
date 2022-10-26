import React from "react";
import "../../styles/About.css";

import { FaAward } from "react-icons/fa";
import { BsFolder } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

var ProjectNumber;

fetch("https://api.github.com/users/losier")
  .then((response) => response.json())
  .then((data) => {
    ProjectNumber = `${data.public_repos + data.public_gists + "+"}`;
  })
  .catch(() => {
    ProjectNumber = "60+";
  });

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        {/* <div className="about_me"> */}
        {/* <div className="about_me-image">
            <img src={About_Image} alt="profile_pic" />
          </div> */}
        <div className="me image-card">
          <img
            src={require("../../assets/Pics/profile_picture.jpeg")}
            alt="me"
          />
        </div>
        {/* </div> */}

        <div className="about_content">
          <div className="about_card">
            <article className="about_card-content">
              <FaAward className="about_icons" />
              <h5>Experience</h5>
              <small>Learning never ends</small>
            </article>

            <article className="about_card-content">
              <BsFolder className="about_icons" />
              <h5>Projects</h5>
              <small>{ProjectNumber}</small>
            </article>

            <article className="about_card-content">
              <BsStar className="about_icons" />
              <h5>Achivements</h5>
              <small>69</small>
            </article>
          </div>
          <p>
            Hello ! My name is <span>Aja Onyebuchi</span> and I am focused on delivering value and excellence through passionate learning and innovation while executing best practices using TDD, BDD and innovations to solve life problems.
            <br />I am a creative problem solver who loves to create and is
            always trying new things.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
