"use client";
import styled from "styled-components";
import {useParams} from "next/navigation";
import {Weather} from "@/app/interfaces/weatherFields";
import WeatherStyle from "../components/weatherStyle";
import useSWR from "swr";
import { useRouter } from "next/navigation"; // for back button


const WeatherWrapper = styled.main`
    width: 85vw;
    margin: auto;
    padding: 2rem;
    background:  #ffe4ec ;
    min-height: 100vh;
`;

const CityName = styled.h1`
    text-align: center;
    color: #dc6095;
    font-size: calc(28px + 0.9vw);
    text-transform: capitalize; // capitalize first letter
`;

const WeatherContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const FailedStyled= styled.p`
    color: red;
    text-align: center;
    font-size: calc(30px + 0.9vw);
    
`

export default function CityP() {

    const params = useParams();
    const router = useRouter(); // back functionality

    // Fetch weather data with SWR
    const {data, error} = useSWR(`/api/weatherData?city=${params.city}`,
        (url) =>
            fetch(url)
                .then((res) => res.json())

    );

    // handle any errors
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    // get the 7 days, if can't find return array
    const days = data?.days || [];
    if (data?.error) {
        return <WeatherWrapper>
            <button onClick={() => router.back()}>
                ← Back
            </button>
            <CityName>
            Failed to load, please go back...
            </CityName>
            <FailedStyled>
                {params.city} 😢
            </FailedStyled>
        </WeatherWrapper>
    }
    return (
        <WeatherWrapper>
            <button onClick={() => router.back()}>
                ← Back
            </button>
            {/*Allows spacing for city names with spaces (ex. New York*/}
            <CityName>{decodeURIComponent(params.city as string)}</CityName>
            <WeatherContainer>
                {
                    days.map((weather: Weather, i: number) =>
                        (
                            <WeatherStyle
                                key={i}
                                datetime={weather.datetime}
                                tempmin={weather.tempmin}
                                tempmax={weather.tempmax}
                                temp= {weather.temp}
                                sunrise= {weather.sunrise}
                                sunset= {weather.sunset}
                                conditions={weather.conditions}
                            />
                        )
                    )
                }
            </WeatherContainer>
        </WeatherWrapper>
    );
}