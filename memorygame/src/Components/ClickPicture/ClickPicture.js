import React from "react";
import "./ClickPicture.css";

const ClickPicture = props => (
    <div
    role="img"
    aria-label="click-picture"
    onClick={() => props.handleClck(props.id)}
    className= {'click-picture${props.shake ? " shake" : ""}'}
    />
);

export default ClickPicture;
