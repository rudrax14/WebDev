const router = require('express').Router();
const Message = require('../models/message.model');

// Get all messages (consider removing or restricting this route in a real application)
router.get('/', async (req, res) => {
    try {
        const messages = await Message.find().sort({ timestamp: 1 });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get messages for a specific room
router.get('/:room', async (req, res) => {
    try {
        const room = req.params.room;
        const messages = await Message.find({ room }).sort({ timestamp: 1 });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Post a new message to a specific room
router.post('/', async (req, res) => {
    const message = new Message({
        name: req.body.name,
        message: req.body.message,
        room: req.body.room  // Include room in message
    });

    try {
        const newMessage = await message.save();
        res.status(201).json(newMessage);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
