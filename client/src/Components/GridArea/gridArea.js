import React, { Component } from 'react'
import './style.css'
class GridArea extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='GridArea'>
                <div id='mynav'>Navbar</div>
                <div id='mymain'>Main</div>
                <div id='sidebar'>Sidebar</div>
                <div id='content1'>Contect 1</div>
                <div id='content2'>Contect 2</div>
                <div id='content3'>Contect 3</div>
                <footer id='footer'>Footer</footer>
            </div>
         );
    }
}
 
export default GridArea;