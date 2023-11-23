import { createContext } from "react"
import AdminApi from "./api/AdminApi"
import UsersApi from "./api/UsersApi"
import EventsApi from "./api/EventsApi"
import CategoryApi from "./api/CategoryApi"


export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    let adminToken = JSON.parse(JSON.stringify(localStorage.getItem('adminToken')))
    

let state = {
    AdminApi: AdminApi(),
    UsersApi: UsersApi(),
    EventsApi: EventsApi(),
    CategoryApi: CategoryApi(),
    adminToken,
    

   
}
return(<GlobalState.Provider value={state}>
            {children}
    </GlobalState.Provider >) 

}

