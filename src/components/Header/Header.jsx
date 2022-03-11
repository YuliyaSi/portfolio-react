import React from 'react';
import style from "./Header.module.css"

const Header = (props) => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello, I'm</h5>
                <h1>Yuliya Sidarenka</h1>
                <h5 className="text-light">Frontend Developer</h5>
            </div>
        </header>
    );
}

export default Header;