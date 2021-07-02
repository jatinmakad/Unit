import React from 'react';
import Button from "@material-ui/core/Button";
import "./Together.css";

function Together() {
    return (
        <div className="together">
            <div className="toge">
                <h1>Together, we empower real-time creativity around the world</h1>
                <p>Join the global team behind the world’s most powerful real-time development platform.</p>
                <Button variant="contained" color="primary">
            We're hiring
          </Button>
            </div>
            <div className="ther">
                <img 
                src="https://unity.com/sites/default/files/styles/16_9_s_scale_width/public/recruiting-10_12-1020x574%402x%20.jpg?itok=A8TbLRR4"
                 alt=""
                  />
            </div>
        </div>
    )
}

export default Together;
