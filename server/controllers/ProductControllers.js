const priceTrackerDB = require('../models/priceTrackerModel.js');

const productController = {};

//Get Products Controller- GET Request:
productController.getProducts = (req, res, next) => {
  const userProducts = `SELECT * FROM users_to_products  
  JOIN products ON users_to_products.product_id=products._id 
  JOIN lowest_daily_price ON lowest_daily_price.product_id=products._id 
  WHERE users_to_products.user_id=$1`;

  let values = [req.params.user];

  priceTrackerDB
    .query(userProducts, values)
    .then((data) => {
      // console.log(data.rows);
      res.locals.products = data.rows;
      return next();
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
};

//Add Product Controller- POST Request:
productController.addProduct = (req, res, next) => {
  const { productName, imageUrl, googleUrl, date, lowestDailyPrice, storeUrl, storeName, imageUrl} = req.body; //from websraping and frontend
  const {user} = req.params;
  
  /* when add product, need to update all tables: 
  1) product table, check if product exists: product_name	image_url	google_url
  2) users_to_products, add to particular user: user_id product_id
  3)lowest_daily_price: product_id	date	store_name	lowest_daily_price	store_url
  */

  let addProduct = `
        INSERT INTO products (product_name, image_url) VALUES ($1, $2) RETURNING *
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
