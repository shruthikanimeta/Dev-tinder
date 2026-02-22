const express = require('express')

const app = express()

app.use("/test", (req,res) => {
    res.send('Hello from Shruthi Dinesh')
})

app.use("/home",(req,res)=>{
    res.send('Welcome to home page')
})

app.use("/",(req,res)=>{
    res.send('Hello Namaste')
})

app.listen(3000, () => {
    console.log('app is successfully listening to port')
})