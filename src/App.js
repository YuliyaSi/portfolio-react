import React, {useEffect, useState} from "react";
import "./App.css"
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import SoftSkills from "./components/SoftSkills/SoftSkills";
import Preloader from "./components/Preloader";

const App = () => {
    const [init, setInit] = useState(true);

    useEffect(() => {
        setInit(false)
    }, []);

    if (init) return <Preloader/>

    return (
        <>
            <div className="background"/>
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <SoftSkills/>
            <Portfolio/>
            <Contact/>
            <Footer/>

        </>
    );
}

export default App;
