import React, {useState, useEffect}from 'react'
import { InfoSummary } from '../components/infoSummary/InfoSummary'
import {iconTotalProd, iconTotalEarning, iconTotalco} from "../assets/images";
import axios from "axios";
import { Weather } from '../components/weather';

export const Summary = () => {
    const [dataSummary, setdataSummary] = useState([])
    useEffect(()=> {
        axios.get(`https://www.solarkita.com/pvdata/API/InverterDataSum?serial=9947053`)
        .then(res=> {
            setdataSummary(res.data)            
        })
    },[])
    return (
        <div className="row wrp-summary">
            {
                dataSummary.map((item,i)=>{
                    return (
                        <React.Fragment>
                            <div className="lg50"><InfoSummary icon={iconTotalProd} title="TOTAL PRODUCTION" value={parseInt(item.ETotal).toLocaleString("id-ID")} lastlabel=" kWh"/></div>
                            <div className="lg50"><InfoSummary icon={iconTotalEarning} title="TOTAL EARNINGS" value={parseInt(item.BillTotal).toLocaleString("id-ID")} firstlabel="Rp. "/></div>
                            <div className="lg50"><InfoSummary icon={iconTotalco} title="TOTAL CO2 REDUCED" value={parseInt(item.CO2Total).toLocaleString("id-ID")} lastlabel="kg "/></div>                            
                        </React.Fragment>
                    )
                })
            }
            <div className="lg50"><Weather/></div>
        </div>
    )
}
