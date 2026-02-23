const express = require('express')

const app = express()

app.get("/user/:userId/:name/:password", (req,res) => {
    console.log(req.params)
    res.send({firstName:'Dinesh',lastName:'Surineni'})
})


app.listen(3000, () => {
    console.log('app is successfully listening to port')
})