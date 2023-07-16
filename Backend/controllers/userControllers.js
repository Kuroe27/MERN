import pkg from 'jsonwebtoken';
const { Jwt } = pkg;
import bcrypt from 'bcryptjs'
import asyncHandler from "express-async-handler"
import User from "../model/userModel.js"
// register new user
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if (!name && !email && !password) {
        res.status(400)
        throw new Error('Please complete all fields')
    }
    const userExist = await User.findOne({ email })

    if (userExist) {
        res.status(400)
        throw new Error('User already taken')
    }

    // hash pass
    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(password, salt)

    // create user
    const user = await User.create({
        name,
        email,
        password: hashPass
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(400)
        throw new Error('Invalid User')
    }

    res.json(req.body)
})


// login user
const loginUser = asyncHandler(async (req, res) => {
    res.json({ mes: 'login' })
})

// get user
const getUser = asyncHandler(async (req, res) => {
    res.json({ mes: 'spec' })
})



export { registerUser, loginUser, getUser }