import React from "react";
import { BaseApp } from "../Base/BaseApp";


export function Login(){

    return(
        <BaseApp><div className="parent-con"><div className="log-container">
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvnXjyF1OyfQLSxZ8_Ko74UZEn68SuCxfb0w&usqp=CAU"/>
        </div>
        <div>
            <h3>Welcome Back....!</h3>
            <form className="form">
                <input className="log-bar" placeholder="Enter Email Adress"/><br/>
                <input className="log-bar" placeholder="Password"/> <br/>
            </form>
          <div className="checked"><input type="checkbox"/><span className="check"> Remember me</span> </div>
          <div>
        <button className="btn1">Login</button><hr/>
        <button className="btn2">Login with google</button>
        <button className="btn3">Login with facebook</button>
        </div><hr/>
       <div className="bom"> <p>Forgot Password?</p>
        <p>Create an Account!</p></div>
        </div>
        
    </div>
</div>
               </BaseApp>
    )
}