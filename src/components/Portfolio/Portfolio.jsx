import React from 'react';
import "./Portfolio.css"
import {data} from "../../data";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
    return (
        <section id={'portfolio'}>
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {data.map(item => <PortfolioItem key={item.id} item={item}/>)}
            </div>
        </section>
    );
}

export default Portfolio;