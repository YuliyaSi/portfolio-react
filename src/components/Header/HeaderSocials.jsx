import React from 'react';
import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";

const HeaderSocials = () => {
    return (
        <div className={'header__socials'}>
            <a href="https://www.linkedin.com/in/yuliyasidarenka/" target={'_blank'} rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/YuliyaSi" target={'_blank'} rel="noreferrer"><BsGithub/></a>
            <a href="https://www.instagram.com/yulia_sidorenko_1102/" target={'_blank'} rel="noreferrer"><BsInstagram/></a>
        </div>
    );
}

export default HeaderSocials;