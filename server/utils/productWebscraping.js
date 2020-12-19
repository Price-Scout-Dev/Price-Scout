
const puppeteer = require('puppeteer');
const getPrice = async (url) => {
  const browser = await puppeteer.launch({
    args: ['--disabled-setuid-sandbox', '--no-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector('.g9WBQb');
  const price = await page.$eval('.g9WBQb', (el) => el.innerHTML);
  console.log('Price: ', price);
};
getPrice('https://www.google.com/shopping/product/9333373489557772337/');