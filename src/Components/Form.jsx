import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
const auth = getAuth();

export default function Form() {
    let register = () => {
        // let username = document.getElementById("username");
        let email = document.getElementById("email");
        let password = document.getElementById("password");

        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then(() => {
                alert("New user is regitsterred !")
            })
            .catch((err) => {
                console.log("err=>", err)
            })
    }

    return (
        <>
            <label htmlFor="username">Enter Your Username : </label>
            <input type="text" id='username' placeholder='Enter Username' /><br />
            <label htmlFor="username">Enter Your Email : </label>
            <input type="text" id='email' placeholder='Enter Email' /><br />
            <label onChange={gettingUserData} htmlFor="username">Enter Your Password : </label>
            <input type="text" id='password' placeholder='Enter Password' /><br /><br />
            <button onClick={register}>Register</button>
        </>
    )
}