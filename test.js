const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

let getlinks = async function() {
    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();
    await page.goto("https://m.tw.weibo.com/pic/nba");

    for (let i = 0; i <= 10; i++) {
        const element = await page.$('#more_btn');
        await element.click();
        await (sleep(2000));
    }

    async function autoScroll(page) {
        await page.evaluate(function() {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= 6000) {
                    clearInterval(timer);
                }
            }, 100);
        });
    }
    request = async() => {
        body = await page.content();

        var $ = cheerio.load(body);
        console.log(body)

        var articleLink = $("#lists_item")
            .map((index, obj) => {
                return $(obj).attr('href');
            })
            .get();
        console.log(articleLink)

    }

    await autoScroll(page);
    await (sleep(9000));
    await request()
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

getlinks();