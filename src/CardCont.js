import React from 'react';
import Card from "./Card";
import "./CardCont.css";

function CardCont() {
    return (
        <div className="cardContent">
            <Card
            
            title ="Games"
            text ="Every Thing you need to create and operate your games."
            btn= "Learn More"
            />
            <Card
            
            title ="Automotive, Transportation & Manufacturing"
            text ="Gain a competitve edge with real-time 3D in a rapidly evolving industry landscape."
            btn= "Learn More"
            />
            <Card
            
            title ="Film, Animation & Cinematics"
            text ="Unprecedented artistic freedom and faster production for film and animation projects."
            btn= "Learn More"
            />
            <Card
            
            title ="Architecture, Engineering & Construction"
            text ="Create immersive 3D experiences for real-world application at scale."
            btn= "Learn More"
            />
        </div>
    )
}

export default CardCont;
