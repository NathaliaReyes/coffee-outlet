const router = require('express').Router();
const { Feedback } = require('../../models');
const withAuth = require('../../utils/auth');

// This route is for creating a new feedback - endpoint: /localhost:3001/api/feedbacks
router.post('/', withAuth, async (req, res) => {
    try {
        const newFeedback = await Feedback.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newFeedback);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;