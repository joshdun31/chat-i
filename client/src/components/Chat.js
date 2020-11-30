import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import {useState,useEffect} from 'react';
import queryString from 'query-string';
import '../css/style.css';
import io from 'socket.io-client';
import {Messages} from './Messages';
import {Info} from './Info';
import ScrollToBottom from 'react-scroll-to-bottom';

const ENDPOINT='https://chat-i.herokuapp.com';

var socket;
export const Chat=({location})=>{

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const history=useHistory('');

    useEffect(()=>{
        const {name,room}=queryString.parse(location.search)
        socket=io(ENDPOINT)
        setName(name)
        setRoom(room)
        socket.emit('join',{name,room},(error)=>{
            if(error)
            {   
                history.push('/');
                alert(error)
            }
        })
        
    },[ENDPOINT,location.search])

    useEffect(()=>{
        socket.on('message',data=>{
            setMessages(msg=>[...msg,data]);
        })

        socket.on('roomData',({users})=>{
            setUsers(users);
        })
    },[])

    const sendMessage=(e)=>{
        e.preventDefault();
        if(message){
            socket.emit('sendMessage',message,()=>setMessage(''));
        }
    }


    return(
        <div className="chat-box">
            <div className="user-info">
                <Info users={users}/>
            </div>
            <div className="chat-layout">
                <div className="chat-room">
                    <h2>{room}</h2>
                    <div className="green-circle"></div>
                </div>
                <ScrollToBottom className="chat-message">
                        <Messages messages={messages} name={name}/>
                </ScrollToBottom>
                <div className="chat-form">
                    <form>
                        <input autoFocus='true' value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Type your message"></input>
                        <button type='submit' onClick={(e)=>sendMessage(e)}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
