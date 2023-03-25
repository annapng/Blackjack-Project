const { Schema, model } = require('mongoose');


const profileSchema = new Schema({
    profileText: {
        type: String,
        minlength: 1,
        maxlength: 280,
        trim: true
    },
    profileAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    gamesPlayed: {
        type: Number,
        default: 0        
    },
    wins: {
        type: Number,
        default: 0
    },
    losses: {
        type: Number,
        default: 0
    }
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;