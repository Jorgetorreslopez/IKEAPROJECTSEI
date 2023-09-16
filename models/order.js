const mongoose = require('mongoose')
const { model, Schema } = require('mongoose')
const itemSchema = require('./itemSchema')

const lineItemSchema = new Schema({
    quantity: {type: Number, default: 1},
    item: itemSchema
}, {
    timestamps: true,
    toJSON: {virtuals: true }
});

lineItemSchema.virtual('extPrice').get(function() {
    return this.quantity * this.item.price;
});

const orderSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    lineItems: [lineItemSchema],
    isPaid: {type: Boolean, default: false}
}, {
    timestamps: true, 
    toJSON: {virtuals: true}
});

orderSchema.virtual('orderTotal').get(function() {
    return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function() {
    return this.lineItems.reduce((total, item) => total + item.quantity, 0);
});

orderSchema.virtual('orderId').get(function() {
    return this.id.slice(-6).toUpperCase();
})

orderSchema.statics.getCart = function(userId) {
    return this.findOneAndUpdate(
        {user: userId, isPaid: false},
        {user: userId},
        {upsert: true, new: true}
    );
};

orderSchema.methods.addItemToCart = async function(itemId) {
    const cart = this;

    const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
    if (lineItem) {
        lineItem.quantity += 1;
    } else {
        const item = await mongoose.model('Item').findById(itemId);
        cart.lineItems.addToSet({item});
    }
    return cart.save();
};


orderSchema.methods.setItemQty = function(itemId, newQty) {
    const cart = this;

    const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
    console.log(lineItem)
    if (lineItem && newQty <= 0) {
        console.log('deleting line item')
        lineItem.deleteOne();
    } else if (lineItem) {
        console.log('adding line item')
        lineItem.quantity = newQty;
    }
    return cart.save();
};

module.exports = model('Order', orderSchema)

