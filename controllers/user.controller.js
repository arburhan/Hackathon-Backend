const User = require("../models/UserModel");
const { userSignupService, userSigninService } = require("../services/user.service");
const { generateToken } = require("../utils/token");

exports.signUp = async (req, res) => {
    try {
        await userSignupService(req.body);
        res.status(200).json({
            status: "success",
            message: "successfully signup"
        })
    }
    catch (error) {
        res.status(500).json({
            status: "fail",
            message: error.message
        })

    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(401).json({
                status: "fail",
                message: error.message
            })
        }
        const user = await userSigninService(email);
        if (!user) {
            res.status(401).json({
                status: "fail",
                message: error.message
            })
        }
        const isPasswordValid = user.comparePassword(password, user.password);


        if (!isPasswordValid) {
            return res.status(403).json({
                status: "fail",
                error: "User or Password is not correct",
            });
        }
        if (user.status != 'active') {
            return res.status(403).json({
                status: "fail",
                error: "User account is not activated",
            });
        }
        const token = generateToken(user);
        const { password: pwd, ...others } = user.toObject();
        res.status(200).json({
            status: "success",
            data: {
                user: others,
                token
            }
        })


    }
    catch (error) {
        res.status(500).json({
            status: "fail",
            message: error.message
        })
    }
}

exports.getMe = async (req, res) => {
    try {
        const user = await userSigninService(req.user?.email);
        const { password: pwd, ...others } = user.toObject();
        res.status(200).json({
            status: "success",
            data: others
        })
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: error.message,
        });
    }
}