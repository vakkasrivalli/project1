import React from 'react';
import  icon from'./download.jpg';
import data from './data.json';
/*import  icon1 from'./images.jpg';*/

let Resume=(props)=>{
    let info=Object.values(props.location.index.value);
    let person=data.profiles[info];
        console.log(person);
    return(

        <div className="parent">
           
           
           <div className="child">
               
            
               <img src={icon} alt="profile"></img>
               <h3>{person.basics.name}</h3>
               <hr></hr>
               <h3>{person.basics.email}</h3>
               <hr></hr>
               <h3>{person.basics.phone}</h3>


               
               </div>
            <div className="child2">
               <h3>Educational Qualifications</h3>
               <hr></hr>
               {
               person.education.map((i,j)=>(
                   <div key={j}>
                  <h3>{i.Degree}</h3>  
               <ul> 
           
               <li>{i.Percentage}%</li>
               <li>{i.Institute}</li>  
               </ul>
               </div>
               
               )
               )
            }
            <hr></hr>
            <h3>skills</h3>

            <hr></hr>
             {person.skills.map((x,y)=>(
                 <div>
                     <h4>
                         {x.type}
                     </h4>
                     {x.values.map((k,l)=>(
                         <div key={l} style={
                             {display:"inline"}
                         }>
                             <span className="skills">{k}</span>
                             </div>
                     ))}
                     </div>
             )
    )
}           
             </div>
             </div>
    )
}
export default Resume;