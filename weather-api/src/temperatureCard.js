import { Images } from './imports.js';
import { useEffect, useState } from 'react';
import './temperatureCard.css';

export default function TemperatureCard(props) {  
    return (
        <>
            <p id="date"> <u> {props.date.getDate() + '/' + (props.date.getMonth() + 1) + '/' + props.date.getFullYear()} </u> </p>
            <div id="border">
                <img id="icon" src={Images[props.weathercode]} style={{width:'55px', height:'55px', borderColor:'white'}} />
                <p id="temp-label"> Temperature </p> 
                <div id="attributes">
                    <p> Precipitation: {props.precipitation}% </p>
                    <p> Humidity: {props.humidity}% </p>
                    <p> Wind: {props.wind} km/h </p>
                </div>
                <h1 id="temperature"> {props.temperature}°C </h1>
            </div>
        </>
    )
}