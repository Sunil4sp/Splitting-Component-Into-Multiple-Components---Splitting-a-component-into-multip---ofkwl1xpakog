import React from "react";

const Footer = (props) =>{
    return(
        <div id="footer">
        <footer id={props.id}>{props.content}</footer>
        </div>
    );
}

export default Footer;
