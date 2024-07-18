import React from "react";
import Homes from "../Pages/Home";
import Contact from "../Pages/Contact";
import Signup from "../Pages/Signup";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function AppRoute(props) {
    return (
      <Router {...props}>
        <Routes>
          <Route exact path="/" element={<Homes/>}/>
          <Route exact path="Contact" element={<Contact/>}/>
          <Route exact path="Signup" element={<Signup/>}/>
        </Routes>
      </Router>
    );
  }
  export default AppRoute;