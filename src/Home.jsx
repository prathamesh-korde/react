import React from "react";
import './App.css'
const Home=()=>{
    return(
        <>
        <h1>Contact Form</h1>
        <br/>
    <label for="name">Name - </label>
    <input type="text" placeholder='enter your name' className='main_input' id='name' />
    <br/>
    <label for="email">Email - </label>
    <input type="email" placeholder='enter your Email' className='main_input' id='email' />
    <br/>
    <label for="num">enter mobile num-  </label>
    <input type="number" placeholder='enter your mobile no - ' className='main_input' id='num' />
    <br/>
    <label for="num">any commit-  </label>
    <input type="text" placeholder='enter your comment - ' className='main_input' id='num' />
    <br/>
    <br />
    <button id="submit">submit</button>
        </>
    )
}
export default Home;