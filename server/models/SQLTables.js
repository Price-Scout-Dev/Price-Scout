const productDB = require("./priceTrackerModel");

//CREATE PRODUCTS TABLE:
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
async function usersToProductsTable() {
  let queryString = ` 
  CREATE TABLE userstoproducts (
    usersToProducts_id SERIAL,
    userId INT NOT NULL references users(userId),
    productId INT NOT NULL references products(productId)
  )`;
  try {
    const result = productDB.query(queryString);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

//CREATE SESSIONS TABLE:
async function sessionsTable() {
  let queryString = ` 
  CREATE TABLE sessions (
    sessions_id SERIAL,
    userId INT NOT NULL references users(userId),
    ssid INT NOT NULL
  )`;
  try {
    const result = productDB.query(queryString);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

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

sessionsTable()
