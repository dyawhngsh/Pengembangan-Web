const express = require('express')
const controller = require('../controllers/controllersProduct.js')
const routers = express.Router()

//Routing RESTfull
routers.get('/', controller.getAllProducts);
routers.get('/:id', controller.getProductById);
routers.post('/', controller.createProduct);
routers.put('/:id', controller.updateProduct);
routers.delete('/:id', controller.deleteProduct);

module.exports = routers;