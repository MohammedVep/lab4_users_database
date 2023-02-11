const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(value){
                var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
                return emailRegex.test(value);
            },
            message: "Invalid email address"
        }
    },
    address: {
        street: {
            type: String,
            required: true,
            trim: true
        },
        suite: {
            type: String,
            required: true,
            trim: true
        }, 
        city: {
            type: String,
            required: true,
            trim: true,
            validate: {
                validator: function(value) {
                    var cityRegex = /^[A-Za-z\s]*$/ 
                    return cityRegex.test(value);
                },
                message: "Invalid city"
            }
        },
        zipcode: {
            type: String,
            required: true,
            trim: true,
            validate:{
                 validator: function(value) {
                    var zipRegex = /^\d{5}(?:[-\s]\d{4})?$/
                    return zipRegex.test(value);
            },
            message: "Invalid zip"
            }
        },
        geo: {
            lat: {
                type: Number,
                required: true
            }, 
            lng: {
                type: Number,
                required: true
            }
        }
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(value) {
                var phoneRegex = /\b\d{1}\b-\b\d{3}\b-\b\d{3}\b-\b\d{4}\b/g;
                return phoneRegex.test(value);
            },
            message: "Invalid phone number"
        }
    },
    website: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function(value) {
                var urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm
                return urlRegex.test(value);
            },
            message: "Invalid website"
        }
    },
    company: {
        name: {
            type: String,
            required: true,
            trim: true
        },
        catchPhrase: {
            type: String,
            required: true,
            trim: true
        },
        bs: {
            type: String,
            required: true,
            trim: true
        }
    }

});

const User = mongoose.model("users", UserSchema);
module.exports = User;