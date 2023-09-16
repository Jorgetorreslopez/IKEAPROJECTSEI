const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');



const favoriteSchema = new mongoose.Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    items: [itemSchema]
}, {
    timestamps: true, 
    toJSON: {virtuals: true}
});

const Favorites = mongoose.model('Favorites', favoriteSchema);

module.exports = Favorites