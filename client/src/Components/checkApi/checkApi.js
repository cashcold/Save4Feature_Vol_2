import React, { Component } from 'react';
import './style.css'
class CheckApi extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }

        
    }
 
 
    render() { 
        const{h1,p} = this.props;
        return ( 
            <div className='checkApi'>
            <section>
                <h1>{h1}</h1>
                <h1>{p}</h1>
            </section>
            </div>
         );
    }
}
 
export default CheckApi;