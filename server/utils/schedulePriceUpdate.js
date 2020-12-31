const puppeteer = require("puppeteer");
const priceTrackerDB = require("../models/priceTrackerModel.js");
const dotenv = require("dotenv").config();
const getProductInfo = require("./productWebscraping.js");

/*

This function automatically pulls the most recent price information for every product associated with a user. 

-


*/

const updatePrices = {};

updatePrices.getAllProducts = () => {
  //this takes no arguments, and outputs an array of google product urls.
  const googleURlArray = [];
  const allGoogleUrlsQuery = `
  SELECT DISTINCT products.google_url
  FROM products
    JOIN users_to_products ON products._id=users_to_products.product_id
  `;

  return new Promise((resolve, reject) => {
    priceTrackerDB
      .query(allGoogleUrlsQuery)
      .then((data) => {
        data.rows.forEach((result) => googleURlArray.push(result.google_url));
        resolve(googleURlArray);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

updatePrices.scrapeProductInfo = async (urlArray) => {
  return new Promise((resolve, reject) => {
    for(let i=0; urlArray.length; i++){
      await getProductInfo(urlArray[i])
    }
  })
};

updatePrices.updateLowestDailyPriceDb = () => {
  //update database code.
};

updatePrices.start = async () => {
  const allProducts = await updatePrices.getAllProducts();

  console.log(allProducts);

  //loop here, and run the webscraper and database update

  // for (product of allProducts) {

  //   //call the scraper function

  //   //call the updateDatabase function

  // }
};

updatePrices.start();

const getProductInfo = async (url) => {
  const browser = await puppeteer.launch({
    args: ["--disabled-setuid-sandbox", "--no-sandbox"],
  });

  const page = await browser.newPage();
  await page.goto(url);

  const productInfo = {};

  //1. Get lowestDailyPrice
  await page.waitForSelector(".g9WBQb");
  productInfo.lowest_daily_price = await page.$eval(
    ".g9WBQb",
    (el) => el.innerHTML
  );

  productInfo.lowest_daily_price = productInfo.lowest_daily_price.slice(1);

  //2. Get productName:
  productInfo.product_name = await page.$eval(".BvQan", (el) => el.innerHTML);

  //3. Get storeUrl:
  const storeUrl = await page.$eval("a.shntl[href]", (el) =>
    el.getAttribute("href")
  );
  productInfo.store_url = `https://www.google.com/${storeUrl}`;

  //4. Get storeName:
  productInfo.store_name = await page.$eval(
    ".b5ycib",
    (el) => el.childNodes[0].nodeValue
  );

  //5. Get productImageUrl:
  productInfo.image_url = await page.$eval("img.sh-div__image[src]", (el) =>
    el.getAttribute("src")
  );

  // console.log("productInfo OBJECT: ", productInfo);
  browser.close();
  // console.log("browser closed");
  return productInfo;
};

module.exports = getProductInfo;
