const express = require("express");
const hbs = require('hbs');
const UserModel = require("../src/models/user");
const OrderModel = require("../src/models/order");
const ContactModel = require("../src/models/contact");
const AppointmentModel = require("../src/models/appointment");
const path = require('path');
var bodyParser = require('body-parser');
require("./db/conn");

const app = express();

const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    console.log('hello.');
    res.render('index');
})

//login
app.get("/login", (req, res) => {
    console.log('login.');
    res.render('index');
})
app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await UserModel.findOne({ email: email });
        if (password == user.password) {
            console.log("Login successfull");
            // userId = user._id;
            // currentUser = user;
            // var firstName = user.firstName;
            // var lastName = user.lastName;
            // res.render('index', { userId, firstName, lastName });
            res.render("home")
        } else {
            res.send("Wrong login credentials.");
            
        }
    } catch (e) {
        res.send(e);
    }
})

//signIn
app.get("/signIn", (req, res) => {
    res.render('signIn');
})

app.post("/signIn", async (req, res) => {
    console.log("Signin.");
    try {
        const password = req.body.password;
        const confirmPassword = req.body.confirmPassword;
        if (password == confirmPassword) {
            const userModel = new UserModel({
                name: req.body.name,
                email: req.body.email,
                password: password
            })
            console.log(userModel);
            const result = await userModel.save();
            console.log(result);
            res.render("login");
        } else {
            res.end("Password not matched.");
        }
    } catch (e) {
        res.send(e);
    }
})

//order
app.get("/order", (req, res) => {
    res.render('order');
})

app.post("/order", async (req, res) => {
    console.log("Order.");
    try {
        const orderModel = new OrderModel({
            name: req.body.name,
            shopId: req.body.shopId,
            quantity: req.body.quantity
        })
        console.log(orderModel);
        const result = await orderModel.save();
        console.log(result);
        res.render("index");
    } catch (e) {
        res.send(e);
    }
})

//services
app.get("/services", (req, res) => {
    res.render('services');
})

//home
app.get("/home", (req, res) => {
    res.render('home');
})

//contact
app.get("/contact", (req, res) => {
    res.render('contact');
})
app.post("/contact", async (req, res) => {
    console.log("Contact.");
    try {
        const contactModel = new ContactModel({
            name: req.body.name,
            rollNo: req.body.rollNo,
            email: req.body.email,
            hostelName: req.body.hostelName,
            phone: req.body.phone
        })
        console.log(contactModel);
        const result = await contactModel.save();
        console.log(result);
        res.render("home");
    } catch (e) {
        res.send(e);
    }
})

//appointment
app.get("/appointment", (req, res) => {
    res.render('appointment');
})
app.post("/appointment", async (req, res) => {
    console.log("appointment.");
    try {
        const appointmentModel = new AppointmentModel({
            name: req.body.name,
            rollNo: req.body.rollNo,
            email: req.body.email,
            phone: req.body.phone
        })
        console.log(appointmentModel);
        const result = await appointmentModel.save();
        console.log(result);
        res.render("home");
    } catch (e) {
        res.send(e);
    }
})


//server
app.listen(3000, (err) => {
    console.log("Server started");
})