import React from 'react';
import "./About.css"
import me from "../../assets/about-yuliya (2).png"
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
                            <small>no commercial experience</small>
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
                        For the last 7 years, I used to work as a chef. I had succeeded in this are but unfortunately, I was injured at work and had to face a new reality as a disabled person. I am not able to work as a chef anymore, but I think it's a good opportunity for a new start in my life. That's why I decided to learn software engineering and I love it! First I started to learn JavaScript on my own, then I took online courses. I am constantly facing new challenges and right now I am learning React and I think I am succeeding in it. In my free time, I create small hands-on projects which you can check on my GitHub. If you are interested in my candidacy please fill free to contact me with any way you want.
                    </p>

                    <a href="#contact" className={'btn btn-primary'}>Let's Talk</a>
                </div>

            </div>
        </section>
    );
}

export default About;