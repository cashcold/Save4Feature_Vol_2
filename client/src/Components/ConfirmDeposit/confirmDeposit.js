import React, { Component } from 'react';
import axios from 'axios'
import './style.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import jwt_decode from 'jwt-decode'
import { GlobalUserContext } from '../Global/Global';
class ConfirmDeposit extends Component {
    static contextType = GlobalUserContext;
    constructor(props) {
        super(props);
        this.state = { 
            plan: '',
            depositAmount: '',
            user_Name: '',
            bitcoin: '',
            bitcoinCash: '',
            ethereum: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
       
    }

    componentDidMount(){
        const plan = localStorage.getItem("plan")
        const depositAmount = localStorage.getItem("depositAmount")
       

        const token = localStorage.getItem('x-access-token')
        const decoded = jwt_decode(token)
        this.setState({
            user_Name: decoded.user_Name,
            email: decoded.email,
            bitcoin: decoded.bitcoin,
            bitcoinCash: decoded.bitcoinCash,
            ethereum: decoded.ethereum,
            ip_address: decoded.ip_address,
            plan,
            depositAmount,
            // depositAmoun,



        }) 





        // const PlanSelect = sessionStorage.getItem('PlanSelect')
        // const DepositAmount = sessionStorage.getItem('DepositAmount')
        // const WalletAddress = sessionStorage.getItem('WalletAddress')
        // const user_Name = sessionStorage.getItem('user_Name')

        // this.setState({
        //     plan: PlanSelect,
        //     depositAmount: DepositAmount,
        //     walletAddress: WalletAddress,
        //     user_Name: user_Name,
        // })
    }

    
   onSubmit = ()=>{
    


       const NewDeposit = {
           plan: this.state.plan,
           depositAmount: this.state.depositAmount,
           user_Name: this.state.user_Name,
           bitcoin: this.state.bitcoin,
           bitcoinCash: this.state.bitcoinCash,
           ethereum: this.state.ethereum

       }
       console.log(NewDeposit)
       axios.post( "http://localhost:8000/users/deposit",NewDeposit).then(res => {toast.success('...Waiting for Blockchain confirmation')}).then(res => setTimeout(()=>{
            // window.location='/dashboard'
       },1200))

   }
    render() { 
       
        return(
            <div className='confirm'>
                <div className='confirmDepositNow'>
                    <h1 className='animate__animated animate__flash animate__slower'>CONFIRM DEPOSIT</h1>
                    <ToastContainer/>
                </div>
                <div className='confirmLine'>
                    <div className='lastConfirm'>
                        <div className='planInfo'>
                            <p>Plan:</p>
                            <p>Instant Daily Plan: {this.state.plan} Daily Forever</p>
                        </div>
                        <div className='planInfo'>
                            <p>Principal Return:</p>
                            <p>No (included in profit)</p>
                        </div>
                        <div className='planInfo'>
                            <p>Principal Withdraw:</p>
                            <p>Not available</p>
                        </div>
                        <div className='planInfo'>
                            <p>Credit Amount:</p>
                            <p>${this.state.depositAmount}</p>
                        </div>
                        <div className='planInfo'>
                            <p>Debit Amount:</p>
                            <p>${this.state.depositAmount}</p>
                        </div>
                        <div className='planInfo'>
                            <p>BTC Debit Amount:</p>
                            <p>0.00177447</p>
                        </div>

                        <div className='confirmBtnInfo'>
                            <p>Please send exactly 0.00177447 BTC to<br/>
                            <p className='wallertNumber'>14VoBZY3Pap6NUeTxNttspyGHBx92d1wAh</p>
                            <div className='automatic'>
                                <img src={require('../../images/Screenshot (551).png')} alt='pic'/>
                            </div>
                            <h4>Order status: Waiting for payment</h4>
                            </p>
                        </div>
                        <div className='btnConfirm'>
                            <button className='btn btn-success' onClick={this.onSubmit}>I PAID CONFIRM</button>
                        </div>
                    </div>
                </div>
                <div className='blochChanImg'>
                    {/* <img src={require('../../pic/')}/> */}
                </div>
            </div>

        )
    }
}
 
export default ConfirmDeposit;