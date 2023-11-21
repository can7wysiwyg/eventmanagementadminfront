import { createContext } from "react"
import AdminApi from "./api/AdminApi"


export const GlobalState = createContext()

export const DataProvider = ({children}) => {
    let adminToken = JSON.parse(JSON.stringify(localStorage.getItem('adminToken')))
    

let state = {
    AdminApi: AdminApi(),
    adminToken,
    

   
}
return(<GlobalState.Provider value={state}>
            {children}
    </GlobalState.Provider >) 

}

