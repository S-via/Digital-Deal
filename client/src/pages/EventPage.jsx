import { getOdds } from "../utils/odds";
import { useState, useEffect } from "react";
import { Card, SimpleGrid, Box } from '@chakra-ui/react'
import { Button } from '../components/ui/button'



const EventPage = () => {
  const [events, setEvents] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await getOdds()
      const data = await response.json()

      try {
        const eventData = data.map((item) => ({
          eventId: item.id,
          sport: item.sport_key,
          title: item.sport_title,
          time: item.commence_time,
          home_team: item.home_team,
          away_team: item.away_team,
        }))
        setEvents(eventData)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()

  }, [events])

  return (
    <>
      <Box
        borderWidth="1px"
        borderRadius="md"
        maxH="350px"
        overflowY="auto"
        boxShadow="lg"
        mt={6}>
        <SimpleGrid
          columns={[1,2,3]}
          spacing={12}
          mt={6}
        >
          {events.map((item) => (
            <Card.Root width="100%" maxWidth="320px" key={item.eventId} mx="auto" >
              <Card.Body>
                <Card.Title>{item.home_team} vs {item.away_team}</Card.Title>
              </Card.Body>
              <Card.Footer justifyContent="flex-end">
                <Button className="text-white">Create</Button>
              </Card.Footer>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export default EventPage;