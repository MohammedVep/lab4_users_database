const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/users')

const app = express();
app.use(express.json());
mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://101345468:votzeC-wowxar-hibme1@cluster1.h6yahll.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(soccess => {
    console.log("MongoDB connected")
}).catch(err => {
    console.log("MongoDB connection failed")
});

app.use(userRouter);

app.listen(3000, () => {
    console.log("Server is on")
})