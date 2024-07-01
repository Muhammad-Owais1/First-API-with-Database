import User from "../../models/user/index.js"

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndUpdate(id, req.body)
        res.status(200).send({
            status: 200,
            message: "User updated"
        })
    }
    catch(error) {
        res.status(500).send({
            status: 500,
            error
        })
    }
}

export default updateUser