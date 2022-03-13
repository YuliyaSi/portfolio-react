import React from 'react';
import "./About.css"
import me from "../../assets/about-yuliya.png"
import {FaAward} from "react-icons/fa";
import {VscFolderLibrary} from "react-icons/vsc";
import {MdReduceCapacity} from "react-icons/md";

const About = () => {
    return (
        <section id={'about'}>
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about__container">

                <div className="about__me">
                  <div className="about__me-image">
                      <img src={me} alt="about"/>
                  </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">

                        <article className={'about__card'}>
                            <FaAward className={'about__icon'}/>
                            <h5>Experience</h5>
                            <small>less then 1 year</small>
                        </article>

                        <article className={'about__card'}>
                            <MdReduceCapacity className={'about__icon'}/>
                            <h5>Education</h5>
                            <small>on my own</small>
                        </article>

                        <article className={'about__card'}>
                            <VscFolderLibrary className={'about__icon'}/>
                            <h5>Projects</h5>
                            <small>10+</small>
                        </article>
                    </div>

                    <p>
                        During the last 7 years I worked as a cook, where I achieved some success, but due to an accident, after which I got a disability, I had to leave this job and look for a different way in my life. And finally I found myself in programming.
                        I started to learn on my own, then I finished the JavaScript online course, I have a some small projects, now I'm learning React. Everything what I do is uploaded to GitHub using Git bash or the WebStorm Terminal. I also try to use different CSS libraries like Bootstrap5, MUI and want to learn Tailwind.
                    </p>

                    <a href="#contact" className={'btn btn-primary'}>Let's Talk</a>
                </div>

            </div>
        </section>
    );
}

export default About;