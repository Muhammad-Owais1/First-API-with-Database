import User from '../../models/user/index.js'
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const postUser = async (req, res) => {
    try {
        const password = bcrypt.hashSync(req.body.password, 10)
        const user = await User.create({
            ...req.body,
            password
        })
        const data = user.toObject()
        delete data.password
        var token = jwt.sign({
            email: user.email
        },
            process.env.JWT_SECRET
        )
        console.log(data)
        res.status(201).send({
            status: 201,
            user,
            token
        })
    }
    catch(error) {
        res.status(500).send({
            status: 500,
            error
        })
    }
}

export default postUser