const cheerio = require("cheerio");
const puppeteer = require("puppeteer");

let getlinks = async function() {
    const browser = await puppeteer.launch({
        headless: false
    });

    const page = await browser.newPage();
    await page.goto("https://m.tw.weibo.com/pic/nba");

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
        // console.log(body)
        var normalBody = body.replace(/(\\n|\\t|\\r)/g, " ");
        // console.log(normalBody)
        // \\=\  .=任何字元 但碰到\n會中止yy
        var rangeBody = normalBody.match(/PCD_pictext_i_v5.*/gm);
        // console.log(rangeBody)
        var cleanRangeBody = rangeBody[1].replace(/\\/g, "");
        // console.log(cleanRangeBody)
        var $ = cheerio.load(cleanRangeBody);

        var articleLink = $(".pt_ul.clearfix div.UG_list_b")
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