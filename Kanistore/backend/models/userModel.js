const mongoose = require('mongoose');
// User schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true, // Store emails in lowercase
    },
    password: {
        type: String,
        required: true,
    },
    // Default to null if no profile picture is provided
    role: {
        type: String,
        enum: ['GENERAL', 'ADMIN'], // Define possible roles
        default: 'GENERAL', // Default role
    },
    phoneNo: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Create and export the user model
const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
