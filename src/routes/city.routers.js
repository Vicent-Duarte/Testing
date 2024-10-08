const { getAll, create, getOne, update, remove } = require('../controllers/city.controllers');
const express = require('express');

const cityRouter = express.Router();

cityRouter.route("/")
	.get(getAll)
        .post(create)
        
cityRouter.route("/:id")
        .get(getOne)
        .delete(remove)
        .put(update)

module.exports = cityRouter;