import React from 'react';
import "./SoftSkills.css"
import {BsCheck2} from "react-icons/bs";

const SoftSkills = () => {
    return (
        <section id={'soft'}>
            <h5>Who I am</h5>
            <h2>Soft Skills</h2>

            <div className="container soft__container">
                <article className="soft">
                    <div className="soft__head">
                        <h3>Communication Skills</h3>
                    </div>
                    <ul className="soft__list">
                        <li>
                            <BsCheck2 className={'soft__list-icon'}/>
                            <p>Empathy</p>
                        </li>
                        <li>
                            <BsCheck2 className={'soft__list-icon'}/>
                            <p>Active Listening</p>
                        </li>
                        <li>
                            <BsCheck2 className={'soft__list-icon'}/>
                            <p>Clarity</p>
                        </li>
                        <li>
                            <BsCheck2 className={'soft__list-icon'}/>
                            <p>Friendliness</p>
                        </li>
                    </ul>
                </article>

                <article className="soft">
                    <div className="soft__head">
                        <h3>Management</h3>
                    </div>
                    <ul className="soft__list">
                        <li>
                            <BsCheck2 className={'soft__list-icon'}/>
                            <p>Focus</p>
                        </li>
                        <li>
                            <BsCheck2 className={'soft__list-icon'}/>
                            <p>Prioritization</p>
                        </li>
                        <li>
                            <BsCheck2 className={'soft__list-icon'}/>
                            <p>Time Management</p>
                        </li>
                        <li>
                            <BsCheck2 className={'soft__list-icon'}/>
                            <p>Self-Care</p>
                        </li>
                    </ul>
                </article>

                <article className="soft">
                    <div className="soft__head">
                        <h3>Collaboration Skills</h3>
                    </div>
                    <ul className="soft__list">
                        <li>
                            <BsCheck2 className={'soft__list-icon'}/>
                            <p>Motivation</p>
                        </li>
                        <li>
                            <BsCheck2 className={'soft__list-icon'}/>
                            <p>Team Orientation</p>
                        </li>
                        <li>
                            <BsCheck2 className={'soft__list-icon'}/>
                            <p>Brainstorming</p>
                        </li>
                        <li>
                            <BsCheck2 className={'soft__list-icon'}/>
                            <p>Compromise</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    );
}

export default SoftSkills;