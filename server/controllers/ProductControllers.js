const priceTrackerDB = require("../models/priceTrackerModel.js");

const productController = {};

//Get Products Controller- GET Request:
productController.getProducts = (req, res, next) => {
  return next();
};

//Add Product Controller- POST Request:
productController.addProduct = (req, res, next) => {
  const { productName, imageUrl } = req.body;
  let addProduct = `
        INSERT INTO products ( product_name, image_url) VALUES ($1, $2) RETURNING *
        `;
  let values = [productName, imageUrl];
  priceTrackerDB
    .query(addProduct, values)
    .then((data) => {
      res.locals.products = {};
      res.locals.products.productId = data.rows[0]._id;
      res.locals.products.productName = data.rows[0].product_name;
      res.locals.products.imageUrl = data.rows[0].image_url;
      return next();
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
};

//Delete Product Controller- DELETE Request:
productController.deleteProduct = (req, res, next) => {
  return next();
};

module.exports = productController;
