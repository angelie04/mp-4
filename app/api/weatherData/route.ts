
import {NextResponse} from "next/server";
// update data everytime the page refreshes.
export const dynamic = "force-dynamic";

// get the api key/secret from .env.local
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export async function GET(request:Request): Promise<NextResponse>{

    const {searchParams} = new URL(request.url);

    // get the value of the '[city]' param from the query string
    const city = searchParams.get("city");

    // if it cant find [city], return a 400 error response
    if(!city){
        return NextResponse.json({error: "No [[city]] provided"}, {status:400});
    }

    // this is the data fetching to the weather site for a specific city
    const res = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=us&include=days%2Ccurrent%2Cevents&key=${WEATHER_API_KEY}&contentType=json`
    );

    if(res.status !== 200){
        return NextResponse.json( { error: "City not found... try another one!" },
            { status: 404 });
    }
    // Parse the JSON data from the API response
    const data = await res.json();
    // Return the parsed data as JSON
    return NextResponse.json(data);
}
