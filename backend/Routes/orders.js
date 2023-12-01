const express = require('express')
const { getOrders, deleteOrder, totalAmount, countOrders, updateOrder, createOrder } = require('../Controllers/OrderController')

const router = express.Router()

router.get('/', getOrders)

router.get('/count', countOrders)

router.get('/revenue', totalAmount)

router.post('/', createOrder) 

router.delete('/:id', deleteOrder)

router.patch('/:id', updateOrder)

module.exports = router