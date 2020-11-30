import React from 'react'
import styled from 'styled-components'
export const Message=(({message:{user,text},name})=>{
    let isCurrentUser=false;
    const trimmedName=name.trim().toLowerCase();
    if(user==trimmedName)
        isCurrentUser=true;
    
    const Text1=styled.p`
        width:max-content;
        background-color:#dfdfdf;
        padding:10px 12px;
        margin:5px 5px 5px 15px;
        border-radius:10px;
        display:inline-block;
    `
    const Text2=styled.p`
        width:max-content;
        background-color:rgba(12, 135, 200,0.85);
        color:#fff;
        padding:10px 12px;
        margin:5px 15px 5px 5px;
        border-radius:10px;
        display:inline-block;
    `
    const Text3=styled.p`
        width:max-content;
        background-color:#555;
        color:#fff;
        padding:10px 12px;
        margin:5px 15px 5px 5px;
        border-radius:10px;
        display:inline-block;
    `
    return(
        isCurrentUser?(
            <div className="chat-text right">
                <span className="chat-text-user">{trimmedName}</span>
                <div className="chat-text-inside">
                    <Text2>{text}</Text2>
                </div>
            </div>
        ):(
            <>
            {(()=>{
                if(user=='Admin')
                {
                    return(
                        <div className="chat-text center">
                            <span className="chat-text-user">{user}</span>
                        <div className="chat-text-inside">
                            <Text3>{text}</Text3>
                        </div>
            </div>
                    )
                }
                else{
                    return(
                        <div className="chat-text left">
                            <div className="chat-text-inside">
                                <Text1>{text}</Text1>
                            </div>
                            <span className="chat-text-user">{user}</span>
                        </div>
                    )
                }
            })()}
            </>
        )
    )
})