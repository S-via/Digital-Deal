import { getOdds } from "../utils/odds";
import { useState, useEffect } from "react";



const EventPage = () => {
    const [events, setEvents] = useState([])

    const handleSubmit = async () => {
        const response =  await getOdds()

        const data = await response.json();
        if(!Array.isArray(data)){
            throw new Error('this is not an array')
        }
    try{
       const eventData = data.map((item)=> ({
        eventId: item.id,
        sport: item.sport_key,
        title: item.sport_title,
        time: item.commence_time,
        home_team: item.home_team,
        away_team: item.away_team,
       }));
       setEvents(eventData)
       
    }catch(err){
        console.error(err)
    }
    }
    useEffect(()=> {
        console.log('events: ', events)
    }, [events])
    
    return (
        <>
        <button onClick={handleSubmit}>Submit</button>
            <ul>{events.map((item) => {
                return (<li className="text-white" key={item.eventId}>{item.home_team} vs {item.away_team}</li>
            )})}</ul>
        </>
    )
}

export default EventPage;