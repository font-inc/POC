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
  const [token, setToken] = useState(false);
  const [user, setUser] = useState(false);
  
  const logout=()=>{
    setToken(false);
    setUser(false);
    localStorage.removeItem("user");
    localStorage.removeItem("token")
  }
  useEffect(() => {
    if(token){
      localStorage.setItem("user", user);
      localStorage.setItem("token", token)
      
    }else{
      if(localStorage.getItem("token"))
      {
        setToken(localStorage.getItem("token"));
        setUser(localStorage.getItem("user"));
      }

      
      
    }
    
    
  }, [token, setToken]);
  
  return (
    <div className="App">
    
    <Router>

    <div className="row g-0 p-2 bg-white">
          <div className="col col-sm-6 text-start">
          <Link className="text-decoration-none"  to="/login">
         
          <span className="h2 text-info">PokeApp</span>
          </Link>
          </div>
         
          <div className="col col-sm-6 text-end">
            {!token &&
             <Link className="m-1 btn btn-primary" to="/login">
             Ingresar
             </Link>
            }
            {
              token &&
                <button onClick={logout} className="btn btn-warning">Log out</button>
              

            }
         
        
          </div>
      </div>
    <Switch>
    
    
    
    
    
    <Route path="/login">
    <Login setToken={setToken} setUser={setUser} token={token}  >
    </Login>
    </Route>
    
    <Route path="/">
    <Home token={token}>
    </Home>
    </Route>
    
    
    
    </Switch>
    
    
    
    </Router>
    </div>
    );
  }
  
  export default App;
  