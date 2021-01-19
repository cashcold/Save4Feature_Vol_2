import React, { Component } from 'react';
import jwt_decode from 'jwt-decode'
import './style.css'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import {GlobalUserContext} from '../Global/Global'
import 'react-toastify/dist/ReactToastify.css';

class WithdrawNow extends Component {
    static contextType = GlobalUserContext;
    constructor(props) {
        super(props);
        this.state = {
            user_Name: '',
            email: '',
            bitcoin: '',
            bitcoinCash: '',
            ethereum: '',
            accountBalance: '',
            zero_accountBalance: '0',
            beforeAccountBalance: '',
              
         }
         this.ConfirmWithdraw = this.ConfirmWithdraw.bind(this)
         this.onSubmit = this.onSubmit.bind(this)
         this.handleChange = this.handleChange.bind(this)

         this.userNameRef = React.createRef()
    }
   
     
    handleChange =input => (event)=>{
        event.preventDefault()
        this.setState({[input]: event.target.value})
    }

    WithdrawNowFound = ()=>{
        this.setState({accountBalance: '0'})
        setTimeout(()=>
        {toast.success(`Payment of $${this.state.beforeAccountBalance} Have sent to you ${this.state.bitcoin}`)},800)

        // localStorage.removeItem('token')
        

        const Withdraw = { 
            accountBalance: this.state.accountBalance,
            zero_accountBalance: this.state.zero_accountBalance,
            user_Name: this.state.user_Name,
            bitcoin: this.state.bitcoin,
            bitcoinCash: this.state.bitcoinCash,
            email: this.state.email,
            ethereum: this.state.ethereum,
        }
        const id  = this.props.match.params.id
        axios.post(`http://localhost:8000/users/withdraw/${id}`,Withdraw).then(res => { 
            localStorage.setItem('RefreshToken',JSON.stringify(res.data))
            return res.data;
        }).then(res => {toast.success("Account Update") }).then(setTimeout(()=>{
            window.location='/dashboard'
        },8000))

       
        
    }

    ConfirmWithdraw = ()=>{
        toast.success('Payment sent to your Bitcoin Address')
        // setTimeout(()=>{
        //     window.location='/dashboard'
        // },5000)
    }
    componentDidMount(){
        
        const token = localStorage.getItem('x-access-token')
        const decoded = jwt_decode(token)
        this.setState({
            user_Name: decoded.user_Name,
            email: decoded.email,
            bitcoin: decoded.bitcoin,
            bitcoinCash: decoded.bitcoinCash,
            ethereum: decoded.ethereum,
            ip_address: decoded.ip_address,
            accountBalance: decoded.accountBalance,
            beforeAccountBalance: decoded.accountBalance


        }) 
       
        
       
        
        // if(balance < 1){
        //     document.querySelector('.checkBalance').innerHTML ="You have no funds to withdraw."
        //     document.querySelector('.confrimWithdraw').style.display = "none"
        // }
      
        // if(balance < 1){
        //     document.querySelector('.checkBalance').innerHTML ="You have no funds to withdraw."
        //     document.querySelector('.confrimWithdraw').style.display = "none"
        // }
      
       
    }

    onSubmit = ()=>{
        
        // axios.post('http://localhost:800/users/widthdraw',ConfirmWithdrawDetails).then(res => (toast.success("Payment have sent to your wallert address"))).catch(err => {toast.error(err.response.data)})
        
    }
   
    render() { 
        console.log(this.state.accountBalance)
        return ( 
            <div className='mainWidthDraw'>
                <div className='withdraw'>
                    <div className='withdrawNow'>
                    <h1 > WITHDRAWAL FUNDS </h1>
                    <ToastContainer/>
                    </div>
                   <div className='withNowAll'>
                        <div className='withAbout'>
                            <p>Account Balance:</p>
                            <p className='withDrawBalance' >${this.state.accountBalance}</p>
                            
                        </div>
                        <div className='withAbout'>
                            <p>Pending Withdrawals:</p>
                            <p>0.00$</p>
                        </div>
                   </div>
                   <div className='nowWithdraw'>
                       <div className='checkBalance'></div>
                       <div className='comfrimWithdraw'>
                           <h1 className='btn btn-success confrimWithdraw' onClick={this.WithdrawNowFound}>Confirm  Withdraw</h1>
                       </div>
                   </div>
                </div>
            </div>
         );
    }
}
export default WithdrawNow;