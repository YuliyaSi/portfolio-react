import React from 'react';
import "./Header.css"
import CTA from "./cta";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello, I'm</h5>
                <h1>Yuliya Sidarenka</h1>
                <h5 className="text-light">Junior Frontend React Developer</h5>
                <CTA/>
                <HeaderSocials/>
                <a href="#contact" className={"scroll__down"}>Scroll down</a>
            </div>
        </header>
    );
}

export default Header;