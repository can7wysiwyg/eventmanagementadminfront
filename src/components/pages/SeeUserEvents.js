import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import axios from "axios"

function SeeUserEvents () {
   const {id} = useParams()
   const[events, setEvents] = useState([])
   const state =  useContext(GlobalState)
   const adminToken = state.adminToken


   useEffect(() => {

    const getUserEvents = async() => {

        const res = await axios.get(`/adminusers/show_user_events/${id}`, {
            headers: {
                Authorization: `Bearer ${adminToken}`
            }
        })

        setEvents(res.data.userevent)

    }

    getUserEvents()


   }, [id, adminToken])



   if(events.length === 0) {
    return(<>
    
    <h4>user got no events kaye</h4>
    
    </>)
   }
    

    return(<>

<a href={`/see_user/${id}`}>go back</a>

    {

        Array.isArray(events) ? events?.map((event) => (

            <div key={event._id}>
                <p>{event.eventName}</p>
                <a href={`/see_event/${event._id}`}>SEE SINGLE</a>



            </div>
        )) : "something wrong happened"
    }
    
    
    </>)
}

export default SeeUserEvents