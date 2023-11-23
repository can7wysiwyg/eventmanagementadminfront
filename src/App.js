import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/navbar/Header";
import Login from "./components/pages/Login";
import Management from "./components/pages/Management";
import Events from "./components/pages/Events";
import SeeUser from "./components/pages/SeeUser";
import ManageUser from "./components/pages/ManageUser";
import SeeEvent from "./components/pages/SeeEvent";
import EventByCat from "./components/pages/EventByCat";
import SeeUserEvents from "./components/pages/SeeUserEvents";
import Users from "./components/pages/Users";
import Categories from "./components/pages/Categories";


function App() {
  return (
    <div>
<Router>
  <Header />

<Routes>

  <Route path="/login" element={<Login />} />
  <Route path="/management" element={<Management />} />
  <Route path="/users" element={<Users />} />
  <Route path="/events" element={<Events />} />
  <Route path="/see_user/:id" element={< SeeUser  />} />
  <Route path="/manage_user/:id" element={<ManageUser />} />
  <Route path="/see_event/:id" element={<SeeEvent />} />
  <Route path="/categories" element={<Categories />} />
  <Route path="/event_by_cat/:id" element={ <EventByCat />} />
  <Route path="/see_user_events/:id" element={<SeeUserEvents />} />



</Routes>


</Router>

     </div>
  );
}

export default App;
