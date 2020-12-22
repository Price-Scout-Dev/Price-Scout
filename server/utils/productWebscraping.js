const puppeteer = require("puppeteer");

const getProductInfo = async (url) => {
  const browser = await puppeteer.launch({
    args: ["--disabled-setuid-sandbox", "--no-sandbox"],
  });

  const page = await browser.newPage();
  await page.goto(url);

  const productInfo = {};

  //1. Get lowestDailyPrice
  await page.waitForSelector(".g9WBQb");
  productInfo.lowestDailyPrice = await page.$eval(".g9WBQb", (el) => el.innerHTML);

  //2. Get productName:
  productInfo.productName = await page.$eval(".BvQan", (el) => el.innerHTML);

  //3. Get storeUrl:
  const storeUrl = await page.$eval("a.shntl[href]", (el) =>
    el.getAttribute("href")
  );
  productInfo.storeUrl = `https://www.google.com/${storeUrl}`;

  //4. Get storeName:
  productInfo.storeName = await page.$eval(
    ".b5ycib",
    (el) => el.childNodes[0].nodeValue
  );

  //5. Get productImageUrl:
  productInfo.imageUrl = await page.$eval(
    "img.sh-div__image[src]",
    (el) => el.getAttribute("src")
  );
  

  console.log("productInfo OBJECT: ", productInfo);
  browser.close();
  console.log("browser closed");
};

getProductInfo("https://www.google.com/shopping/product/9333373489557772337/");

module.exports = getProductInfo;
