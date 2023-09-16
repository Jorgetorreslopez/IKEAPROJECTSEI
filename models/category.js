// require mongoose and connect schema to mongoose schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// category schema = new schema with name(string) and required true, add "sort order (number)", add timestamp
const categorySchema = new Schema ({
    name: {type: String, required: true},
    sortOrder: Number,
}, {
    timestamps: true
});

// export module category schema 
module.exports = mongoose.model('Category', categorySchema);