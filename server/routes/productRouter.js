const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productControllers");

//Get All Products:
//GET Request

productRouter.get("/products", productController.getProducts, (req, res) => {
  res.status(200).json("Get products");
});

//Add One Product:
//POST Request

productRouter.post("/products", productController.addProduct, (req, res) => {
  res.status(200).json(res.locals.products);
});

//Delete One Product:
//DELETE Request

productRouter.delete(
  "/products/:id",
  productController.deleteProduct,
  (req, res) => {
    res.status(200).json("Delete product");
  }
);

module.exports = productRouter;
