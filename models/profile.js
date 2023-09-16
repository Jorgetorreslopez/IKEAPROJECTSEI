const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema({
    firstName: {type: String, default: ""},
    lastName: {type: String, default: ""},
    phoneNumber: {type: String, default: ""},
    location: {type: String, default: ""},
    aboutYou: {type: String, default: ""},
    profilePhoto: {type: String, default: "" }
});

const Profile = mongoose.model('Profile',profileSchema)

module.exports = Profile