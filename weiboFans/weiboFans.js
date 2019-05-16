var request = require("request");
var cheerio = require("cheerio");

var options = {
    method: 'GET',
    url: 'https://www.weibo.com/nownews',
    qs: { is_hot: '1' },
    headers: {
        Connection: 'keep-alive',
        Host: 'www.weibo.com',
        'Postman-Token': '5c79f4a5-6d6f-4039-9b27-440ada5efd7b,7738bcf2-bad2-4b2b-9b67-b7d5e29c8f17',
        cookie: 'lang=zh-tw; login_sid_t=1122c4c0f35709c74032baacabe4ca88; cross_origin_proto=SSL; Ugrow-G0=e66b2e50a7e7f417f6cc12eec600f517; _ga=GA1.2.671906359.1557796563; YF-V5-G0=b1c63e15d8892cdaefd40245204f0e21; Hm_lvt_50f34491c9065a59f87d0d334df29fa4=1557796564; _s_tentry=www.google.com; UOR=www.google.com,www.weibo.com,www.google.com; Apache=5344400863603.202.1557796565363; SINAGLOBAL=5344400863603.202.1557796565363; ULV=1557796565376:1:1:1:5344400863603.202.1557796565363:; SUB=_2AkMrhpjNf8NxqwJRmP4RzGLra4h_wgHEieKd2mkWJRMxHRl-yT83qk4otRB6AAa2IWgY-TI_cyugOWEHbfIE3SlbhasU; SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9WF.7DBAUaXoZfhOArNkWz6A; _gid=GA1.2.381665341.1557908958; _gat=1; _gat_AllWeiboTracker=1; Hm_lpvt_50f34491c9065a59f87d0d334df29fa4=1557908958; WBStorage=e4e08ad1044aa883^|undefined; wb_view_log=1920*10801^%^261920*10801.25; YF-Page-G0=aac25801fada32565f5c5e59c7bd227b^|1557908976^|1557908957,lang=zh-tw; login_sid_t=1122c4c0f35709c74032baacabe4ca88; cross_origin_proto=SSL; Ugrow-G0=e66b2e50a7e7f417f6cc12eec600f517; _ga=GA1.2.671906359.1557796563; YF-V5-G0=b1c63e15d8892cdaefd40245204f0e21; Hm_lvt_50f34491c9065a59f87d0d334df29fa4=1557796564; _s_tentry=www.google.com; UOR=www.google.com,www.weibo.com,www.google.com; Apache=5344400863603.202.1557796565363; SINAGLOBAL=5344400863603.202.1557796565363; ULV=1557796565376:1:1:1:5344400863603.202.1557796565363:; SUB=_2AkMrhpjNf8NxqwJRmP4RzGLra4h_wgHEieKd2mkWJRMxHRl-yT83qk4otRB6AAa2IWgY-TI_cyugOWEHbfIE3SlbhasU; SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9WF.7DBAUaXoZfhOArNkWz6A; _gid=GA1.2.381665341.1557908958; _gat=1; _gat_AllWeiboTracker=1; Hm_lpvt_50f34491c9065a59f87d0d334df29fa4=1557908958; WBStorage=e4e08ad1044aa883^|undefined; wb_view_log=1920*10801^%^261920*10801.25; YF-Page-G0=aac25801fada32565f5c5e59c7bd227b^|1557908976^|1557908957; cross_origin_proto=SSL; YF-Page-G0=afcf131cd4181c1cbdb744cd27663d8d|1557796914|1557796914; lang=zh-tw',
        'accept-language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        dnt: '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36',
        'upgrade-insecure-requests': '1',
        'cache-control': 'max-age=0,no-cache',
        authority: 'www.weibo.com'
    }
};

request(options, function(error, response, body) {
    if (error) throw new Error(error);

    //爬取\"WB_innerwrap 到 /table 之間的元素
    var matched = body.match(/\"WB_innerwrap*\\\".*\/table>/gm);
    // console.log(matched)

    if (matched) {
        // \r \n \t 換成空格, 反斜線換成""
        var fansTable = matched[0].replace(/(\\n|\\t|\\r)/g, " ").replace(/\\/g, "");
        //console.log(fansTable);
        var $ = cheerio.load(fansTable)

        //eq(0) 關注 , eq(1) 粉絲 , eq(2) 微博
        var weiboFans = $("strong.W_f16").eq(1).text()
        console.log("粉絲人數" + weiboFans)
    }
});