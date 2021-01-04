const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/ProductControllers");

//Product Routers:

//Get All Products:
//GET Request
productRouter.get(
  "/products/:user",
  productController.getProducts,
  (req, res) => {
    res.status(200).json({ products: res.locals.products });
  }
);

//Add One Product:
//POST Request
productRouter.post(
  "/products/:user",
  productController.addProduct,
  (req, res) => {
    res.status(200).json("Added product");
  }
);

//Delete One Product:
//DELETE Request
productRouter.delete(
  "/products/:user/:id",
  productController.deleteProduct,
  (req, res) => {
    res.status(200).json("Delete product");
  }
);

module.exports = productRouter;
