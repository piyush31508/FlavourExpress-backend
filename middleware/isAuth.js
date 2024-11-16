import jwt from 'jsonwebtoken';
import { User } from '../model/user.js';

export const isAuth = async (req, res, next) => {
    try {
        const token = req.headers.token;

        if (!token) {
            return res.status(401).json({
                message: "You are not authorized to access this resource."
            });
        } 

        const decoded = jwt.verify(token, process.env.SECRET);

        req.user = await User.findById(decoded._id);

        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message:"Login First"
        })
    }
}