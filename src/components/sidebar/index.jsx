import React from 'react'
import {Link, NavLink} from "react-router-dom";
import {logo, iconSummary, iconProduction, iconEarning, iconContribution, iconVideo} from "../../assets/images";

export const Sidebar = () => {
    return (
        <div className="wrp-sidebar">
            <Link className="mainlogo" to="/" style={{margin:"0 auto"}}><img src={logo} alt="solarkita"/> </Link>
            <ul>
                <li>
                    <NavLink to="/summary" activeClassName="active">
                        <img src={iconSummary} alt=""/>SUMMARY
                    </NavLink> 
                </li>
                <li>
                    <NavLink to="/production">
                        <img src={iconProduction} alt=""/>SOLAR PRODUCTION
                    </NavLink> 
                </li>
                <li>
                    <NavLink to="/earnings">
                        <img src={iconEarning} alt=""/>EARNINGS
                    </NavLink> 
                </li>
                <li>
                    <NavLink to="/contributions">
                        <img src={iconContribution} alt=""/>CONTRIBUTIONS
                    </NavLink> 
                </li>
                <li>
                    <NavLink to="/video">
                        <img src={iconVideo} alt="" style={{maxWidth:"70px"}}/>VIDEO
                    </NavLink> 
                </li>
            </ul>
        </div>
    )
}
