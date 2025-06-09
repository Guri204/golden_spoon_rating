import React from 'react';
import { FaStar } from "react-icons/fa";

function Star(props) {
    return(
        <FaStar color={props.selected ? "gold" : "gray"} onClick={props.onClick}/>
    );
}
export default Star;