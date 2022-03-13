import React from 'react';

const PortfolioItem = ({ item }) => {
    const { image, title, github, demo } = item;
    return (
        <article className={'portfolio__item'}>
            <div className="portfolio__item-image">
                <img src={image} alt="project"/>
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
                <a href={github} className={'btn'} target={'_blank'} rel="noreferrer">GitHub</a>
                <a href={demo} className={'btn btn-primary'} target={'_blank'} rel="noreferrer">Live
                    Demo</a>
            </div>
        </article>
    );
}

export default PortfolioItem;