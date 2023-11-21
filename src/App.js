import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/navbar/Header";
import Login from "./components/pages/Login";


function App() {
  return (
    <div>
<Router>
  <Header />

<Routes>

  <Route path="/login" element={<Login />} />



</Routes>


</Router>

     </div>
  );
}

export default App;
