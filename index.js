const express = require("express");
const {Server} = require("socket.io")

const http = require("http")

const app = express()
const httpServer = http.createServer(app)
httpServer.listen(7500,()=>{
    console.log("server is running at PORT 7500")
})
 
const io = new Server(httpServer);
// const io = new Server(app.Server)


io.on("connection",(socket)=>{
    console.log("client connected")
    
    socket.on("msg",(sandesh)=>{
        // console.log(sandesh)
         socket.broadcast.emit("msg",sandesh)
        // if(sandesh ==="Hello"){
        //     socket.emit("msg","Hii")
        // }else if(sandesh==="How are you?"){
        //     socket.emit("msg","I am good. What about you")
        // }else if(sandesh==="I am also fine"){
        //     socket.emit("msg","it's Nice to hear")
        // }else if(sandesh==="Ok bye"){
        //     socket.emit("msg","bye")
        // }
        // else{
        //     socket.emit("msg","Let's talk later, as I have some Important works to do.")
        // }
        
        // socket.broadcast.emit("msg","a new client joined the chat" +online)
    })

    // socket.on("disconnect",()=>{
       
    //     socket.broadcast.emit("msg","total online:" + online)
    // })
})


app.get("/",(req,res)=>{
    res.send("Chat Application")
})

// app.listen(7600,()=>{
//     console.log("server is running at PORT 7600")
// })