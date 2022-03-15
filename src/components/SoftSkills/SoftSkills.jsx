import React from 'react';
import "./SoftSkills.css"
import {BsCheck2} from "react-icons/bs";
import {softSkills} from "../../data";

const SoftSkills = () => {
    return (
        <section id={'soft'}>
            <h5>Who I am</h5>
            <h2>Soft Skills</h2>

            <div className="container">
                <article className="soft">

                    <ul className="soft__list">
                        {softSkills.map((i, ind) => <li key={ind}>
                            <BsCheck2 className={'soft__list-icon'}/>
                            <p>{i}</p>
                        </li>)}
                    </ul>

                </article>
            </div>
        </section>
    );
}

export default SoftSkills;