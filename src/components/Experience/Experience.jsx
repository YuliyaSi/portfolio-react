import React from 'react';
import "./Experience.css"
import {BsFillPatchCheckFill} from "react-icons/bs";

const Experience = () => {
    return (
        <section id={'experience'}>
            <h5>What Skills I Have</h5>
            <h2>Frontend Development</h2>

            <div className="container experience__container">

                <div className="experience__frontend">

                    <div className="experience__content">

                        <article className={'experience__details'}>
                            <BsFillPatchCheckFill className={'experience__details-icon'}/>
                            <div>
                                <h4>HTML</h4>
                                <small className={'text-light'}>Experienced</small>
                            </div>
                        </article>

                        <article className={'experience__details'}>
                            <BsFillPatchCheckFill className={'experience__details-icon'}/>
                            <div>
                                <h4>CSS</h4>
                                <small className={'text-light'}>Intermediate</small>
                            </div>
                        </article>

                        <article className={'experience__details'}>
                            <BsFillPatchCheckFill className={'experience__details-icon'}/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className={'text-light'}>Intermediate</small>
                            </div>
                        </article>

                        <article className={'experience__details'}>
                            <BsFillPatchCheckFill className={'experience__details-icon'}/>
                            <div>
                                <h4>React</h4>
                                <small className={'text-light'}>Beginner</small>
                            </div>
                        </article>

                        <article className={'experience__details'}>
                            <BsFillPatchCheckFill className={'experience__details-icon'}/>
                            <div>
                                <h4>React-Redux</h4>
                                <small className={'text-light'}>Beginner</small>
                            </div>
                        </article>

                        <article className={'experience__details'}>
                            <BsFillPatchCheckFill className={'experience__details-icon'}/>
                            <div>
                                <h4>Redux</h4>
                                <small className={'text-light'}>Beginner</small>
                            </div>
                        </article>

                        <article className={'experience__details'}>
                            <BsFillPatchCheckFill className={'experience__details-icon'}/>
                            <div>
                                <h4>Redux-thunk</h4>
                                <small className={'text-light'}>Beginner</small>
                            </div>
                        </article>

                        <article className={'experience__details'}>
                            <BsFillPatchCheckFill className={'experience__details-icon'}/>
                            <div>
                                <h4>Axios</h4>
                                <small className={'text-light'}>Intermediate</small>
                            </div>
                        </article>

                        <article className={'experience__details'}>
                            <BsFillPatchCheckFill className={'experience__details-icon'}/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className={'text-light'}>Beginner</small>
                            </div>
                        </article>

                        <article className={'experience__details'}>
                            <BsFillPatchCheckFill className={'experience__details-icon'}/>
                            <div>
                                <h4>MUI</h4>
                                <small className={'text-light'}>Beginner</small>
                            </div>
                        </article>

                        <article className={'experience__details'}>
                            <BsFillPatchCheckFill className={'experience__details-icon'}/>
                            <div>
                                <h4>Git</h4>
                                <small className={'text-light'}>Beginner</small>
                            </div>
                        </article>

                        <article className={'experience__details'}>
                            <BsFillPatchCheckFill className={'experience__details-icon'}/>
                            <div>
                                <h4>English</h4>
                                <small className={'text-light'}>Intermediate</small>
                            </div>
                        </article>

                        <article className={'experience__details'}>
                            <BsFillPatchCheckFill className={'experience__details-icon'}/>
                            <div>
                                <h4>Polish</h4>
                                <small className={'text-light'}>Advanced</small>
                            </div>
                        </article>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Experience;