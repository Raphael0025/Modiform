const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SizeSchema = new Schema({
    size: {
        type: String
    }
})

const ProductSchema = new Schema({
    item_name: {
        type: String,
        required: true,
        unique: false
    },
    unit_price: {
        type: Number,
        required: true,
        default: 0.00
    },
    qty: {
        type: Number,
        required: true,
        default: 0     
    },
    invClass:{
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    product_img: String,
    size: [SizeSchema]
}, { timestamps: true })

module.exports = mongoose.model('Product', ProductSchema, 'product_db') 