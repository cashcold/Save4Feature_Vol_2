const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_Name: {
        type: String,
    },
    accountBalance: {
        type: String,
    },  
    email: {
        type: String,
        require: true,
    },
    bitcoin: {
        type: String,  
    },
    bitcoinCash: {
        type: String,
    },
    ethereum: {
        type: String,
    },
    zero_accountBalance: {
        type: String,
    },


    
})

const WithdrawDeposit = mongoose.model('WithdrawDeposit', userSchema)

module.exports = WithdrawDeposit;