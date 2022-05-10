import React, { useState } from 'react'

import { NavLink, useHistory } from "react-router-dom";

import "./login.css"

function Login() {


    const history = useHistory();



    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");


    const LoginUser = async(e) => {


        e.preventDefault();




        const res = await fetch("/Login", {


            method: "POST",

            headers: {

                "Content-Type": "application/json"
            },

            body: JSON.stringify({




                email,
                password




            })
        })



        const ress = await res.json();

        if (ress.status === 422 || !ress) {


            window.alert("invalid resigart")

            console.log("invalid")
        } else {

            window.alert("complete");

            console.log("complete")

            history.push("/dapp")
        }


    }





    return ( <
        div >
        <
        div className = "one" >

        <
        h1 > form Register < /h1>


        <
        form method = "POST" >


        <
        p > email < /p>




        <
        input type = "email"
        id = ""
        name = "email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        placeholder = "name email" / >



        <
        p > password < /p>


        <
        input type = "password"
        id = ""
        name = "password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        placeholder = "name password" / >



        <
        br / >

        <
        br / >

        <
        input type = "submit"
        value = "submit"
        onClick = { LoginUser }
        name = ""
        id = "" / >

        <
        /form>


        <
        /div>



        <
        /div>
    )
}

export default Login