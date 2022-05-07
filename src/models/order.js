const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    shopId: {
        type: Number,
        required: true,
    }
});

const OrderModel = new mongoose.model("Order", orderSchema);

module.exports = OrderModel;