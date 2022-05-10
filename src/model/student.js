// const mongoose = require('mongoose')


// const validator = require('validator')


// const Student = new mongoose.Schema({


//     name: {

//         type: String,
//     },

//     email: {

//         type: String,
//     },


//     password: {

//         type: Number,
//     }

// })


// const Register = new mongoose.module("Users", Student);


// export default Register;

const mongoose = require("mongoose");
const validator = require('validator')


const student = new mongoose.Schema({



    name: {


        type: String,
        required: true,
        max: 10

    },

    email: {

        type: String,
        required: true,

    },
    password: {

        type: Number,
        required: true,

    },



})

const Register = new mongoose.model("Users", student);



module.exports = Register;


// [true, 'User phone number required']