import React from 'react'
import ReactWeather, { useOpenWeather } from 'react-open-weather';


export const Weather = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '40b98854649841a1bae1e8845457a01c',
        lat: '-6.169225',
        lon: '106.8308743',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
    });

    const customStyles = {
        fontFamily:  'Helvetica, sans-serif',
        gradientStart:  '#cbc4ad',
        gradientMid:  '#f4f3ee',
        gradientEnd:  '#cbc4ad',
        locationFontColor:  '#231f20',
        todayTempFontColor:  '#231f20',
        todayDateFontColor:  '#4a7750',
        todayRangeFontColor:  '#4a7750',
        todayDescFontColor:  '#4a7750',
        todayInfoFontColor:  '#4a7750',
        todayIconColor:  '#4a7750',
        forecastBackgroundColor:  '#FFF',
        forecastSeparatorColor:  '#DDD',
        forecastDateColor:  '#777',
        forecastDescColor:  '#777',
        forecastRangeColor:  '#777',
        forecastIconColor:  '#ffd34b',
    };    

    return (
        <div>
            <ReactWeather
                theme={customStyles}
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang="en"
                locationLabel="Jakarta"
                unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
                showForecast
            />            
        </div>
    )
}
