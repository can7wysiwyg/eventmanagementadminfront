import axios from "axios"
import { useState, useEffect } from "react"


function AdminApi() {
    const[isLogged, setIsLogged] = useState(false)
    const[isAdmin, setIsAdmin] = useState(false)
    const[adminPerm, setAdminperm] = useState(false)
   const[administrator, setAdministrator] = useState("")

   let adminToken = JSON.parse(JSON.stringify(localStorage.getItem('adminToken')))

   useEffect(() => {

    if(adminToken) {
        const getUser = async() => {
            const res = await axios.get('/admin/show_admin', {
               headers: {
                   Authorization: `Bearer ${adminToken}`
               }
            })

            setIsLogged(true)
            setAdministrator(res.data._id)
            
        
            res.data.admin === 11 ? setIsAdmin(true) : setIsAdmin(false)
            res.data.admin !== 11 ? setAdminperm(true) : setAdminperm(false)
            

    

          }

          getUser()



    }



}, [adminToken])

   




    return{

        isAdmin: [isAdmin, setIsAdmin],
        isLogged: [isLogged, setIsLogged],
        administrator:[administrator, setAdministrator],
        adminPerm: [adminPerm, setAdminperm]


    }
}


export default AdminApi