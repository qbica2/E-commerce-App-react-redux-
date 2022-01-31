import './App.css';

import LandingPage from './Pages/Landingpage'
import Login from './Pages/Login/index.js'
import Electronics from "./Pages/Products/Electronics"
import Women from "./Pages/Products/Women"
import Man from "./Pages/Products/Man"
import Sports from "./Pages/Products/Sports"
import Games from "./Pages/Products/Games"
import Jewelery from "./Pages/Products/Jewelery"
import Details from "./Pages/Products/Details"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  
  return (
    

    <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route  path="/electronics" element={<Electronics/>} />
          <Route  path="/women" element={<Women/>} />
          <Route  path="/man" element={<Man/>} />
          <Route  path="/sports" element={<Sports/>} />
          <Route  path="/games" element={<Games/>} />
          <Route  path="/jewelery" element={<Jewelery/>} />
          <Route  path="/login" element={<Login/>} />
          <Route path="/:id" element={<Details/>} />
          
        </Routes>
    </Router>
  );
}

export default App;
