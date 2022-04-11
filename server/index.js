const express = require('express')
const app = express()
const server = require('http').createServer(app);
const {MakeConnection} = require('../server/gallium/scripts')
const wss = MakeConnection(server)
const Ws = wss.OnConnect(true)

app.get('/',(req,res)=>{res.send("Hello world")})



server.listen(9876, ()=>console.log(`Listening on port ${9876}`))



