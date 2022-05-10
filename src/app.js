const express = require('express');

require('./db/conn')

const app = express();

const Register = require("./model/student")


app.use(express.json());


const port = 9000;




app.get('/', (req, res) => {



    res.send("jugal sharma")

})



//form register user


app.post('/Sign', async(req, res) => {


    try {



        const data = new Register({


            name: req.body.name,
            email: req.body.email,
            password: req.body.password

        })


        const userdata = await data.save();

        res.status(201).json({ error: "successfuly" })

        console.log(userdata);

    } catch (e) {




    }




})


//login form with


app.post("/Login", async(req, res) => {


    try {


        const email = req.body.email

        const password = req.body.password

        const useremail = await Register.findOne({ email: email });


        if (useremail.password == password) {


            res.status(201).json({ error: "successfuly" })


        } else {


            json({ error: "invalid login infomation" })

        }


    } catch (e) {


        res.status(401).json({ error: " not successfuly" + e })
    }

})


app.listen(port, () => {



    console.log("this is port number start " + port);


})