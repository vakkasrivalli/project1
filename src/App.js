import React  from 'react';
import Profile from './Profile';
import './App.css';
import data from './data.json';
import Resume from './Resume.js';
import {BrowserRouter,Route,Link} from 'react-router-dom';
let App=()=>{
  return(

    <BrowserRouter>
     <Route exact path="/" component={Profile}></Route> 
     <Route exact path="/Resume" component={Resume}></Route>
   
    </BrowserRouter>
  )
}
export default App;
