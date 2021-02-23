import React, { Component } from 'react';
import './style.css'
class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='landingMain'>
                <div className='landing__1'>
                     <h1>New Banding for 2021 Shop Kart</h1>
                </div>
            </div>
         );
    }
}
 
export default Landing;