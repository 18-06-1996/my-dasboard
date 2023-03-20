import React from "react";
import { BaseApp } from "../Base/BaseApp";


export function Border(){

    return(
<BaseApp>
        <div className="bor-con">
            <h2>
                Borders
            </h2>
            <p>Bootstrap's default utility classes can be found on the official <span>Bootstrap Documentation</span> page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p>

            <div className="border-box">
                <div className="left-bor"> 
                <div className="le1"> .border-left-primay </div>
                <div className="le2">.border-left-secondary </div>
                <div className="le3">.border-left-success </div>
                <div className="le4"> .border-left-info</div>
                <div className="le5"> .border-left-warning</div>
                <div className="le6">.border-left-danger </div>
                
                </div>
                <div className="right-bor">
                <div className="le7">.border-bottom-primary</div>
                <div className="le8">.border-bottom-secondary</div>
                <div className="le9">.border-bottom-succuss</div>
                <div className="le10">.border-bottom-info</div>
                <div className="le11">.border-bottom-warning</div>
                <div className="le12">.border-bottom-danger</div>
                

                </div>
            </div>
        </div>

        </BaseApp>
    )
}