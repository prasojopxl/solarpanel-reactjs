import React, {useState, useEffect} from 'react'
import { SummaryRate } from '../components/summaryRate'
import { Title } from '../components/title'
import { TotaLearning, TotaLearningToday, TotaLearningMonth, TotaLearningYear } from "../assets/images/";
import axios from "axios";

export const Earnings = () => {
    const [Earning, setEarning] = useState([])

    useEffect(()=> {
        axios.get(`https://www.solarkita.com/pvdata/API/InverterDataSum?serial=9947053`)
        .then(res=> {
            setEarning(res.data)
        })
    },[])
    return (
        <React.Fragment>
            <Title title="TOTAL EARNINGS" subtitle="*Based on PLN energy rate"></Title>
            <div className="fullbox">
                {
                    Earning.map((item,i)=>{
                        return (
                            <React.Fragment key={i}>
                                <div className="row wrp-earning">
                                    <div className="lg100">
                                        <SummaryRate image={TotaLearning} total={parseInt(item.BillTotal).toLocaleString("id-ID") }/>
                                    </div>
                                </div>
                                <div className="row wrp-earning">
                                    <div className="lg30">
                                        <SummaryRate image={TotaLearningToday} title="Today" total={parseInt(item.BillToday).toLocaleString("id-ID")}/>
                                    </div>
                                    <div className="lg30">
                                        <SummaryRate image={TotaLearningMonth} title="This Month" total={parseInt(item.BillThisMonth).toLocaleString("id-ID")}/>
                                    </div>
                                    <div className="lg30">
                                        <SummaryRate image={TotaLearningYear} title="This Year" total={parseInt(item.BillThisYear).toLocaleString("id-ID")}/>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}
