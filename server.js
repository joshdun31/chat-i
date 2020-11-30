const express=require('express')
const app=express()
const http=require('http')
const server=http.createServer(app);
const socketio=require('socket.io')
const cors = require('cors');
const PORT=process.env.PORT || 5000;

const { addUser, removeUser, getUser, getUsersInRoom } = require('./user');

app.use(cors())
// app.use(express.static('./client/public/'))
const io=socketio(server)
io.on('connect',(socket)=>{

    socket.on('join',({name,room},callback)=>{
        const {error,user}=addUser({id:socket.id,name,room})
        if (error) return callback(error)
        socket.join(user.room)
        socket.emit('message',{user:'Admin',text:`${user.name} , welcome to room ${user.room}`})
        io.to(user.room).emit('roomData',{room:user.room,users:getUsersInRoom(user.room)})
        callback()
    })

    socket.on('sendMessage',(message,callback)=>{
        const {user}=getUser(socket.id)
        io.to(user.room).emit('message',{user:user.name,text:message})
        callback()
    })

    socket.on('disconnect',()=>{
        const user=removeUser(socket.id)

        if(user){
            io.to(user.room).emit('message',{user:'Admin',text:`${user.name} has left the chat.`})
            io.to(user.room).emit('roomData',{room:user.room,users:getUsersInRoom(user.room)})
        }
    })

})

if(process.env.NODE_ENV=="production")
{
    app.use(express.static('client/build'))
    const path=require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

server.listen(PORT,()=>{
    console.log("Server Running")
})