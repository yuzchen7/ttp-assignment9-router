import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Debits from './components/Debits'
import Home from "./components/Home";
import Credits from './components/Credits';
import axios from 'axios';

function App() {
  const [creditState, setCreditState] = useState(0.0);
  const [debitsState, setDebitsState] = useState(0.0);

  useEffect(() => {
    const getDebitsFetch = async () => {
      return await getDebits();
    }; 
    
    const getCreditsFetch = async () => {
      return await getCredits();
    };
    
    console.log(getDebitsFetch());
    console.log(getCreditsFetch());

  }, []);

  const getDebits = async () => {
    try {
      const response = await axios.get(`https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits`);
      setDebitsState(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  const getCredits = async () => {
    try {
      const response = await axios.get(`https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits`);
      setCreditState(response.data);
    } catch (error) {
        console.log(error);
      }  
  };

  const setDebits = (debits) => {
    setDebitsState(debits)
  }

  const setCredit = (credit) => {
    setCreditState(credit)
  }

  return (
    <Router>
      <div className="App">
        <nav>
          <center>
              <Link to="/">Home</Link>
              <br />
              <Link to="/debits">Debits</Link>
              <br />
              <Link to="/credits">Credits</Link>
          </center>
        </nav>

        <Routes>
          <Route path="/" element={<Home debits={debitsState} credits={creditState} />} />
          <Route path="/debits" element={<Debits currentCredits={creditState} currentDebits={debitsState} update={setDebits} />} />
          <Route path="/credits" element={<Credits currentCredits={creditState} currentDebits={debitsState} update={setCredit}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
