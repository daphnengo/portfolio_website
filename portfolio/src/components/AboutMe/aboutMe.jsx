import React from 'react';
import './aboutMe.css';
import webDesign from '../../assets/webDesign.jpeg';
import appDesign from '../../assets/appDesign.png';
import uiDesign from '../../assets/uiDesign.png';

const AboutMe = () => {
    return (
        <section id="aboutMe">
            <span className="aboutMeTitle">What I do</span>
            <span className="aboutMeDesc">Describe something that I do as a software engineer</span>
            <div className="aboutMeBars">
                <div className="aboutMeBar">
                    <img src={webDesign} alt="WebDesign" className="aboutMeBarImg" />
                    <div className="aboutMeText">
                        <h2>Web Design</h2>
                        <p>Content</p>
                    </div>
                </div>
                <div className="aboutMeBar">
                    <img src={appDesign} alt="AppDesign" className="aboutMeBarImg" />
                    <div className="aboutMeText">
                        <h2>App Design</h2>
                        <p>Content</p>
                    </div>
                </div>
                <div className="aboutMeBar">
                    <img src={uiDesign} alt="UIDesign" className="aboutMeBarImg" />
                    <div className="aboutMeText">
                        <h2>UX/UI Design</h2>
                        <p>Content</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
