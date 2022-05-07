const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollNo: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    hostelName: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    }
});

const ContactModel = new mongoose.model("ContactUs", contactSchema);

module.exports = ContactModel;