import React from 'react';
import "./Header.css"
import CTA from "./cta";
import HeaderSocials from "./HeaderSocials";
import me from "../../assets/about-yuliya (2).png"

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <div className="header__photo">
                    <div className="header__photo-img">
                        <img src={me} alt="me"/>
                    </div>
                </div>
                <div className="header__info">
                    <div className="header__info-name">
                        <p>Yuliya</p>
                        <p>Sidarenka</p>
                    </div>
                    <h2>Junior Frontend React Developer</h2>
                    <CTA/>
                </div>
                <HeaderSocials/>
            </div>
        </header>
    );
}

export default Header;