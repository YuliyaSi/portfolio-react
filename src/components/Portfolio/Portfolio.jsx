import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Portfolio.css"
import {data} from "../../data";
import PortfolioItem from "./PortfolioItem";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

const Portfolio = () => {
    return (
        <section id={'portfolio'}>
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>
                <Swiper
                    pagination={{
                        type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="container portfolio__container"
                >
                    {data.map(item => <SwiperSlide>
                        <PortfolioItem key={item.id} item={item}/>
                    </SwiperSlide>)}
                </Swiper>
        </section>
    );
}

export default Portfolio;