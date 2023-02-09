const User = require('../models/UserModel');
exports.userSignupService = async (userInfo) => {
    const user = User.create(userInfo);
    return user;
}
exports.userSigninService = async (email) => {
    const user = User.findOne({ email });
    return user;
}