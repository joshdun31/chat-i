import React from 'react'
import {Message} from './Message';

export const Messages=(({messages,name})=>{
    return(
    <div>
        {messages.map((msg,i)=> <div key={i}><Message message={msg} name={name}/></div>)}
    </div>
    )
})