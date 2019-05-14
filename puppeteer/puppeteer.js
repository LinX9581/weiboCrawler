const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({
        headless: false, //開啟網頁是否背景執行
        slowMo: 100, //每個指令間隔時間
    });
    const page = await browser.newPage();
    await page.goto('https://github.com/GoogleChrome/puppeteer');
    await page.screenshot({ path: 'example.png' });

    await browser.close();
})();