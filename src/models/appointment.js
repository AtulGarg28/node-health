const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
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
    phone: {
        type: Number,
        required: true,
    }
});

const AppointmentModel = new mongoose.model("Appointment", appointmentSchema);

module.exports = AppointmentModel;