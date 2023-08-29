// need to require mongoose and bcrypt
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 5;
//user schema will need name (string) require this to be true and email (string) require to be true, and make it unique, so emails cant be the same
//password(string) add mininum length and required
//add timestamps to know when people sign in/up
const userSchema = new Schema ({
    username: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, minLength: 5, required: true},
    isLoggedIn: {type: Boolean, required: true, default: false}
}, {
timestamps: true
})

//add userschema save function
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    //updates the password with the computed hash
    this.password = await bcrypt.hash(this.password);
    return next();
})

//add export module at the end.
module.exports = mongoose.model('User', userSchema);