import React from "react";
import { Link } from "react-router-dom";


function Button(props){
    console.log("button comopnent excudes");

return(
    <button className="btn btn-btn-primary" onClick={props.eventHandler}>{props.children}</button>
)
}