import './App.css';

import LandingPage from './Pages/Landingpage'
import Login from './Pages/Login/index.js'
import Electronics from "./Pages/Products/Electronics"
import Women from "./Pages/Products/Women"
import Man from "./Pages/Products/Man"
import All from "./Pages/Products/All"

import Jewelery from "./Pages/Products/Jewelery"
import Details from "./Pages/Products/Details"
import Basket from "./Pages/Basket"
import Orders from "./Pages/Orders"

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
          <Route  path="/all" element={<All/>} />
          <Route  path="/jewelery" element={<Jewelery/>} />
          <Route path="/:id" element={<Details/>} />
          <Route  path="/login" element={<Login/>} />
          <Route  path="/basket" element={<Basket/>} />
          <Route  path="/orders" element={<Orders/>} />
        </Routes>
    </Router>
  );
}

export default App;
