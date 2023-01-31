import React from "react";

const Header =(props) =>{
    return(
        <div id="header">
        <header id={props.id}>{props.content}</header>
        </div>
    );
}
export default Header;
