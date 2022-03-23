import React from 'react';
import "./Footer.css"
import {BsFacebook, BsInstagram} from "react-icons/bs";

const Footer = () => {
    return (
        <footer>
            <ul className={'permalinks'}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#soft">Soft Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/julia.domoratzkaya"><BsFacebook/></a>
                <a href="https://www.instagram.com/yulia_sidorenko_1102/"><BsInstagram/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; All rights reserved.</small>
            </div>
        </footer>
    );
}

export default Footer;