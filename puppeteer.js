const puppeteer = require('puppeteer')

(async() => {
    const browser = await puppeteer.lauch({
        headless: false,
        slowMo: 100,
    })
    const page = await browser.newPage()

    await page.goto('https://www.w3schools.com/jsref/jsref_shift.asp')
})()