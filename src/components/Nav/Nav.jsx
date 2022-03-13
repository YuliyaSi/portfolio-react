import React, {useState} from 'react';
import "./Nav.css"
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {FiBook} from "react-icons/fi";
import {RiContactsLine, RiServiceLine} from "react-icons/ri";


const Nav = () => {
    const [active, setActive] = useState('#');

    return (
        <nav>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href="#experience" onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}><FiBook/></a>
            <a href="#soft" onClick={() => setActive('#soft')} className={active === '#soft' ? 'active' : ''}><RiServiceLine/></a>
            <a href="#contact" onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}><RiContactsLine/></a>
        </nav>
    );
}

export default Nav;