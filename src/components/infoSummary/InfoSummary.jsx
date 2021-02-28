import React from 'react'
import "./style.scss";


export const InfoSummary = (props) => {
    return (
        <div className="infosummary">
            <img src={props.icon} alt={props.title}/>
            <h4>{props.title}</h4>
            <h2>{props.firstlabel} {props.value} {props.lastlabel}</h2>
            {}
        </div>
    )
}
