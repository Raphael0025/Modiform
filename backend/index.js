require('dotenv').config()

const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const multer = require('multer')

const path = require('path')

const users = require('./Routes/users')
const products = require('./Routes/products')
const cart = require('./Routes/cart')
const order = require('./Routes/orders')

const image = require('./Routes/image')

// express app
const app = express()
// Enable CORS for all routes
app.use(cors())
app.use(express.urlencoded({ extended: true }))
// middleware
app.use(express.json());


// Set up multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage, 
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit 
});

app.use('/api/image', upload.single('product_img'), image);
// routes
app.use('/api/users', users)
app.use('/api/products', products)
app.use('/api/cart', cart)
app.use('/api/orders', order)
// app.use('/api/image', image)

// connect to db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => {
    // listening
    app.listen(process.env.PORT, () => {
        console.log('connected to mongodb and listening on port', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})

module.exports = app;