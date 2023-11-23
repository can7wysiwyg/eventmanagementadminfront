import { useContext } from "react"
import { GlobalState } from "../../GlobalState"

function Categories() {
   const state = useContext(GlobalState)
   const[categories] = state.CategoryApi.categories


   if(categories.length === 0) {
    return(<>
    
    <h4>no categories as of late</h4>
    </>)
   }


    return(<>

    {

Array.isArray(categories) ? categories?.map((category) => (
<ul key={category._id}>
    <li> <a href={`/event_by_cat/${category._id}`}> {category.catName} </a> </li>


</ul>

    )) : "something happened"

    }
    
    
    </>)
}

export default Categories