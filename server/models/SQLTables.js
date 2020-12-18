const productDB = require("./priceTrackerModel");

// async function createProductsTable() {
//   let queryString = ` 
//   CREATE TABLE products (
//     productId INT NOT NULL UNIQUE , 
//     productName VARCHAR NOT NULL, 
//     imageUrl VARCHAR NOT NULL, 
//     PRIMARY KEY (productId)
//   )`;

//   try {
//     const result = productDB.query(queryString);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

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

// async function createUsersTable() {
//   let queryString = ` 
//   CREATE TABLE users (
//     userId INT NOT NULL UNIQUE , 
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

// async function insertIntoTable() {

//     let queryString = ` 
//   INSERT INTO products (productId, productName, imageUrl) VALUES (123, 'vacuum', 'www.vacuum.com' )  
//   `;

//   try {
//     const result = productDB.query(queryString);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }

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

async function insertUsersTable() {

    let queryString = ` 
  INSERT INTO users (userId, hashedPassword, email) VALUES ( 56789, '45', 'chandnip6@gmail.com')  
  `;

  try {
    const result = productDB.query(queryString);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}


// createLowestDailyPriceTable();
insertUsersTable()
