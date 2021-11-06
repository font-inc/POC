import { React } from "react";
import {   useState } from "react";
import  { Redirect } from 'react-router-dom'
const Home = ({token}) => {
   
    
    if(token){
    
    return (
        <div>
        
        </div>
        
        );
    }
    else{
        return <Redirect to='/'  />
    }
    }
    
    export default Home;
    