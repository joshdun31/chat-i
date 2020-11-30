import React from 'react'
import '../css/style.css'
import styled from 'styled-components'

export const User=(({username})=>{

    const Green=styled.div`
        width:0.6rem;
        height:0.6rem;
        border-radius:0.3rem;
        background-color:rgba(10,220,50,0.9);
        margin-left:0.3rem;
    `
    return(
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%'}}>
            <p>{username}</p>
            <Green />
        </div>
    )
})