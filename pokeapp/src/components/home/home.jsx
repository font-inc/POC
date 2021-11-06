import { React, useCallback, useEffect } from "react";
import {   useState } from "react";
import  { Redirect } from 'react-router-dom'
import axios from 'axios';
import Pagination from './pagination';
const Home = ({token}) => {
    const [pokemons, setPokemons] = useState([]);
    const [pok, setPok] = useState("active");
    const [fav, setFav] = useState();
    
    const handleNavigation=()=>{
        if(pok==="active"){
            setPok("");
            setFav("active")
        }else{
            setPok("active");
            setFav("")
        }
        
    }
    const handlePokemon=useCallback(
        () => {
            axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=1118'  )
            .then((response) => {
                setPokemons(response.data.results)
                console.log(response.data)
            })
            .catch((error) => {
                console.error(error);
                setPokemons([])
            });
        }, []
        );
        useEffect(() => {
            
            handlePokemon()
            if(!localStorage.getItem("liked")){
                localStorage.setItem("liked","[]")
            }
            
        }, [handlePokemon]);
        
        
        if(!token){
            return <Redirect to='/login'  />
        }
        return (
            <div className="container">
            {
                pok &&
                <div>
                <h2>Pokemons</h2>
                <Pagination items={pokemons} itemsPerPage={20}>

                </Pagination>
                
                </div>
            }
            {
                fav &&
                <div>
                <h2>Favorites</h2>
                <Pagination items={JSON.parse(localStorage.getItem("liked"))} itemsPerPage={20}>

                </Pagination>

                
                </div>
            }
            
            
            <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
            <button className={"nav-link " + pok} onClick={handleNavigation} aria-current="page">Pokemons</button>
            </li>
            <li className="nav-item">
            <button className={"nav-link "+ fav} onClick={handleNavigation} aria-current="page">Favorites</button>
            </li>
            
            </ul>
            
            </div>
            
            );
        }
        
        
        
        export default Home;
        