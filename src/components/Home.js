import React from 'react'
export default function Home(props){
    return(
        <div className='container m-4' style={props.mode}>
            <h1>Welcome to the home</h1>
            <h3>This Website Can Manipulate Your Text As You Want.</h3>
        </div>
    )
}