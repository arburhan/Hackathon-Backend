const User = require('../models/UserModel');
exports.userSignupService = async (userInfo) => {
    const user = User.create(userInfo);
    return user;
}