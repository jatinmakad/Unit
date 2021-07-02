import React from 'react';
import "./Zoom.css";

function Zoom() {
    
    return (
        <div className="zoom">
           <div className="cont_first">
              
               <div className="cont_first_text">
               <h1>Unity's newest releases</h1>
               <h3>Unity 2020 LST and Unity 2021. Tech Stream are now available</h3>
               </div>
               <img 
               src="https://wallpapercave.com/wp/wp5347443.jpg"
                alt="" />
               
           </div>
           <div className="cont_sec">
               <div className="cont_sec1">
                   <img src="https://unity.com/sites/default/files/styles/cards_16_9/public/2021-03/LUCY%20Keyart_Small.jpg?itok=n8YONjCN" alt="" />
                   <div className="cont_sec_text">
                   <h1>Unity Computer Vision</h1>
                   <p>Get perfectly labeled, high-quality data for computer vision training at a fraction of the cost..</p>
                   </div>
                   
               </div>
               <div className="cont_sec2">
                   <img src="https://unity.com/sites/default/files/styles/cards_16_9/public/2021-03/16x9_OWI_Epic_01.jpg?itok=Tr76Q8EE" alt="" />
                   <div className="cont_sec_text">
                   <h1>Unity at GDC Showcase</h1>
                   <p>on March 16, join us for a day of exciting content, cool announcement and much more.</p>
                   </div>
                  
               </div>
           </div>
        </div>
    )
}

export default Zoom
