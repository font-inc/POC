import { React } from "react";
import {   useState } from "react";
import  { Redirect } from 'react-router-dom'
let data= [
    {
        "email": "ed.diazf",
        "password": "12345",
        "token": "53h4j345"
    }
]

const Login = ({setToken, saveUser, token}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    
    
    const handleLogin=()=>{
        
        let user = search(email);
        
        if(user){
            if(password===user.password){
                setToken(user.token);
                saveUser(user.email);
            }
            
        }
        else{
            setError("User or password are wrong")
            
        }
        
    }
    const search=(user)=>{
        let r=null;
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            if(user=== element.email){
                r=element;
            }
        }
        return r;
        
    }
    
    if(!!token){
    return (
        <div className="container pt-3">
        <br/>
        <div className="row mb-4">
        <div className="col-sm p-3">
        <h1 className="fw-bolder">Log in to Pokedex</h1>
        <br/>
        
        <div className="row justify-content-center">
        <div className="col-sm-8 mb-3">
        <input type="text" onChange={(event)=>setEmail(event.target.value)} className="form-control form-control-lg" placeholder="Username"/>
        </div>
        
        </div>
        
        <div className="row justify-content-center">
        <div className="col-sm-8 mb-3">
        <input type="password" onChange={(event)=>setPassword(event.target.value)} className="form-control form-control-lg" placeholder="Password"/>
        </div>
        
        </div>
        {error &&
            
            <div className="alert alert-danger" role="alert">
            {error}
            </div>
            
        }
        <div className="row ">
        <div className="col-sm text-center mb-3">
        <button  onClick={handleLogin} className="btn btn-primary m-3 btn-lg" >Log in</button>
        </div>
        </div>
        
        </div>
        <div className="col-sm text-center" style={{borderLeft: "solid 1pt #E1E1E5"}}>
        
        </div>
        </div>
        <br/>   
        <br/>
        </div>
        
        );
    }
    else{
        return <Redirect to='/home'  />
    }
    };
    
    export default Login;
    