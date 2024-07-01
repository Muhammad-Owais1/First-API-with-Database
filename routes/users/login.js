import User from "../../models/user/index.js";
import bcrypt from 'bcrypt'


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne()
        if (user) {
            const checkPassword = bcrypt.compareSync(password, user.password)
            if (checkPassword) {
                res.status(200).send({
                    status: 200,
                    user
                })
            }
            else {
                res.status(404).send({
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
    catch(error) {
        res.status(500).send({
            status: 500,
            error
        })
    }
}

export default loginUser