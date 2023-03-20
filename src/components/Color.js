import React from "react";
import { BaseApp } from "../Base/BaseApp";


export function Color(){

    return(
        <BaseApp>
        <div className="color-con">
        <div><h1>Colors...</h1></div>

        <p className="para">Bootstrap's default utility classes can be found on the official <span>Bootstrap Documentation</span> page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>

        <div className="col-box">
        <div className="left-colo">
            <h4>Custom Background Gradient Utilities</h4>
            <div className="cobox-dad" >
            <div className="cobox1">.b-gradient-primary</div>
            <div className="cobox2">b-gradient-secondary</div>
            <div className="cobox3">b-gradient-success</div>
            <div className="cobox4">b-gradient-info</div>
            <div className="cobox5">b-gradient-warning</div>
            <div className="cobox6">b-gradient-danger</div>
            <div className="cobox7">b-gradient-light</div>
            <div className="cobox8">b-gradient-dark</div>

            </div>
        </div>
        <div className="right-colo">
        <h4>Custom Grayscale Background Utilities</h4>
        <div className="colbox-dad">
        <div className="colbox1"> .bg-gry-100</div>
        <div  className="colbox2">.bg-gry-200</div>
        <div  className="colbox3">.bg-gry-300</div>
        <div  className="colbox4">.bg-gry-400</div>
        <div  className="colbox5">.bg-gry-500</div>
        <div  className="colbox6">.bg-gry-600</div>
        <div  className="colbox7">.bg-gry-700</div>
        <div  className="colbox8">.bg-gry-800</div>
        <div  className="colbox9">.bg-gry-900</div>
        </div>
        </div>
        </div>
        </div>

            
        
        </BaseApp>
    )
}