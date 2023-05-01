const express = require('express')
const router = express.Router()
const challengeController = require('../../controllers/challenges.controller');


router.route('/')
    .get(challengeController.getChallenges)
    .post(challengeController.createChallenge)



module.exports = router