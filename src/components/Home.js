import React from 'react'
import { Link } from 'react-router-dom'
export default function Home(props){
    return(
        <div className='container text-center' style={props.mode}>
            <h1>Welcome To The Home </h1>
            <h3>This Website Can Manipulate Your Text As You Want.</h3>
            <Link className='btn btn-outline-primary m-3' to="/textutils/textform">Click Here - To Manipulate</Link>
        </div>
    )
}