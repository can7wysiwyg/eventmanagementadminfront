import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import axios from "axios"

function ManageUser() {
  const {id} =  useParams()
 const state = useContext(GlobalState)
 const adminToken = state.adminToken
 const[role, setRole] = useState()

  const deleteUser = async() => {

    await axios.delete(`/adminusers/delete_user/${id}`, {
        headers: {
            Authorization: `Bearer ${adminToken}`
        }
    })

    window.location.href = "/users"


  }

  const updateUser = async(event) => {

    event.preventDefault()

    await axios.delete(`/adminusers/update_user/${id}`, {role}, {
        headers: {
            Authorization: `Bearer ${adminToken}`
        }
    })

window.location.href = `/see_user/${id}`

  }

  const handleField = async(event) => {
    setRole(event.target.value)
  }

    return(<>

    <button onClick={deleteUser} >delete user</button>

    <hr></hr>
    
    <form onSubmit={updateUser}>
<h5>type 8 to give user access to their account to post events. or type any number to remove permission.</h5>
<hr></hr>
<div>
<input type="number" name="role" value={role} onChange={handleField} />

</div>

<button type="submit">change user permission</button>



    </form>
    
    </>)
}

export default ManageUser