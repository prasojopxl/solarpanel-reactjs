import React from 'react'
import "./style.scss";
export const SummaryRate = (props) => {
    return (
        <div className="wrp-summaryrate">
            <h4>{props.title}</h4>
            <div className="imgwrp"><img src={props.image} alt={props.title}/></div>
            <h3>Rp. {props.total}</h3>
        </div>
    )
}
