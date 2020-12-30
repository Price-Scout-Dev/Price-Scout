const priceTrackerDB = require("../models/priceTrackerModel.js");

const productController = {};

//Get Products Controller- GET Request:
productController.getProducts = (req, res, next) => {
  // This gets the user's products with the most recent timestamp
  const userProducts = `SELECT DISTINCT ON (lowest_daily_price.product_id) *
  FROM users_to_products
    JOIN products ON users_to_products.product_id=products._id
    JOIN lowest_daily_price ON lowest_daily_price.product_id=products._id
  WHERE users_to_products.user_id=$1
  ORDER BY lowest_daily_price.product_id, lowest_daily_price.timestamp DESC;
  `;

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
productController.addProduct = async (req, res, next) => {
  const {
    product_name,
    image_url,
    google_url,
    timestamp,
    lowest_daily_price,
    store_url,
    store_name,
  } = req.body; //from websraping and frontend
  const { user } = req.params;

  //Add to products table and return product_id
  const newProductId = await priceTrackerDB.query(
    `INSERT INTO products (product_name, image_url, google_url) VALUES ($1,$2,$3) returning products._id`,
    [product_name, image_url, google_url]
  );
  // console.log("newProduct ID is: ", newProductId.rows[0]._id);

  //Add to user_to_products table using product_id
  const usersToProductsQuery = `INSERT into users_to_products (user_id,product_id) VALUES ($1,$2)`;
  const usersToProductsValues = [user, newProductId.rows[0]._id];

   //Add to lowest_daily_price table using product_id
  const lowestDailyPriceQuery = `INSERT into lowest_daily_price (product_id, store_name,	lowest_daily_price,	store_url,) VALUES ($1,$2,$3,$4)`;
  const lowestDailyPriceValues = [
    newProductId.rows[0]._id,
    store_name,
    lowest_daily_price,
    store_url,
    timestamp,
  ];

  priceTrackerDB
    .query(usersToProductsQuery, usersToProductsValues)
    .query(lowestDailyPriceQuery, lowestDailyPriceValues)
    .then((data) => {
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
