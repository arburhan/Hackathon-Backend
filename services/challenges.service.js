const Challenge = require("../models/ChallengeModel");

exports.getChallengesService = async () => {
    const challenges = await Challenge.find();
    return challenges;
}

exports.challengeCreateService = async (challengeInfo) => {
    const challenge = Challenge.create(challengeInfo);
    return challenge;
}