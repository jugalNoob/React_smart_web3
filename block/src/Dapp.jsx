import React, { useState, useEffect } from 'react'
import "./dapp.css"

import Web3 from 'web3'


import detectEthereumProvider from '@metamask/detect-provider'
import { loadContract } from "./utils/load-contract.js"

function Dapp() {




    const [web3Api, setWeb3] = useState({


        provider: null,

        web3: null,

        contract: null,




    })



    useEffect(() => {


        const loadProvider = async() => {


            const provider = await detectEthereumProvider();

            const contract = await loadContract("Funder", provider)



            if (provider) {

                provider.request({ method: "eth_requestAccounts" })

                setWeb3({
                    web3: new Web3(provider),

                    provider,
                    contract

                });
            } else {

                console.error("please install MetaMask")
            }


        }

        loadProvider()

    }, [])

    console.log(web3Api.web3)





    const [account, setAccount] = useState(null);



    useEffect(() => {


        const getAccount = async() => {


            const accounts = await web3Api.web3.eth.getAccounts()

            setAccount(accounts[0])

        }

        web3Api.web3 && getAccount()

    }, [web3Api.web3])




    const [balance, setBalance] = useState(null);

    useEffect(() => {


        const loadBlance = async() => {

            const { contract, web3 } = web3Api;

            const balance = await web3.eth.getBalance(contract.address);

            setBalance(web3.utils.fromWei(balance, "ether"));
        }
        web3Api.contract && loadBlance();

    }, [web3Api])



    const transFund = async() => {

        const { web3, contract } = web3Api;

        await contract.transfer({

            from: account,
            value: web3.utils.toWei("2", "ether"),
        })


    }



    const withdrawFund = async() => {
        const { contract, web3 } = web3Api;
        const withdrawAmout = web3.utils.toWei("2", "ether");
        await contract.withdraw(withdrawAmout, {
            from: account,
        });

    };


    return ( <
        div >


        <
        div className = "class" >

        <
        h1 > smart contract Address < /h1> <
        h2 > { account ? account : "not coonect" } < /h2>


        <
        h4 > Balance { balance }: ETh < /h4>


        <
        button id = "bt1"
        onClick = { transFund } > trans < /button>

        <
        button id = "bt2"
        onClick = { withdrawFund } > withdraw < /button> 

        <
        /div>



        <
        /div>
    )
}

export default Dapp