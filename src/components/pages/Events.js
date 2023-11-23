import { useContext } from "react"
import { GlobalState } from "../../GlobalState"

function Events() {
  const state =  useContext(GlobalState)
  const[events] = state.EventsApi.events

if(events.length === 0) {
    return(<>
    
    <h4>events are loading..</h4>
    
    </>)
}

    return(<>

    {
        Array.isArray(events) ? events?.map((event) => (
            <div key={event._id}>

                <p>{event.eventName}</p>

                <a href={`/see_event/${event._id}`}>SEE EVENT</a>


            </div>
        )) : "something is wrong"
    }
    
    
    </>)
}

export default Events