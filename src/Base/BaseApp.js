import React, { useState } from "react";
import{useHistory} from "react-router-dom"
import { Children } from "react";


 export function BaseApp({children}){
    
 const [isActive, setIsActive]=useState(false);
 const [isReady, setIsReady]=useState(false);
 const [isOk,setIsOk]= useState();
 const history = useHistory(); 
 return(

        <div className=" main-page">
            <div className="side-bar"> 
            <div className="tit"><h4>Admin kp 🥰</h4></div>
            <hr/>
            <div  className="dash-btn"
            onClick={()=>history.push('/')}>🎯 Dashboard</div>
            <hr/>

            <div className="intfa">Interface</div>
            <div className="box1">
            <div className="dropdown">
               <div className="drop-btn"
               onClick={(e)=>setIsActive(!isActive)}>
                 Components <span>›</span>
               </div>
               {isActive && (
                <div className="drop-content">
                <div className="drop-item"
                onClick={()=> history.push('/button')}>Buttons</div>
                <div className="drop-item" 
                 onClick={()=> history.push('/card')}>Cards</div>
                </div>  
                
               )} 
              <br/>
                 
            </div></div>
            <hr/>
<div className="box2">
            <div className="dropdown">
               <div className="drop-btn"
               onClick={(e)=>setIsReady(!isReady)}>
                 Utilities <span>›</span>
               </div>
               {isReady && (
                <div className="drop-content">
                <div className="drop-item"
                onClick={()=> history.push("/color")}
                >Colors</div>
                <div className="drop-item"
                onClick={()=> history.push("/border")}
                >Borders</div>
               
                </div>  
               )}   
            </div></div>

           <hr/>
            
               <div className="addon">Addon's</div>
               <div className="box3">
            <div className="dropdown">
               <div className="drop-btn"
               onClick={(e)=>setIsOk(!isOk)}>
                 Pages<span>›</span>
               </div>
               {isOk && (
                <div className="drop-content">
                <div className="drop-item"
                onClick={()=> history.push('/login')}>Login </div>
                <div className="drop-item"
                onClick={()=> history.push('/register')}>Register</div>
                <div className="drop-item"
                onClick={()=> history.push('**')}
                >404 Page</div>
                </div>  
               )}   
            </div></div>

            
            </div> 
            <div className="content-area"> 
            <div className="nav-bar"> 
            <input className="search" placeholder="Search for..." /><button className="ser-btn"> 🔍 </button>
              
             </div>
             <div className="children">{children}</div>
             <footer className="foot">
                <h4>Copyright @ Your Website 2023</h4>
            </footer>
            </div>
           
           
        </div>

    )
}