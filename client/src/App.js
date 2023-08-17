import { Route, Routes } from "react-router-dom";
import "./App.css"
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./components/Login";
import Signup from "./components/Signup";
import CreateQuote from "./components/CreateQuote";
import Home from "./components/Home";
import OtherUserProfile from "./components/OtherUserProfile";
import Profil from "./components/Profile";
import GetUsers from "./components/GetAllUsers";
import NotFound from "./components/NotFound";
import UpdateUser from "./components/UpdateUser";

function App() {

  return (
    <div>
     
        <NavBar />
          <div className="container">
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/create" element={<CreateQuote />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profil />} />
              <Route path="/getUser" element={<GetUsers />} />
              <Route path="/Update" element={<UpdateUser />} />
              <Route path="/profile/:userid" element={<OtherUserProfile />} />
              <Route path="*" element={<NotFound />} /> 
            </Routes>
          </div>
       
    </div>
  );
}

export default App;

