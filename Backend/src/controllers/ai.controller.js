const aiService = require('../services/ai.service');

const getReview = async (req, res) => {

    const code = req.body.code;
    if (!code) {
        return res.status(400).json({ message: "code is required" });
    }

    const response = await aiService(code);

    res.send(response);
}

module.exports = {
    getReview
}