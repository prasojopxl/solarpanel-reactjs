import React, {useState, useEffect} from 'react'
import { Title } from '../components/title'
import { iconCar, iconCO2, iconCoal, iconTree } from "../assets/images/";
import { InfoContributions } from '../components/infoContributions';
import axios from "axios";

export const Contributions = () => {
    const [Contribution, setContribution] = useState([]);

    useEffect(()=> {
        axios.get(`https://www.solarkita.com/pvdata/API/InverterDataSum?serial=9947053`)
        .then (res =>{
            setContribution(res.data)
        })
    },[])
    return (
        <React.Fragment>
            <Title title="TotalCO2 REDUCED"></Title>

            {
                Contribution.map((item,i)=>{
                    return (
                        <div className="fullbox" key={i}>
                            <div className="contributionpage row">
                                <div className="lg100">
                                    <InfoContributions image={iconCO2} unit="kg" total={parseInt(item.CO2Total).toLocaleString("id-ID")}/>
                                </div>
                            </div>
                            <h4 style={{color:"#4a7750", fontFamily:"HelveticaBold",marginTop:"50px", fontSize:"25px"}}>Equals to:</h4>
                            <div className="contributionpage row">
                                <div className="lg30">
                                    <InfoContributions image={iconCar} unit="km" title="Electric Car" total={parseInt(item.EVTotal).toLocaleString("id-ID")}/>
                                </div>
                                <div className="lg30">
                                    <InfoContributions image={iconCoal} unit="kg" title="Coal Consumption Reduced" total={parseInt(item.CoalTotal).toLocaleString("id-ID")}/>
                                </div>
                                <div className="lg30">
                                    <InfoContributions image={iconTree} unit="Trees" title="Total Tree Pianted" total={parseInt(item.TreeTotal).toLocaleString("id-ID")}/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </React.Fragment>
    )
}
