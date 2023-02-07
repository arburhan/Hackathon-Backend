const express = require('express')
const router = express.Router()
const challengeController = require('../../controllers/challenges.controller');


router.route('/')
    .get(challengeController.getChallenges)










module.exports = router