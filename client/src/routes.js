import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import CreateQuote from './components/CreateQuote';
import Home from './components/Home';
import OtherUserProfile from './components/OtherUserProfile';
 import getUser from './components/GetAllUsers';

export const routes = [
    {path:"/",element:<Home />},
    {path:"/create",element:<CreateQuote />},
    {path:"/login",element:<Login />},
    {path:"/signup",element:<Signup />},
    {path:"/profile",element:<Profile />},
     {path:"/getUser",element:<getUser />},
    {path:"/profile/:userid",element:<OtherUserProfile/> }
]