
import React, { useState,useEffect } from "react";
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Axios from "axios";
import Foods from "./components/Foods";

function App() {
const [Search,setSearch] =useState("");
const [food,setfood] =useState([]);

const APP_ID ="3204f7cd"
const APP_KEY= "2954d4ba91c919094393578dd59924fe";



const getdata = async () =>{
  const respo = await Axios.get(
    `https://api.edamam.com/search?q=${Search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
  console.log(respo)
  setfood(respo.data.hits)
}
useEffect(()=>{
  getdata()
},[])

const onInuputChange = (e) =>{
  setSearch(e.target.value)
  console.log(e.target.value)
  
}

const getClick =()=>{
  getdata()
}
  return (
    <div>
      <Header Search={Search} onInuputChange={onInuputChange} getClick={getClick}/>
      <Foods food={food} />
    </div>
  );
}

export default App;
