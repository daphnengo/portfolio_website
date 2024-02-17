import React from 'react';
import './intro.css';
import profile from '../../assets/profile.jpg';
import hiremebtn from '../../assets/hiremebtn.jpeg';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <div className="nameContent">
                    <span className="introText">I'm</span>
                    <span className="introName">Dang Nhi Ngo</span>
                </div>
                <span className="">Software Engineer</span>
                <p className="introPara"> I am a skilled software engineer with experience in <br /> front-end web developments</p>
                <Link>
                    <button className="hireMeBtn">
                        <img src={hiremebtn} alt="Hire Me" className="hireMeImg" />Hire Me
                    </button>
                </Link>
            </div>
            <img src={profile} alt="Profile" className="profile" />
        </section>
    );
};

export default Intro;
