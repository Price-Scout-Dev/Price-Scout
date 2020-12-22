const productDB = require("./priceTrackerModel");

//CREATE PRODUCTS TABLE:
// async function createProductsTable() {
//   let queryString = `
//   CREATE TABLE sessions (
//     _id SERIAL,
//     user_id INT NOT NULL references users(_id),
//     ssid INT NOT NULL,
//     PRIMARY KEY (_id)
//   )`;
//   try {
//     const result =  productDB.query(queryString);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// createProductsTable()
//CREATE LOWEST DAILY PRICE TABLE:
// async function createLowestDailyPriceTable() {
//   let queryString = `
//   CREATE TABLE lowestDailyPrice (
//     lowestDailyPrice_id SERIAL,
//     productId INT NOT NULL UNIQUE references products(productId),
//     date VARCHAR NOT NULL,
//     storeName VARCHAR NOT NULL,
//     lowestDailyPrice FLOAT NOT NULL,
//     storeUrl VARCHAR NOT NULL,
//     PRIMARY KEY (lowestDailyPrice_id)
//   )`;
//   try {
//     const result = productDB.query(queryString);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// CREATE USERS TABLE:
// async function createUsersTable() {
//   let queryString = `
//   CREATE TABLE users (
//     userId SERIAL,
//     hashedPassword VARCHAR NOT NULL,
//     email VARCHAR NOT NULL,
//     PRIMARY KEY (userId)
//   )`;
//   try {
//     const result = productDB.query(queryString);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// CREATE USER TO PRODUCT TABLE:
// async function usersToProductsTable() {
//   let queryString = `
//   CREATE TABLE userstoproducts (
//     usersToProducts_id SERIAL,
//     userId INT NOT NULL references users(userId),
//     productId INT NOT NULL references products(productId)
//   )`;
//   try {
//     const result = productDB.query(queryString);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

//CREATE SESSIONS TABLE:
// async function sessionsTable() {
//   let queryString = `
//   CREATE TABLE sessions (
//     sessions_id SERIAL,
//     userId INT NOT NULL references users(userId),
//     ssid INT NOT NULL
//   )`;
//   try {
//     const result = productDB.query(queryString);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

//*////////////

//INSERT ONTO PRODUCTS TABLE:
// async function insertIntoTable() {
//     let queryString = `
//   INSERT INTO products VALUES (143, 'keyboard', 'www.keychron.com' )
//   `;
//   try {
//     const result = productDB.query(queryString);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

//INSERT ONTO LOWEST DAILY PRICE TABLE:
// async function insertIntoLowestDailyPriceTable() {
//     let queryString = `
//   INSERT INTO lowestDailyPrice (productId, date, storeName, lowestDailyPrice, storeUrl ) VALUES (123, '12/17/2020', 'Best Buy', 120.23, 'www.bestbuy.com' )
//   `;
//   try {
//     const result = productDB.query(queryString);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

//INSERT ONTO USERS TABLE:
// async function insertUsersTable() {
//     let queryString = `
//   INSERT INTO users ( hashedPassword, email) VALUES ( '45HYDH43H', 'chandnip6@gmail.com')
//   `;
//   try {
//     const result = productDB.query(queryString);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// INSERT ONTO USERS To PRODUCT TABLE:
// async function insertUserToProductTable() {
//   let queryString = `
//     INSERT INTO userstoproducts (userID, productID) VALUES ( '', '1', '123')
//   `;
//   try {
//     const result = productDB.query(queryString);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// //! UPDATE******************************************************

const productsTable = `
  CREATE TABLE products (
    _id SERIAL,
    product_name VARCHAR NOT NULL,
    image_url VARCHAR NOT NULL,
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
 `

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
async function createTable(queryString) {
  try {
    const result = productDB.query(queryString);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

// createTable(productsTable)
// createTable(lowestDailyPriceTable)
// createTable(usersTable)
// createTable(usersToProductsTable)
// createTable(sessionsTable)

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
function insertIntoTable(queryString) {
  try {
    const result = productDB.query(queryString);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

// insertIntoTable(productsInsert);
// insertIntoTable(lowestDailyPriceInsert);
// insertIntoTable(usersInsert);
// insertIntoTable(sessionsInsert);
