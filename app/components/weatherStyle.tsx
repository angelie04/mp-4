import styled from "styled-components";
import {Weather} from "@/app/interfaces/weatherFields"

//styling for weather card
const WeatherContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    margin: 1rem;
    width: 220px;
    border-radius: 15px;
    background: #fff0f6; /* soft pink */

    h2 {
        color: #ab7de0; 
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    p {
        margin: 0.2rem 0;
        color: #444;
        font-size: calc(0.8rem + 0.5rem);
    }

`;

export default function WeatherStyle(props:Weather){
    return (
        <WeatherContainer>
            {/*format date to have weekday name, month name, and the day num*/}
            <h2>{ new Date(props.datetime).toLocaleDateString(undefined, {
                weekday: "short",
                month: "short",
                day: "numeric",
            })}</h2>
            <p>☁ {props.conditions}</p>
            <p><strong>Temp now:</strong> {props.temp}°</p>
            <p><strong>Temp range:</strong> {props.tempmin}°- {props.tempmax}°</p>
            <p>🌅{props.sunrise}</p>
            <p>🌇{props.sunset}</p>
        </WeatherContainer>

    )
}