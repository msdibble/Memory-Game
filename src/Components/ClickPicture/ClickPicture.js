import React from "react";
import "./ClickPicture.css";

const ClickPicture = props => (
    <div className="card" onClick={() => props.onClick(props.id, props.clicked)} key={props.id}>
        <div className="clickPictures">
            <img className="clickPictures" id={props.id} src={require("../../images/" + props.image)} />
        </div>
    </div>
)
export default ClickPicture;
