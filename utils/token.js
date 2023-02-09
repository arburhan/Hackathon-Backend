exports.generateToken = (userInfo) => {
    const payload = {
        email: userInfo.email,
        role: userInfo.role
    }
    const token = jwt.sign(payload, process.env.TOKEN_SECRET, {
        expiresIn: 2000
    });
    return token;
}