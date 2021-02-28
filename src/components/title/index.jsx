import React from 'react'
import "./style.scss";

export const Title = (props) => {
    return (
        <div className="wrp-title">
            <h2>{props.title}</h2>
            <h5>{props.subtitle}</h5>
        </div>
    )
}
