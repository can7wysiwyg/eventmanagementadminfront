import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function EventByCat() {
  const {id} =  useParams()
  const[events, setEvents] = useState([])

  useEffect(() => {

    const getEventsByCat = async() => {

const res = await axios.get(`/publicevent/show_by_category/${id}`)

setEvents(res.data.eventbycat)


    }

    getEventsByCat()


  }, [id])

  if(events.length === 0) {
    return(<>
    
    <h4>no events</h4>
    
    </>)
  }

    return(<>
    <a href="/categories">go back</a>

    {
        Array.isArray(events) ? events?.map((event) => (
            <div key={event._id}>

             <h2>{event.eventName}</h2>
             <a href={`/see_event/${event._id}`}>SEE SINGLE</a>

            </div>
        )) : "something happened"
    }
    
    
    </>)
}

export default EventByCat