var request = require("request");
var cheerio = require("cheerio");

var options = {
    method: "GET",
    url: "https://weibo.com/1984373641/HuBZL6UKi?ref=feedsdk",
    qs: { ref: "feedsdk^", type: "comment" },
    headers: {
        Connection: "keep-alive",
        Host: "www.weibo.com",
        "Postman-Token": "876ba30e-db8d-4a4b-9411-b9d23e9a8d76,aa4f39ec-137b-4b95-b120-59cf163dac59",
        cookie: "lang=zh-tw; login_sid_t=1122c4c0f35709c74032baacabe4ca88; cross_origin_proto=SSL; Ugrow-G0=e66b2e50a7e7f417f6cc12eec600f517; _ga=GA1.2.671906359.1557796563; _gid=GA1.2.1535536514.1557796563; YF-V5-G0=b1c63e15d8892cdaefd40245204f0e21; WBStorage=dbba46d4b213c3a3^|undefined; Hm_lvt_50f34491c9065a59f87d0d334df29fa4=1557796564; _s_tentry=www.google.com; UOR=www.google.com,www.weibo.com,www.google.com; Apache=5344400863603.202.1557796565363; SINAGLOBAL=5344400863603.202.1557796565363; ULV=1557796565376:1:1:1:5344400863603.202.1557796565363:; Hm_lpvt_50f34491c9065a59f87d0d334df29fa4=1557796710; SUB=_2AkMrhpjNf8NxqwJRmP4RzGLra4h_wgHEieKd2mkWJRMxHRl-yT83qk4otRB6AAa2IWgY-TI_cyugOWEHbfIE3SlbhasU; SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9WF.7DBAUaXoZfhOArNkWz6A; YF-Page-G0=112e41ab9e0875e1b6850404cae8fa0e^|1557796869^|1557796853",
        "accept-language": "zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7",
        referer: "https://www.weibo.com/1883881851/Hu6YjkvMu?ref=feedsdk",
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
        dnt: "1",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36",
        "upgrade-insecure-requests": "1",
        "cache-control": "max-age=0,no-cache",
        authority: "www.weibo.com"
    }
};

request(options, function(error, response, body) {
    if (error) throw new Error(error);
    //  \/ 判斷是否有反斜線
    var normalBody = body.replace(/(\\n|\\t|\\r)/g, " ");

    // \\=\  .=任何字元 但碰到\n會中止
    var rangeBody = normalBody.match(/WB_feed_detail.*anibox\sUI_ani/gm);
    var cleanRangeBody = rangeBody[0].replace(/\\/g, "");
    // console.log(cleanRangeBody);

    var $ = cheerio.load(cleanRangeBody);
    var articleAuthor = $(".W_f14.W_fb.S_txt1").text()
    var articleDate = $(".WB_from.S_txt2 a").attr("title").replace(/\s+/g, "");
    var articleContent = $(".WB_text.W_f14")
        .text()
        .replace(/\s+/g, "");

    console.log("作者：" + articleAuthor + "\n");
    console.log("時間：" + articleDate + "\n");
    console.log("內容：" + articleContent + "\n");
});