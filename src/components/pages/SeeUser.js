import { useState } from "react"
import { useParams } from "react-router-dom"

function SeeUser() {
   const {id} = useParams()
   const[user, setUser] = useState({})


   if(Object.keys(user).length === 0) {

    return(<>
    
    <h4>user is loading..</h4>
    </>)
   }

    return(<>
    <h4> {user.fullname} </h4>
    <a href={`/manage_user/${user._id}`}>manage user</a>
    
    
    </>)
}

export default SeeUser