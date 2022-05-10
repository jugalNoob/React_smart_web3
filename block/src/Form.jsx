import React, { useState } from 'react'

import "./form.css"
import { NavLink, useHistory } from "react-router-dom";

function Form() {
    const history = useHistory();


    const [user, setUser] = useState({

        name: "",
        email: "",
        password: "",


    });


    let name, value;


    const handleInputs = (e) => {


        console.log(e);


        name = e.target.name;

        value = e.target.value;

        setUser({...user, [name]: value });


    }




    const PostDate = async(e) => {


        e.preventDefault();

        const { name, email, password } = user;


        const res = await fetch("/Sign", {


            method: "POST",

            headers: {

                "Content-Type": "application/json"
            },

            body: JSON.stringify({



                name,
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

            history.push("/login")
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
        p > name < /p>

        <
        input type = "text"
        required name = "name"
        id = ""
        autocomplete = "off"
        value = { user.name }
        onChange = { handleInputs }
        placeholder = "Enter name" / >


        <
        p > email < /p>

        <
        input type = "email"
        required name = "email"
        id = ""
        value = { user.email }
        onChange = { handleInputs }
        autocomplete = "off"
        placeholder = "Enter email" / >


        <
        p > password < /p>


        <
        input type = "password"
        required name = "password"
        value = { user.password }
        onChange = { handleInputs }
        id = ""
        autocomplete = "off"
        placeholder = "Enter password" / >

        <
        br / >

        <
        br / >

        <
        input type = "submit"
        value = "submit"
        onClick = { PostDate }
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

export default Form