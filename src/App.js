import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/navbar/Header";
import Login from "./components/pages/Login";
import Management from "./components/pages/Management";
import Events from "./components/pages/Events";
import SeeUser from "./components/pages/SeeUser";
import ManageUser from "./components/pages/ManageUser";
import SeeEvent from "./components/pages/SeeEvent";


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
  <Route path="/see_user/:id" element={SeeUser} />
  <Route path="/manage_user/:id" element={<ManageUser />} />
  <Route path="/see_event/:id" element={<SeeEvent />} />



</Routes>


</Router>

     </div>
  );
}

export default App;
