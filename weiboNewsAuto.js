const cheerio = require('cheerio')
const puppeteer = require('puppeteer')

let getListData = async function(Category) {

    const browser = await puppeteer.launch({
        headless: false //false 開啟瀏覽器 , ture 背景執行
    })

    const page = await browser.newPage()

    let url = ''
    switch (Category) {
        case '0':
            url = 'https://www.toutiao.com/ch/news_game/'
            break;
        case '1':
            url = 'https://www.weibo.com/tw?category=NBA'
            break;
        case '2':
            url = 'https://www.toutiao.com/ch/news_history/'
            break;
        case '3':
            url = 'https://www.toutiao.com/ch/news_finance/'
            break;
    }

    await page.goto(url)

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
        })
    }

    getNewsLink = async() => {
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


    await autoScroll(page)
    await (sleep(10000));
    await getNewsLink()

    // sleep = (ms) => {
    //     return new Promise(resolve => setTimeout(resolve, ms))
    // }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
getListData('1')