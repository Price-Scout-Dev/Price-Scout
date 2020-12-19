const puppeteer = require("puppeteer");

const getProductInfo = async (url) => {
  const browser = await puppeteer.launch({
    args: ["--disabled-setuid-sandbox", "--no-sandbox"],
  });
  const page = await browser.newPage();
  await page.goto(url);


  //1. Get lowestDailyPrice 
  await page.waitForSelector(".g9WBQb");
  const price = await page.$eval(".g9WBQb", (el) => el.innerHTML);
  console.log("Price: ", price);

  //2. Get storeName where lowestDailyPrice is from. 
  const storeName = await page.$eval(".BvQan", (el) => el.innerHTML);
  console.log("storeName: ", storeName);

  //3. Get storeUrl of the store 


  //4. Get productName 



  //5. Get productImageUrl 





};

getProductInfo('https://www.google.com/shopping/product/9333373489557772337/')
//sample product page: https://www.google.com/shopping/product/9333373489557772337/

module.exports = getProductInfo;
