import React, { Component } from 'react';
 

class About extends Component {
   
    render() {
        return (
            <div className="main">
            <p style={{textAlign:'center', 
                            fontSize:"40px", 
                            marginTop:'0px',
                            marginLeft:"10px", 
                            borderStyle:"solid",
                            borderWidth:"thin"}}>
                            IMDB API Query Interface</p>
                 <h1 style={{marginTop:"-30px", marginLeft:"30px"}}>About</h1>
                 <img width="800px" height="150px" src="https://magellandigital.com.au/wp-content/uploads/2018/12/cropped-Magellan-Digital-Logo-1.png" 
                    
                            alt="Magellan Logo"  ></img>
                 <p style={{textAlign:'center'}}>Coding Challenge DATE: March 5, 2021</p>
            </div>
        );
    };
};

export default About;