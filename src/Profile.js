import React from 'react';
import data from './data.json';
import  icon from'./download.jpg';
/*import  icon1 from'./images.jpg';*/

import {BrowserRouter,Route,Link} from 'react-router-dom';
import Resume from './Resume';
let Profile=()=>{
    const profiles=data.profiles;
      return(
          <div className="parent">
            <BrowserRouter> 
            <Route exact path='/Resume' component={Resume}></Route>
            </BrowserRouter>
          
             {
                profiles.map((i,j)=>(
                    <div className="child" key={j}>
                      <img src={icon} alt="profile"></img>
                     
                        <h1>{i.basics.name}</h1>
                       
                        <hr></hr>
                      <a href={"mailto:"+i.basics.email} className="link">{i.basics.email}</a>
                      <hr></hr>
                      <a href={"ph no:"+i.basics.phone} className="link">{i.basics.phone}</a>
                      <hr></hr>
                      <Link to={{pathname:"/Resume",index:{value:{j}}}} className="btn">view profile</Link>
                        </div>

                ))}
              </div>
      )
}
export default Profile;