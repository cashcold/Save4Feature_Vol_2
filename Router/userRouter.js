const express = require('express')
const User = require('../UserModel/userModel')
const bcrypt = require('bcryptjs')
const mailgun = require('mailgun-js')
const dotEnv = require('dotenv')
const jwt = require('jsonwebtoken')
const async = require('async')
const crypto = require('crypto')
const UserDeposit = require('../UserModel/depositModel')
const WithdrawDeposit = require('../UserModel/widthdraw')

dotEnv.config()

const Router = express.Router()

Router.post('/register/', async(req,res)=>{

    
    User.findOne({reffer : req.params})
    // reffer program

    const user = await User.findOne({email: req.body.email})
    if(user) return res.status(400).send('Email already Exist')


    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const saveUser = new User({
        full_Name: req.body.full_Name,
        user_Name: req.body.user_Name,
        password: hashPassword,
        email: req.body.email,
        bitcoin: req.body.bitcoin,
        bitcoinCash: req.body.bitcoinCash,
        ethereum: req.body.ethereum,
        ip_address: req.body.ip_address,
        accountBalance: req.body.accountBalance,
        reffer: req.body.reffer,
        activetDeposit: req.body.activetDeposit,
        date: req.body.date
    })

    var mailgun = require('mailgun-js')({apiKey: process.env.API_key, domain: process.env.API_baseURL});
    var data = {
        from: 'PayItForward <payitforwardisnvestmentlimited@gmail.com>',
        to: 'frankainoo@gmail.com',
        subject: 'Hello',
        text: 'Thank you for making Bussiness with us, Have a nice day. Thank You'
    };
    mailgun.messages().send(data, function (error, body) {
        console.log(body);
    });
  

    await saveUser.save()
    res.send("user save")

})



Router.post('/login', async(req,res)=>{
    const user = await User.findOne({email: req.body.email})
    if(!user) {
        return res.status(400).send('Email Do Not Exist')
    } 

    await bcrypt.compare(req.body.password, user.password,(err,isMatch)=>{
        if(!isMatch) return res.status(400).send('Invalid Password ')
        else{
            const payload = {
                 user_id: user._id,
                 full_Name: user.full_Name,
                 user_Name: user.user_Name,
                 email: user.email,
                 password: user.password,
                 bitcoin: user.bitcoin,
                 bitcoinCash: user.bitcoinCash,
                 ethereum: user.ethereum,
                 ip_address: user.ip_address,           
                 date: user.Date,
                 accountBalance: user.accountBalance,
                 activetDeposit: user.activetDeposit,
                 date: user.date
            }
            const token = jwt.sign(payload, process.env.TokenSecret)
            res.header('x-access-token', token)
            return res.status(200).send(token)
        }
    })
})

Router.post('/forgotpassword', async (req,res,next)=>{  
    const userEmail = req.body.email;
    async.waterfall([
       (done)=>{
         crypto.randomBytes(20,(err,buffer)=>{
             let token = buffer.toString('hex');
             done(err, token);
         })
         
       },
       (token, done)=>{
         User.findOne({email: req.body.email},(err,user)=>{
             if(!user){
                 return res.status(400).send('Email Not Found')
             }
             user.restartLinkPassword =  token;
             user.save((err)=>{
                 done(err, token, user)
             })
         })
       },
       (token,user,done)=>{
        var mailgun = require('mailgun-js')({apiKey: process.env.API_key, domain: process.env.API_baseURL});
        var data = {
            from: 'PayItForward <payitforwardinvestmentlimited@gmail.com>',
            to: userEmail,
            subject: 'Password Reset',
            html: ` <h1>Please Follow the link to restart your password </h1>
                <p>${process.env.forgotPasswordLink}/${token}</p>
            `
        };
         mailgun.messages().send(data, function (error, body) {
             if(error){
                 return res.status(400).send(error.message)
             }
            return res.status(200).send('Link sent to Email Address')
       });
 
       },
       
    ])
 
     
 })
    Router.post('/editeProfil', async(req,res)=>{
        const salt = await bcrypt.genSalt(10)
        const editPassword = await bcrypt.hash(req.body.password, salt)

        
        const EditProfit = new User({
            full_Name: req.body.full_Name,
            password: editPassword,
            ethereum: req.body.ethereum,
            bitcoinCash: req.body.bitcoinCash
        })
        
        const user = await User.updateOne({full_Name: req.body.full_Name})
        const userPassword = await User.updateOne({password: EditProfit.password})

        
        

        await EditProfit.save()
    })



 Router.post('/activtypassword/:token', async(req,res)=>{
   
   User.findOne({restartLinkPassword : req.params.token})
   .then(user=>{
       if(!user){
           return res.status(422).json({error:"Invalid token"})
       }
       bcrypt.genSalt(10, function(err, salt) {
           bcrypt.hash(req.body.password, salt, function(err, hash) {
           user.password = hash
           user.restartLinkPassword = undefined
           user.save().then((saveduser)=>{
               res.json({message:"password updated success"})
           })

           });
        });
       
   }).catch(err=>{
       console.log(err)
   })
})



