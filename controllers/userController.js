import { User } from "../models/userModel"


const createUser = async (req, res) => {
    
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).json({ message: "User Created Successfully." })
    } catch (error) {
        res.status(409).json({ message: error })
    }
}