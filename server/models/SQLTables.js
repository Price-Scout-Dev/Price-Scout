const priceTrackerDB = require('./priceTrackerModel.js');
// const dotenv = require('dotenv').config();

const productsTable = `
  CREATE TABLE products (
    _id SERIAL,
    product_name VARCHAR NOT NULL,
    image_url VARCHAR NOT NULL,
    google_url VARCHAR UNIQUE
    PRIMARY KEY (_id)
  )`;

const lowestDailyPriceTable = `
  CREATE TABLE lowest_daily_price (
    _id SERIAL,
    product_id INT NOT NULL UNIQUE references products(_id),
    date VARCHAR NOT NULL,
    store_name VARCHAR NOT NULL,
    lowest_daily_price FLOAT NOT NULL,
    store_url VARCHAR NOT NULL,
    PRIMARY KEY (_id)
  )`;

const usersTable = `
 CREATE TABLE users (
   _id SERIAL,
   email VARCHAR UNIQUE,
   password VARCHAR,
   PRIMARY KEY (_id)
 )
 `;

const usersToProductsTable = ` 
  CREATE TABLE users_to_products (
    _id SERIAL,
    user_id INT NOT NULL references users(_id),
    product_id INT NOT NULL references products(_id),
    PRIMARY KEY (_id)
  )`;

const sessionsTable = `
CREATE TABLE sessions (
  _id SERIAL,
  user_id INT NOT NULL references users(_id),
  ssid INT NOT NULL,
  PRIMARY KEY (_id)
)`;

//CREATE TABLE:
// async function createTable(queryString) {
//   try {
//     const result = await priceTrackerDB.query(queryString);
//     // console.log(result);
//   } catch (err) {
//     // console.log(err);
//   }
// }

function testTable() {
const queryString = `CREATE TABLE test (
      _id SERIAL,
      product VARCHAR
    )`
  priceTrackerDB
    .query(queryString)
    .then(result =>
      console.log(result)
      )
    .catch(err=> console.log("ERROR: " + err))
  } 

const test = `
CREATE TABLE test (
  _id SERIAL
)`;

testTable();

// createTable(productsTable)
// createTable(lowestDailyPriceTable)
// createTable(usersTable)
// createTable(usersToProductsTable)
// createTable(sessionsTable)

// createTable(test);

const productsInsert = `
INSERT INTO products (product_name, image_url) VALUES ( 'keyboard', 'www.keychron.com' )
`;

const lowestDailyPriceInsert = `
INSERT INTO lowest_daily_price (product_id, date, store_name, lowest_daily_price, store_url ) VALUES (1, '12/17/2020', 'Best Buy', 120.23, 'www.bestbuy.com' )
`;

const usersInsert = `INSERT INTO users (email, password) VALUES ('test1@aol.com', 'monkey123')`;

const sessionsInsert = `
INSERT INTO sessions (user_id, ssid ) VALUES (1, 123)
`;

const usersToProductsInsert = `
INSERT INTO users_to_products (user_id, product_id ) VALUES (1, 1)
`;

//INSERT INTO TABLE:
// function insertIntoTable(queryString) {
//   try {
//     const result = priceTrackerDB.query(queryString);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// insertIntoTable(productsInsert);
// insertIntoTable(lowestDailyPriceInsert);
// insertIntoTable(usersInsert);
// insertIntoTable(sessionsInsert);


// sql query to get all prodcuts based on user id
// SELECT users_to_products.user_id, products.product_name FROM users_to_products INNER JOIN products ON users_to_products.product_id=products._id WHERE users_to_products.user_id=2