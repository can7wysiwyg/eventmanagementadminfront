import axios from "axios"
import { useEffect, useState } from "react"

function UsersApi() {
    const[users, setUsers] = useState([])
    let adminToken = JSON.parse(JSON.stringify(localStorage.getItem('adminToken')))
   
    

    useEffect(() => {
            
        const getUsers = async() => {

            const res = await axios.get('/adminusers/show_all_users', {
                headers: {
                    Authorization: `Bearer ${adminToken}`
                }
            })

            setUsers(res.data.users)


        }
getUsers()

    }, [adminToken])



    return{

        users: [users, setUsers]

    }
}

export default UsersApi