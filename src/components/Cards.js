import React from "react";
import { BaseApp } from "../Base/BaseApp";



export function Cards(){
    return(
        <BaseApp>
<div className="card-container">
<h1>Cards</h1>

<div className="box-con">
    <div>
        <h3>Defaullt Card Example</h3>
        <p>This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.</p>
    </div>
    <div>
        <h3>Basic Card Example</h3>
        <p>The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!
</p>
    </div>

<div>
    <h3>Dropdown Card Example</h3>
    <p>Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.</p>
</div>
<div>
    <h3> Collapsable Card Example</h3>
    <p>This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand!</p>
    
</div>

</div>
</div>
</BaseApp>
    )
}