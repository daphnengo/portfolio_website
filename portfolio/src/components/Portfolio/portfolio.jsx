import React from 'react';
import './portfolio.css';
import project1 from '../../assets/project1.jpeg';
import project2 from '../../assets/project2.jpeg';
import project3 from '../../assets/project3.jpeg';
import project4 from '../../assets/project4.jpeg';
import project5 from '../../assets/project5.jpeg';
import project6 from '../../assets/project6.jpeg';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2 className="portfolioTitle">My Portfolio</h2>
            <span className="portfolioDesc">Add my work descriptions here</span>
            <div className="portfolioImgs">
                <img src={project1} alt="" className="portfolioImg" />
                <img src={project2} alt="" className="portfolioImg" />
                <img src={project3} alt="" className="portfolioImg" />
                <img src={project4} alt="" className="portfolioImg" />
                <img src={project5} alt="" className="portfolioImg" />
                <img src={project6} alt="" className="portfolioImg" />
            </div>
            <button className="portfolioBtn">See more</button>
        </section>
    );
};

export default Portfolio;
