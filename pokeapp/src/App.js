import './App.css';
import Login  from "./components/auth/login";
import Home  from "./components/home/home";
import { React, useEffect, useState, useCallback } from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [token, setToken] = useState();
  const saveUser=()=>{
    
  }
  useEffect(() => {
    
  }, [token, setToken]);
  
  return (
    <div className="App">
    
    <Router>
    <Switch>
    
    <Route path="/">
    <Login setToken={setToken} saveUser={saveUser} token={token}  >
    </Login>
    </Route>
    
  
      <Route path="/home">
      <Home>
      </Home>
      </Route>
    
      
   
    
   
    </Switch>
    
    
    
    </Router>
    </div>
    );
  }
  
  export default App;
  