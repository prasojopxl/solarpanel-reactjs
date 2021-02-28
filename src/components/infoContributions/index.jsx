import React from 'react'
import "./style.scss";

export const InfoContributions = (props) => {
    return (
        <div className="wrp-contributions">
            <div className="imgwrp"><img src={props.image} alt={props.title}/></div>
            <h4>{props.title}</h4>
            <h3>{props.total} {props.unit}</h3>
        </div>
    )
}
