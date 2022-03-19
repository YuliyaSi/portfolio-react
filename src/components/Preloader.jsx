import preloader from "../assets/Glowing ring.gif";
import React from "react";

let Preloader = () => {
    return <div style={ {display: "flex", justifyContent: "center", height: "500px", margin: "50px"} }>
        <img src={preloader} alt={'Wait a minute..'}/>
    </div>
};
export default Preloader;