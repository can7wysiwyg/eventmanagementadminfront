import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"

function SeeUser() {
   const {id} = useParams()
   const[user, setUser] = useState({})
  const state = useContext(GlobalState)
  const adminToken = state.adminToken


   useEffect(() => {

    const getUser = async() => {

        const res = await axios.get(`/adminusers/show_single/${id}`, {
            headers: {
                Authorization: `Bearer ${adminToken}`
            }
        })

        setUser(res.data.user)


    }

    getUser()


   }, [id, adminToken])


   if(Object.keys(user).length === 0) {

    return(<>
    
    <h4>user is loading..</h4>
    </>)
   }

    return(<>
    <h4> {user.fullname} </h4>
    <a href={`/see_user_events/${user._id}`}>user events</a>
    <br />
    <a href={`/manage_user/${user._id}`}>manage user</a>
    
    
    </>)
}

export default SeeUser