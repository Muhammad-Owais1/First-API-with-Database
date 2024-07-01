import User from "../../models/user/index.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (user) {
            const checkPassword = bcrypt.compareSync(password, user.password)
            if (checkPassword) {
                var token = jwt.sign({
                    email: user.email
                },
                    process.env.JWT_SECRET
                )
                res.status(200).send({
                    status: 200,
                    user,
                    message: "Login sucessfull",
                    token
                })
            }
            else {
                res.status(401).send({
                    status: 401,
                    message: "Incorrect password"
                })
            }
        }
        else {
            res.status(404).send({
                status: 404,
                message: "User not found"
            })
        }
        res.status(200).send({
            status: 200,
            users
        })
    }
    catch (error) {
        res.status(500).send({
            status: 500,
            error
        })
    }
}

export default loginUser