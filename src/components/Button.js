import React from "react";
import { BaseApp } from "../Base/BaseApp";


export function Buttons(){

    return(
<BaseApp>
        <div className="buttons">
            <div><h1>Button</h1></div>
            <br/>
            <div className="button-container">
                <div>
                    <h5>Circle Buttons</h5>
                     <p> use Font Awesome icons along with the cicle buttons as shwn in examples in the below!</p>
                  <div className="si-btn">
                    <div className="si-bttn">.btn-circle</div>
                    <button className="si-btn1"><span>✔</span></button> <button className="si-btn2"><span>✖</span></button> <button className="si-btn3"><span>⭐</span></button> <button className="si-btn4"><span>❔</span></button>
                  </div>
                
                </div>
                <div className="si-btn-don">
                <h5>Brand Buttons</h5>
                <p> Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .sr-only class. </p>
                <div className="si-btn">
                    <div className="si-bttn"></div>
                    <button  className="si-btna"><span>f</span> Facebook</button> <button className="si-btnb"><span>G</span> Google</button> 
                  </div>
                
                </div>
            </div>
            


        </div>
        </BaseApp>
    )
}
