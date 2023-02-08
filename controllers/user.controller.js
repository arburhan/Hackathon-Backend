const { userSignupService } = require("../services/user.service");

exports.signUp = async (req, res) => {
    try {
        const user = await userSignupService(req.body);
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