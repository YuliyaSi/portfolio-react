import React from 'react';
import "./Testimonials.css"
import {reviews} from "../../data";
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    return (
        <section id={'testimonials'}>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper modules={[ Pagination ]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    className="container testimonial__container">
                {reviews.map(item => <SwiperSlide>
                    <article className="testimonial" key={item.id}>
                        <div className="client__avatar">
                            <img src={item.avatar} alt="client"/>
                        </div>
                        <h5 className={'client__name'}>{item.name}</h5>
                        <small className={'client__review'}>{item.review}</small>
                    </article>
                </SwiperSlide>)}
            </Swiper>

        </section>
    );
}

export default Testimonials;