Router.post('/deposit', async(req,res)=>{

    const UserDepositNow = new UserDeposit({
        user_Name: req.body.user_Name,
        plan: req.body.plan,
        depositAmount: req.body.depositAmount,
        bitcoin: req.body.bitcoin,
        bitcoinCash: req.body.bitcoinCash,
        ethereum: req.body.ethereum

    })

    await UserDepositNow.save()
    res.send(".........Waiting for BlockChain confirm to credit your Dashboard")
})

Router.post("/updateAccountBalance/:id", async (req, res) => {
    console.log(req.body.accountBalance)
    const user = await User.findById(req.params.id);
    if (req.body.accountBalance) user.accountBalance = req.body.accountBalance;
    await user.save();
    res.send('Balance update');
});

Router.post('/withdraw/:id', async(req,res)=>{
    console.log(req.params.id)
    const user = await User.findById(req.params.id);
    if (req.body.zero_accountBalance) user.accountBalance = req.body.zero_accountBalance;
    await user.save();

    const email = req.body.email;
    const user_Name = req.body.user_Name; 
    const withdrawtAmount = req.body.accountBalance
    const WithdrawNow = new WithdrawDeposit({
    user_Name: req.body.user_Name,
    accountBalance: req.body.accountBalance,
    zero_accountBalance: req.body.zero_accountBalance,
    bitcoin: req.body.bitcoin,
    bitcoinCash: req.body.bitcoinCash,
    ethereum: req.body.ethereum,
    email: req.body.email,
})
await WithdrawNow.save()

const userUpdate = await User.findById(req.params.id);
if(userUpdate){
    
}
const payload = {
    user_id: user._id,
    full_Name: user.full_Name,
    user_Name: user.user_Name,
    email: user.email,
    password: user.password,
    bitcoin: user.bitcoin,
    bitcoinCash: user.bitcoinCash,
    ethereum: user.ethereum,
    ip_address: user.ip_address,           
    date: user.Date,
    accountBalance: user.accountBalance,
    activetDeposit: user.activetDeposit,
    date: user.date
}
const RefreshToken = jwt.sign(payload, process.env.RefreshToken)
res.header('RefreshToken', RefreshToken)

var mailgun = require('mailgun-js')({apiKey: process.env.API_key, domain: process.env.API_baseURL});
var data = {
    from: 'PayItForward <payitforwardisnvestmentlimited@gmail.com>',
    to: email,
    subject: 'Payment',
    text: `Hello ${user_Name } Payment of ${withdrawtAmount} have sent to your Bitcoin Wallert Address`
};
mailgun.messages().send(data, function (error, body) {
    console.log(body);
});

res.send(RefreshToken)
 })

 Router.post('/promo',(req,res)=>{
    var mailgun = require('mailgun-js')({apiKey: process.env.API_key, domain: process.env.API_baseURL});
    var data = {
        from: 'PayItForward <payitforwardisnvestmentlimited@gmail.com>',
        to: "frankainoo@gmail.com",
        subject: 'Payment',
        html: ``
    };
    mailgun.messages().send(data, function (error, body) {
        console.log(body);
    });
     res.send('Get Promotion')
 })


















































































// Router.post('/widthdraw/:id', async(req,res)=>{
//     console.log(req.body.zero_accountBalance)
//     const user = await User.findById(req.params.id);
//     if (req.body.zero_accountBalance) user.accountBalance = req.body.zero_accountBalance;
//     await user.save();

  
//     res.send('Payment send to Account Wallet')
// })






module.exports = Router;
