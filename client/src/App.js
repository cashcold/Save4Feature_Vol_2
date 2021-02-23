import React, { Component } from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/navbar';
import './App.css'
import Home from './Components/Home/home';
import AboutUs from './Components/About-us/about';
import GetStart from './Components/getStart/getSstart';
import RefferNow from './Components/Reffer/reffer';
import FAQMain from './Components/FQA/askMe.js';
import ContactMain from './Components/Contact-us/contact-us';
import {DashBoard} from './Components/Dashboard/dashboard';
import LoginMain from './Components/Login/login';
import RegisterUser from './Components/Register/register';
import Deposit from './Components/Deposit/deposit';
import ConfirmDeposit from './Components/ConfirmDeposit/confirmDeposit';
import ForgotPassword from './Components/Password/forgotPassword';
import ActivitPassword from './Components/Password/activePassword';
import WithdrawNow from './Components/Withdraw/withdraw';
import CheckApi from './Components/checkApi/checkApi';
import ApiList from './Components/checkApi/ApiList';
import GridArea from './Components/GridArea/gridArea';
import LandingPage from './ESPORT/Landing/Landing';
import { GlobalUser } from './Components/Global/Global';
import ThemeContextProvider from './ContextComponent/ThemeContext/ThemeContext';
import Landing from './Components/OtherComponent/Landing/Landing';

class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <Router>
                <div className='mainApp animate__animated animate__zoomIn animate__slowerss'>
                    <ThemeContextProvider>
                    <div className='container'>
                        <Navbar/>
                        <GlobalUser>
                        <div className='router'>
                           <Switch>
                              <Route path='/' exact component={Home}/> 
                              <Route path='/about-us' exact component={AboutUs}/> 
                              <Route path='/getStart' exact component={GetStart}/> 
                              <Route path='/reffer' exact component={RefferNow}/> 
                              <Route path='/FAQ' exact component={FAQMain}/> 
                              <Route path='/support' exact component={ContactMain}/> 
                              <Route path='/dashboard' exact component={DashBoard}/> 
                              <Route path='/login' exact component={LoginMain}/> 
                              <Route path='/register' exact component={RegisterUser}/> 
                              <Route path='/deposit' exact component={Deposit}/> 
                              <Route path='/confirmDeposit' exact component={ConfirmDeposit}/> 
                              <Route path='/forgotpassword' exact component={ForgotPassword}/> 
                              <Route path='/activitPassword/:token' exact component={ActivitPassword}/>  
                              <Route path='/withdraw/:id' exact component={WithdrawNow}/>
                              <Route path='/landingPage' exact component={LandingPage}/>
                              <Route path='/landing' exact component={Landing}/>
                              {/* <Route path='/deposit' exact component={Deposit}/>  */} 
                           </Switch>
                        </div>
                       
                        </GlobalUser>
                    </div>
                    </ThemeContextProvider>
                </div>
            </Router>
         );
    }
}
 
export default MainApp;