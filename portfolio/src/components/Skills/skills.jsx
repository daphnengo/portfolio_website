import React from 'react';
import "./skills.css";
import react from "../../assets/react.png";
import javascript from "../../assets/javascript.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";

const Skills = () => {
    return (
        <section id="skills">
            <h1 className="skillsTitle">Skills</h1>
            <p className="skillsDesc">
                Add my skills here
            </p>
            <div className="skillsImgs">
                <img src={react} alt="" className="skillsImg" />
                <img src={javascript} alt="" className="skillsImg" />
                <img src={html} alt="" className="skillsImg" />
                <img src={css} alt="" className="skillsImg" />
            </div>
        </section>
    )
}

export default Skills;
