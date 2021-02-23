import React, { Component } from 'react';
import jwt_decode from 'jwt-decode'


export const GlobalUserContext = React.createContext()

export class GlobalUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            full_Name: '',
            user_Name: '',
            ip_address: '',
            bitcoin: '',
            bitcoinCash: '',
            ethereum: '',
            date: '',
            accountBalance: '',
            activetDeposit: '',
            login: '',
            plan: '',
            depositAmoun: ''
         }
    }


   
    // componentDidMount(){
        
    //     const plan = localStorage.getItem('plan')
        
    //     const token = localStorage.getItem('x-access-token')
    //     const decoded = jwt_decode(token)
    //     this.setState({
    //         full_Name: decoded.full_Name,
    //         user_Name: decoded.user_Name,
    //         email: decoded.email,
    //         bitcoin: decoded.bitcoin,
    //         bitcoinCash: decoded.bitcoinCash,
    //         ethereum: decoded.ethereum,
    //         ip_address: decoded.ip_address,
    //         date: decoded.date,
    //         accountBalance: decoded.accountBalance,
    //         activetDeposit: decoded.activetDeposit,
    //         plan,
        


    //     })   


        
    // }
 
   
    render() { 
        return ( 
            <div className='GlobalUserMain'>
                <GlobalUserContext.Provider  value={{...this.state}}>
                    {this.props.children}
                </GlobalUserContext.Provider>
            </div>
         );
    }
}
 
