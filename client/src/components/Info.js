import React from 'react'
import {User} from './User'

export const Info=({users})=>{
    const user=[]
    return(users?(
        <div style={{textAlign:'center'}}>
            <h2>Users Online</h2>
            {(()=>{
                console.log(users)
                for(const value in users){
                    user.push(users[value].name)
            }})()}
            {
                user.map((u)=><User username={u}/>)
            }
        </div>
    ):null
)}