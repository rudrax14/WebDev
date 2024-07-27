const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const socketio = require('socket.io');
const http = require('http');
const Message = require('./models/message.model');

dotenv.config();

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors()); // Allow all origins

const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/chat');
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB connection established successfully');
});

// API Routes
const messagesRouter = require('./routes/message.route');
app.use('/messages', messagesRouter);

// Socket.IO
io.on('connection', (socket) => {
    console.log(`Socket ${socket.id} connected`);

    socket.on('joinRoom', (room) => {
        socket.join(room);
        console.log(`Socket ${socket.id} joined room ${room}`);
    });

    socket.on('sendMessage', async ({ name, message, room }) => {
        // Saving to database
        const newMessage = new Message({ name, message, room });
        await newMessage.save();
        // Sending to all clients in the room
        io.to(room).emit('message', { name, message });
    });

    socket.on('disconnect', () => {
        console.log(`Socket ${socket.id} disconnected`);
    });
});

server.listen(8000, () => {
    console.log(`Server running on port ${8000}`);
});
