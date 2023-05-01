const { getChallengesService, challengeCreateService } = require("../services/challenges.service");

exports.getChallenges = async (req, res, next) => {
    try {
        const challenges = await getChallengesService();
        res.status(200).json({
            status: "success",
            challenges: challenges
        });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the challenges",
            error: error.message,
        });
    }
}

exports.createChallenge = async (req, res) => {
    try {
        await challengeCreateService(req.body);
        res.status(200).json({
            status: "success",
            message: "successfully create a challenge"
        })
    }
    catch (error) {
        res.status(500).json({
            status: "fail",
            message: error.message
        })

    }
}