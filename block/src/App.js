import React from 'react'
import { Route } from 'react-router-dom'

import Form from './Form'


import Login from './Login'

import Dapp from './Dapp'

function App() {
    return ( <
        div >




        <
        Route exact path = "/" >

        <
        Form / >


        <
        /Route>


        <
        Route path = "/login" >

        <
        Login > < /Login>

        <
        /Route>


        <
        Route path = "/dapp" >

        <
        Dapp / >

        <
        /Route>


        <
        /div>
    )
}

export default App