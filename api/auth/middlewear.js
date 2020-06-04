const User = require('../models/User')
module.exports = async (req, res, next) => {
    const userId = req.body.userId;
    if (userId) {
        const test = await User.findById(userId);
        req.user = test._id;
    };
    next();
}