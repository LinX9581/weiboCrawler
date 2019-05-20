const puppeteer = require('puppeteer');



let getListData = async function(Category) {
    const browser = await puppeteer.launch({
        headless: false, //開啟網頁是否背景執行
        slowMo: 100, //每個指令間隔時間
    });
    const page = await browser.newPage();
    //await page.screenshot({ path: 'example.png' });

    let url = ''
    switch (Category) {
        case 'nba':
            url = 'https://www.weibo.com/tw?category=NBA'
            break;
        case '運動':
            url = 'https://www.weibo.com/tw?category=%E9%81%8B%E5%8B%95'
            break;
        case '旅遊':
            url = 'https://www.weibo.com/tw?category=%E6%97%85%E9%81%8A'
            break;
        case '3':
            url = 'https://www.toutiao.com/ch/news_finance/'
            break;
    }

    console.log(Category)
    await page.goto(url);
    var content, $
        /* 页面滚动方法 */
    async function scrollPage(i) {
        content = await page.content();
        $ = cheerio.load(content);
        /*执行js代码（滚动页面）*/
        await page.evaluate(function() {
                /* 这里做的是渐进滚动，如果一次性滚动则不会触发获取新数据的监听 */
                for (var y = 0; y <= 1000 * i; y += 100) {
                    window.scrollTo(0, y)
                }
            })
            // 获取数据列表
        const li = $($('.feedBox').find('ul')[0]).find('li')
        return li
    }
    let i = 0



};

getListData('2')


var linksOptions = {
    method: 'GET',
    url: 'https://www.weibo.com/tw?category=NBA',
    headers: {
        cookie: 'lang=zh-tw; login_sid_t=1122c4c0f35709c74032baacabe4ca88; cross_origin_proto=SSL; Ugrow-G0=e66b2e50a7e7f417f6cc12eec600f517; _ga=GA1.2.671906359.1557796563; _gid=GA1.2.1535536514.1557796563; YF-V5-G0=b1c63e15d8892cdaefd40245204f0e21; WBStorage=dbba46d4b213c3a3^|undefined; Hm_lvt_50f34491c9065a59f87d0d334df29fa4=1557796564; _s_tentry=www.google.com; UOR=www.google.com,www.weibo.com,www.google.com; Apache=5344400863603.202.1557796565363; SINAGLOBAL=5344400863603.202.1557796565363; ULV=1557796565376:1:1:1:5344400863603.202.1557796565363:; Hm_lpvt_50f34491c9065a59f87d0d334df29fa4=1557796710; SUB=_2AkMrhpjNf8NxqwJRmP4RzGLra4h_wgHEieKd2mkWJRMxHRl-yT83qk4otRB6AAa2IWgY-TI_cyugOWEHbfIE3SlbhasU; SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9WF.7DBAUaXoZfhOArNkWz6A; YF-Page-G0=112e41ab9e0875e1b6850404cae8fa0e^|1557796869^|1557796853',
    }
};

request(linksOptions, (err, res, body) => {
    var normalBody = body.replace(/(\\n|\\t|\\r)/g, " ");
    // console.log(normalBody)
    // \\=\  .=任何字元 但碰到\n會中止
    var rangeBody = normalBody.match(/PCD_pictext_i_v5.*/gm);
    // console.log(rangeBody)
    var cleanRangeBody = rangeBody[0].replace(/\\/g, "");
    // console.log(cleanRangeBody)
    var $ = cheerio.load(cleanRangeBody);
    //map all links
    var articleLink = $(".pt_ul.clearfix div.UG_list_b")
        .map((index, obj) => {
            return $(obj).attr('href');
        })
        .get();
})