const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    user_name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    user_type: {
        type: String,
        default: 'customer',
        required: true
    },
    profile: {
        picture: {
            data: Buffer,  
            contentType: String
        }
    },
}, { timestamps: true })

// connected and created a schema model and inserted in the existing collection named user_db
module.exports = mongoose.model('User', UserSchema, 'user_db') 