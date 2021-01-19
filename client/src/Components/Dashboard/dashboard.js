import React, { Component } from 'react';
import './style.css'
import jwt_decode from 'jwt-decode'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import {GlobalUserContext} from '../Global/Global'
import axios from 'axios' 


export const DashboardContext = React.createContext()

export class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            full_Name: '',
            user_Name: '',
            ip_address: '',
            bitcoin: '',
            bitcoinCash: '',
            id: '',
            ethereum: '',
            date: '',
            accountBalance: '',
            activetDeposit: '',
            login: '',
            plan: ''
         }
         this.LogoutNow = this.LogoutNow.bind(this)
    }

    componentDidMount(){ 
        const RefreshToken = localStorage.getItem('RefreshToken')
        if(RefreshToken){
            localStorage.removeItem('x-access-token')
            localStorage.setItem('x-access-token',RefreshToken)
        }

        const plan = localStorage.getItem("plan")
        const token = localStorage.getItem('x-access-token')
        const decoded = jwt_decode(token)
        this.setState({
            id: decoded.user_id,
            plan,


        }) 
       

       const Reload = ()=>{
        const balanceMe = document.querySelector('.balanceMe')
        if(balanceMe === null){
            setTimeout(()=>{
                window.location='/dashboard'
            },5000)
        }
       }
       Reload()
        
        const ActivetDeposit = ()=>{
            const activetDeposit = localStorage.getItem('activetDeposit')
           const dateHours = new Date().getHours().toString()
           const dateMinutes = new Date().getMinutes().toString()
          if(activetDeposit <= 50){
            if(dateMinutes > 1440){
                document.querySelector('.activetStatus').innerHTML = "0.00$"
                document.querySelector('.balanceMe').innerHTML = "$"+activetDeposit+".00"
                
            }
          }
          else if(activetDeposit <= 100){
            if(dateMinutes > 4320){
                document.querySelector('.activetStatus').innerHTML = "0.00$"
                document.querySelector('.balanceMe').innerHTML = "$"+activetDeposit+".00"
                
            }
          }
          else if(activetDeposit <= 101){
            if(dateMinutes > 7200){
                document.querySelector('.activetStatus').innerHTML = "0.00$"
                document.querySelector('.balanceMe').innerHTML = "$"+activetDeposit+".00"
                
            }
          }
           else if(activetDeposit <= 300){
            if(dateMinutes > 10080){
                document.querySelector('.activetStatus').innerHTML = "0.00$"
                document.querySelector('.balanceMe').innerHTML = "$"+activetDeposit+".00"
                
            }
          }
           
        }
        ActivetDeposit()

       
    }
    LogoutNow = ()=>{
        localStorage.removeItem('x-access-token');
        localStorage.clear(); 
    }
    render() { 
        const {full_Name,user_Name,ip_address,bitcoin,bitcoinCash,ethereum,date,accountBalance,activetDeposit,plan} = this.context;
       
        return ( 
            <div className='dashboardMain'>     
                <ToastContainer/>
                <div className='dashboard'>
                    <div className='dashMe'>
                        <h1 className='animate__animated animate__zoomInUp animate__slower'><span style={{color: 'white'}}>MY</span> DASHBOARD</h1>
                    </div>
                    <div className='dashLinks'>
                        <div className='dashMainLinks'>
                            <ul className='dashlinkNow animate__animated animate__bounce '>
                                <li><a href=''>DASHBOARD </a></li>
                                
                                <li><a href='/deposit'>DEPOSIT</a></li>
                                <li><a href=''>YOUR  DEPOSIT</a></li>
                                <li><a href=''>TRANSACTIONS</a></li>
                                <li><a href=''>WITHDRAW</a></li>
                                <li><a href=''>REFERRAL</a></li>
                                <div className='menuDashboard userDashboardBtn'>
                                    <div className='MenuDrop'>
                                    <img src={require('../../pic/user.png')}/> <p>{full_Name}</p><img src={require('../../pic/down-arrow.png')}/>
                                    </div>
                                   <div className='menuDropDown'>
                                       <ul className='menuDropDownLists'>
                                           <li><a href=''>DashBoard</a></li>
                                           <li><a href=''>Security</a></li>
                                           <li><a href=''>Settings</a></li>
                                           <hr/>
                                           <li><a href='/' onClick={this.LogoutNow}>Logout</a></li>
                                       </ul>
                                   </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className='welcomeDash'>
                        <div className='welcomeMe'>
                            <div className='welcomeUser'>
                                <div className='userWelcome animate__animated animate__fadeInRightBig animate__slower'>
                                <p><img src={require('../../pic/user.png')}/>WELCOME, {user_Name}</p>
                                </div> 
                                <div className='welcomeUserBtn'>
                                    <li><a href='/settings' className='btn btn-warning animate__animated animate__rollIn animate__slower editBtn'>EDIT PROFILE</a></li>
                                    <li><a href='/' className='btn btn-primary animate__animated animate__fadeInLeftBig animate__slower' onClick={this.LogoutNow}>LOGOUT</a></li>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div className='menuInfo'>
                        <div className='dashInfo1'>
                            <div className='infoDash'>
                                <p>ACCOUNT BALANCE</p>
                                <p className='balanceMe'>${accountBalance}</p> 
                                 <a href={`/withdraw/${this.state.id}`} className='btn btn-warning'>REQUEST PAYMENT</a>
                            </div>
                            <div className='infoImg'>
                                <img src={require('../../pic/wallet.png')}/>
                            </div>
                        </div>
                        <div className='dashInfo1'>
                            <div className='infoDash'>
                                <p>REGISTRATION DATE</p>
                                <p>{date}</p>
                            </div>
                            <div className='infoImg'>
                                <img src={require('../../pic/calendar.png')}/>
                            </div>
                        </div>
                        <div className='dashInfo1'>
                            <div className='infoDash'>
                                <p>IP ADDRESS</p>
                                <p>{ip_address}</p>
                            </div>
                            <div className='infoImg'>
                                <img src={require('../../pic/ip.png')}/>
                            </div>
                        </div>
                    </div>
                    <div className='earnStatus'>
                        <div className='statusEran'>
                            <div className='eran'>
                                <img src={require('../../pic/earn(2).png')}/>
                                <h4>0.00$</h4>
                                <p>EARNED TOTAL</p>
                                <a href='/deposit' className='btn btn-warning'>MAKE DEPSOIT</a>
                            </div>
                        </div>
                        <div className='statusEran'>
                            <div className='eran'>
                                <img src={require('../../pic/wallet.png')}/>
                                <h4 className='activetStatus'>${activetDeposit}.00</h4>
                                <h5 className='DateWithDraw'></h5>
                                <p>ACTIVE DEPOSIT</p>
                                <a href='' className='btn btn-warning'> DEPSOIT LIST</a>
                            </div>
                        </div>
                        <div className='statusEran'>
                            <div className='eran'>
                                <img src={require('../../pic/cash.png')}/>
                                <h4>0.00$</h4>
                                <p>WITHDREW TOTAL</p>
                            </div>
                        </div>
                    </div>
                    <div className='reffDashMe'>
                        <div className='reffLinkDash'> 
                            <h3>REFERRAL LINK</h3>
                            <p>http://localhost:3000/?ref={user_Name}</p>
                        </div>
                    </div>
                    <div className='lastDash'>
                        <div className='lastMenu'>
                                <div className='lastTips'>
                                    <p>$0.00</p>
                                    <p style={{color: 'yellow'}}>TOTAL DEPOSITED</p>
                                </div>
                                <div className='lastTips'>
                                    <p>$0.00</p>
                                    <p style={{color: 'yellow'}}>LAST DEPOSITED</p>
                                </div>
                        </div>
                        <div className='lastMenu'>
                                <div className='lastTips'>
                                    <p>$0.00</p>
                                    <p style={{color: 'yellow'}}>TOTAL DEPOSITED</p>
                                </div>
                                <div className='lastTips'>
                                    <p>$0.00</p>
                                    <p style={{color: 'yellow'}}>LAST DEPOSITED</p>
                                </div>
                        </div>
                    </div>
                </div>
                
                <DashboardContext.Provider>
                        {this.props.children}
                    </DashboardContext.Provider>
            </div>
         );
    }
}
 
DashBoard.contextType = GlobalUserContext;