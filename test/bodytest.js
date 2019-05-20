const fs = require('fs')
const cheerio = require('cheerio')
const puppeteer = require('puppeteer')

/* 定义函数 */
var content, $
let getListData = async function(Category) {
    /* 初始化 puppeteer*/
    const browser = await puppeteer.launch({
            headless: false //这个是 是否打开chrome可视化窗口 true是不打开 false是打开
        })
        //获取page实例
    const page = await browser.newPage()
        //我这里是通过 入参传过来的 分类来判断抓取相应页面的数据
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
    //打开页面
    await page.goto(url)
        //定义页面内容及Jquery

    var content, $

    async function autoScroll(page) {
        /* 页面滚动方法 */
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

        await page.evaluate(async() => {
            await new Promise((resolve, reject) => {
                var totalHeight = 0;
                var distance = 100;
                var timer = setInterval(() => {
                    var scrollHeight = document.body.scrollHeight;
                    window.scrollBy(0, distance);
                    totalHeight += distance;
                    console.log(totalHeight)
                    if (totalHeight >= 3000) {
                        clearInterval(timer);
                        resolve();
                    }
                }, 100);

                var articleLink = $(".pt_ul.clearfix div.UG_list_b")
                    .map((index, obj) => {
                        return $(obj).attr('href');
                    })
                    .get();
                console.log(articleLink)
                return articleLink

            })
        })
    }

    autoScroll(page)
        /* 关闭 puppeteer*/
        // await browser.close()
}
getListData('1')