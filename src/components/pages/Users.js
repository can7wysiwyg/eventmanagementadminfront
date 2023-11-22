import { useContext } from "react"
import { GlobalState } from "../../GlobalState"

function Users() {
 const state = useContext(GlobalState)
 const[users] = state.UsersApi.users



 if(users.length === 0) {
    return(<>
    <h5>no users</h5>
    </>)
 }

    return(<>
    
    {

        Array.isArray(users) ? users?.map((user) => (
<div key={user._id}>

    <p>{user.fullname}</p>
    < a href={`/see_user/${user._id}`}> see user </a>


</div>

        )) : "some"
    }
    
    </>)
}

export default Users