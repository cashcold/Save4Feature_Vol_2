import React, { Component } from 'react';

export const ProfileContext = React.createContext()

class MyProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: 'CashCold',
            balance: '7522587'
         }
    }
    render() { 
        const{name,balance} = this.state;
        return ( 
            <div className='myProvider'>
                  <ProfileContext.Provider value={{name,balance}}>
                      {this.props.children}
                  </ProfileContext.Provider>
            </div>
         );
    }
}
 
export default MyProvider;