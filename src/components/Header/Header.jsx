import React from 'react';
import "./Header.css"
import CTA from "./cta";
import HeaderSocials from "./HeaderSocials";
import me from "../../assets/about-yuliya (2).png"

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <section className="header__photo">
                    <div className="header__photo-img">
                        <img src={me} alt="me"/>
                    </div>
                </section>
                <section className="header__info">
                    <h5>Hello, I'm</h5>
                    <h1>Yuliya Sidarenka</h1>
                    <h5 className="text-light">Junior Frontend React Developer</h5>
                    <CTA/>
                    <HeaderSocials/>
                    <a href="#contact" className={"scroll__down"}>Scroll down</a>
                </section>

            </div>
        </header>
    );
}

export default Header;