const express = require('express');
const cityRouter = require('./city.routers');
const router = express.Router();

// colocar las rutas aquí

router.use('/cities', cityRouter)

module.exports = router;