const puppeteer = require("puppeteer");
const priceTrackerDB = require("../models/priceTrackerModel.js");
const dotenv = require("dotenv").config();
const getProductInfo = require("./productWebscraping.js");


//This file contains all the functions needed to automatically pull the most recent price information for every product associated with a user. 

const updatePrices = {};

//Function: Searches database and outputs an array of objects that includes [{google_url and product_id}]
updatePrices.getAllProducts = () => {
  const urlAndIdArray = [];
  const allGoogleUrlsQuery = `
  SELECT DISTINCT products.google_url, products._id
  FROM products
    JOIN users_to_products ON products._id=users_to_products.product_id
  `;

  return new Promise((resolve, reject) => {
    priceTrackerDB
      .query(allGoogleUrlsQuery)
      .then((data) => {
        data.rows.forEach((result) => urlAndIdArray.push(result));
        resolve(urlAndIdArray);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

//Function: Webscrapes a specific URL and outputs an object that includes {lowest_dail_price, store_url, store_name}
updatePrices.scrapeProductInfo = async (productUrl) => {
  const browser = await puppeteer.launch({
    args: ["--disabled-setuid-sandbox", "--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(productUrl);
  const productInfo = {};

  try {
    //1. Get lowestDailyPrice
    await page.waitForSelector(".g9WBQb");
    productInfo.lowest_daily_price = await page.$eval(
      ".g9WBQb",
      (el) => el.innerHTML
    );
    productInfo.lowest_daily_price = productInfo.lowest_daily_price.slice(1);
    //2. Get storeUrl:
    const storeUrl = await page.$eval("a.shntl[href]", (el) =>
      el.getAttribute("href")
    );
    productInfo.store_url = `https://www.google.com/${storeUrl}`;
    //3. Get storeName:
    productInfo.store_name = await page.$eval(
      ".b5ycib",
      (el) => el.childNodes[0].nodeValue
    );

    await browser.close();
    return productInfo;

  } catch (err) {
    return { error: err };
  }
};

//Function: Inserts the most current information webscraped into the lowest_daily_price SQL table this includes (product_id, store_name, lowest_daily_price, store_url)
updatePrices.updateLowestDailyPriceDb = async (productInfo) => {

  const lowestDailyPriceQuery = `INSERT into lowest_daily_price (product_id, store_name, lowest_daily_price,	store_url) VALUES ($1,$2,$3,$4)`;

  const lowestDailyPriceValues = [
    productInfo.product_id,
    productInfo.store_name,
    productInfo.lowest_daily_price,
    productInfo.store_url,
  ];

  try {
    const lowestDailyPriceInsert = await priceTrackerDB.query(
      lowestDailyPriceQuery,
      lowestDailyPriceValues
    );
    return;
  } catch (error) {
    console.log("error: ", error);
    return { error };
  }
};

//MAIN Function: 
updatePrices.start = async () => {
  //Step 1: Gets array of objects that includes [{google_url and product_id}]:
  const allProducts = await updatePrices.getAllProducts();

  //Step 2: Iterates through array (allProducts), and run the webscraper and database update
  for (productObj of allProducts) {
    //Step 2-A: Call the scraper function:
    let productInfo = await updatePrices.scrapeProductInfo(
      productObj.google_url
    ); //results in {lowestDailyPrice, storeUrl, storeName }

    if (productInfo.error) {
      console.log("error in scraping:", productInfo.error);
      continue;
    }

    //Add product_id to the productInfo Object
    productInfo.product_id = productObj._id; //results in {lowest_daily_price, store_url, store_name, product_id }

    //Step 2-B:
    //Call the updateDatabase function:
    let updateOutcome = await updatePrices.updateLowestDailyPriceDb(
      productInfo
    );
  }
};

//Runs main function:
updatePrices.start();

module.exports = getProductInfo;
