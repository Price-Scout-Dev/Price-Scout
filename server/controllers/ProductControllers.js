const priceTrackerDB = require("../models/priceTrackerModel.js");
const getProductInfo = require("../utils/productWebscraping.js");

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
/*

When a user adds a product: 
1 Front end uses SERPApi and sends to server { googleUrl }
2 Server needs to web scrape that googleURL and get { all the product info... }
3 Server needs to update the database with the {product info} (multiple databases to be updated)
4 What do we return to the front-end? 
  --return that the post request is successful
  --on the front end, it makes the getProducts fetch request to update state. 


*/

//Add Product Controller- POST Request:
productController.addProduct = async (req, res, next) => {
  // front end sends user and google_url only.  Then we use puppeteer to scrape the following:
  const { google_url } = req.body; //from websraping and frontend

  const { user } = req.params;

  //web scrape the google URL
  const productInfo = await getProductInfo(google_url);
  productInfo.google_url = google_url;
  // console.log("ProductInfo Object: ", productInfo)

  //Query to check if the product is already in the products table.

  let productInTableQuery =
    `SELECT * FROM products WHERE products.google_url=$1`;
  const productInTable = await priceTrackerDB.query(productInTableQuery, [
    google_url,
  ]);
  console.log("PRODUCT IN TABLE", productInTable)
  let productId = "";

  if (productInTable.rows.length > 0) {
    productId = productInTable.rows[0]._id;
    console.log("enter if conditional for duplicate google url")
  } else {
    //Add to products table and return product_id
    const newProductId = await priceTrackerDB.query(
      `INSERT INTO products (product_name, image_url, google_url) VALUES ($1,$2,$3) returning products._id`,
      [productInfo.product_name, productInfo.image_url, productInfo.google_url]
    );
    // console.log("newProduct ID is: ", newProductId.rows[0]._id);
    productId = newProductId.rows[0]._id;
  }

  //Add to user_to_products table using product_id
  const usersToProductsQuery = `INSERT into users_to_products (user_id,product_id) VALUES ($1,$2)`;
  const usersToProductsValues = [user, productId];

  //Add to lowest_daily_price table using product_id
  const lowestDailyPriceQuery = `INSERT into lowest_daily_price (product_id, store_name, lowest_daily_price,	store_url) VALUES ($1,$2,$3,$4)`;

  const lowestDailyPriceValues = [
    productId,
    productInfo.store_name,
    productInfo.lowest_daily_price,
    productInfo.store_url,
  ];
  try {
    const userToProductsInsert = await priceTrackerDB.query(
      usersToProductsQuery,
      usersToProductsValues
    );
    const lowestDailyPriceInsert = await priceTrackerDB.query(
      lowestDailyPriceQuery,
      lowestDailyPriceValues
    );
    console.log("Add Product Completed");
    return next();
  } catch (error) {
    console.log("error: ", error);
    next(error);
  }
};

//Delete Product Controller- DELETE Request:
productController.deleteProduct = (req, res, next) => {
  const { user, id } = req.params;

  const deleteProductFromUser = `DELETE FROM users_to_products WHERE user_id=$1 AND product_id=$2`;

  let values = [user, id];

  priceTrackerDB
    .query(deleteProductFromUser, values)
    .then((data) => {
      // console.log(data.rows);

      return next();
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
};

module.exports = productController;
