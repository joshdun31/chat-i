import React from 'react'
import { Link,useHistory} from 'react-router-dom'
import '../css/style.css'
import {useState,useEffect} from 'react'

export const Home=(()=>{
    const [username,setName]=useState('');
    const [roomname,setRoom]=useState('');
    const history=useHistory();

    const submit=(e)=>{
        e.preventDefault();
        history.push(`/chat?name=${username}&room=${roomname}`);
    }

    return(
        <div className="container">
            <div className="heading">
                <h2>Join the Chat Room</h2>
            </div>
            <div className='form'>
                <form onSubmit={(e)=>submit(e)}>
                    <input autoFocus='true' type="text" value={username} required onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"></input>
                    <input type="text" value={roomname} required onChange={(e)=>setRoom(e.target.value)} placeholder="Enter room name" ></input>
                    <Link onClick={(e)=>(!username || !roomname)?e.preventDefault():null} to={`/chat?name=${username}&room=${roomname}`}>
                        <button type="submit" id="submit">Join</button>
                    </Link>
                </form>
            </div>
        </div>
    )
})
