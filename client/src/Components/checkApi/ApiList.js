import React, { Component } from 'react';
import {ProfileContext} from '../Provider/Provider'
import './style.css'
import {api} from '../FQA/api'
import CheckApi from './checkApi';
class ApiList extends Component {
    constructor(props) { 
        super(props);
        this.state = { 
            userName: '',
            userBalance: '',
            ApiList: api,
        }
        this.onSubmit = this.onSubmit.bind(this)

        
    }
 
    componentDidMount(){
        const {name,balance} = this.context;
        this.setState({
            userName: name,
            userBalance: balance   
        })
        
        
        
        
    }
    onSubmit = (event)=>{
        event.preventDefault()
        const UserProfile = {
            userName: this.state.userName,
            userBalance: this.state.userBalance
        }
        console.log(UserProfile)
    }
 
    render() { 
        // const Run = ()=>{
        //     if(Number(this.state.userBalance) > 210){
        //         alert('Hight Balance' + (this.state.userBalance))
        //     }
        //     else{
        //         alert('Low Balance' + (this.state.userBalance))
        //     }
        // }
        // Run()
        return ( 
            <div className='ApiList'>


                <h3>Hello {this.state.userName} Welcome to Api list for 2020</h3>
                <p>Account Balance: {this.state.userBalance}</p>
                <p className='btn btn-warning' onClick={this.onSubmit}>Send Info</p>
                {/* <h1>Profile</h1>
                    <h3>Name: {name}</h3>
                    <h3>Account Balance: {balance}</h3>
                {this.state.ApiList.map(API =>{
                    return(
                        <CheckApi key={API.id} h1={API.h1}/>
                    ) 
                })} */}
            </div>
         );
    }
}
ApiList.contextType = ProfileContext
export default ApiList;