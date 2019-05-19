var request = require("request");
var cheerio = require("cheerio")

var options = {
    method: 'GET',
    url: 'https://www.weibo.com/tw',
    qs: { category: 'NBA' },
    headers: {
        Connection: 'keep-alive',
        Host: 'www.weibo.com',
        'Postman-Token': '85caa514-b5ee-4fcc-a9f1-db7bb06676fe,9daec734-12fb-45b4-beae-1d89707d9815',
        cookie: 'lang=zh-tw; login_sid_t=1122c4c0f35709c74032baacabe4ca88; cross_origin_proto=SSL; Ugrow-G0=e66b2e50a7e7f417f6cc12eec600f517; _ga=GA1.2.671906359.1557796563; YF-V5-G0=b1c63e15d8892cdaefd40245204f0e21; Hm_lvt_50f34491c9065a59f87d0d334df29fa4=1557796564; _s_tentry=www.google.com; UOR=www.google.com,www.weibo.com,www.google.com; Apache=5344400863603.202.1557796565363; SINAGLOBAL=5344400863603.202.1557796565363; ULV=1557796565376:1:1:1:5344400863603.202.1557796565363:; SUB=_2AkMrhpjNf8NxqwJRmP4RzGLra4h_wgHEieKd2mkWJRMxHRl-yT83qk4otRB6AAa2IWgY-TI_cyugOWEHbfIE3SlbhasU; SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9WF.7DBAUaXoZfhOArNkWz6A; YF-Page-G0=530872e91ac9c5aa6d206eddf1bb6a70^|1557986158^|1557985910; TC-V5-G0=914ba011d20e5b7f25fe12574c186eda; TC-Page-G0=51e9db4bd1cd84f5fb5f9b32772c2750^|1557998880^|1557998864; _gid=GA1.2.1528780569.1558061289; WBStorage=a8fcbc06d311044b^|undefined; wb_view_log=1920*10801.25; Hm_lpvt_50f34491c9065a59f87d0d334df29fa4=1558061460,lang=zh-tw; login_sid_t=1122c4c0f35709c74032baacabe4ca88; cross_origin_proto=SSL; Ugrow-G0=e66b2e50a7e7f417f6cc12eec600f517; _ga=GA1.2.671906359.1557796563; YF-V5-G0=b1c63e15d8892cdaefd40245204f0e21; Hm_lvt_50f34491c9065a59f87d0d334df29fa4=1557796564; _s_tentry=www.google.com; UOR=www.google.com,www.weibo.com,www.google.com; Apache=5344400863603.202.1557796565363; SINAGLOBAL=5344400863603.202.1557796565363; ULV=1557796565376:1:1:1:5344400863603.202.1557796565363:; SUB=_2AkMrhpjNf8NxqwJRmP4RzGLra4h_wgHEieKd2mkWJRMxHRl-yT83qk4otRB6AAa2IWgY-TI_cyugOWEHbfIE3SlbhasU; SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9WF.7DBAUaXoZfhOArNkWz6A; YF-Page-G0=530872e91ac9c5aa6d206eddf1bb6a70^|1557986158^|1557985910; TC-V5-G0=914ba011d20e5b7f25fe12574c186eda; TC-Page-G0=51e9db4bd1cd84f5fb5f9b32772c2750^|1557998880^|1557998864; _gid=GA1.2.1528780569.1558061289; WBStorage=a8fcbc06d311044b^|undefined; wb_view_log=1920*10801.25; Hm_lpvt_50f34491c9065a59f87d0d334df29fa4=1558061460; cross_origin_proto=SSL; YF-Page-G0=aac25801fada32565f5c5e59c7bd227b|1557909013|1557909013; lang=zh-tw',
        'accept-language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        referer: 'https://www.weibo.com/tw?category=NBA',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        dnt: '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
        'upgrade-insecure-requests': '1',
        'cache-control': 'max-age=0,no-cache',
        authority: 'www.weibo.com'
    }
};
getArticleLink().then((articleLink) => {

    var options = {
        method: 'GET',
        url: 'https:' + articleLink[2],
        headers: {
            cookie: 'lang=zh-tw; login_sid_t=1122c4c0f35709c74032baacabe4ca88; cross_origin_proto=SSL; Ugrow-G0=e66b2e50a7e7f417f6cc12eec600f517; _ga=GA1.2.671906359.1557796563; _gid=GA1.2.1535536514.1557796563; YF-V5-G0=b1c63e15d8892cdaefd40245204f0e21; WBStorage=dbba46d4b213c3a3^|undefined; Hm_lvt_50f34491c9065a59f87d0d334df29fa4=1557796564; _s_tentry=www.google.com; UOR=www.google.com,www.weibo.com,www.google.com; Apache=5344400863603.202.1557796565363; SINAGLOBAL=5344400863603.202.1557796565363; ULV=1557796565376:1:1:1:5344400863603.202.1557796565363:; Hm_lpvt_50f34491c9065a59f87d0d334df29fa4=1557796710; SUB=_2AkMrhpjNf8NxqwJRmP4RzGLra4h_wgHEieKd2mkWJRMxHRl-yT83qk4otRB6AAa2IWgY-TI_cyugOWEHbfIE3SlbhasU; SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9WF.7DBAUaXoZfhOArNkWz6A; YF-Page-G0=112e41ab9e0875e1b6850404cae8fa0e^|1557796869^|1557796853',
        }
    };

    request(options, function(error, response, body) {
        if (error) throw new Error(error);
        //  \/ 判斷是否有反斜線
        var normalBody = body.replace(/(\\n|\\t|\\r)/g, " ");

        // \\=\  .=任何字元 但碰到\n會中止
        var rangeBody = normalBody.match(/WB_feed_detail.*anibox\sUI_ani/gm);
        var cleanRangeBody = rangeBody[0].replace(/\\/g, "");
        // console.log(cleanRangeBody)

        var $ = cheerio.load(cleanRangeBody);
        var articleContent = $(".WB_text.W_f14").text();
        console.log(articleContent);

    });


})


function getArticleLink() {
    return new Promise((resolve, reject) => {
        request(options, (err, res, body) => {
            var normalBody = body.replace(/(\\n|\\t|\\r)/g, " ");
            // console.log(normalBody)
            // \\=\  .=任何字元 但碰到\n會中止
            var rangeBody = normalBody.match(/PCD_pictext_i_v5.*/gm);
            // console.log(rangeBody)
            var cleanRangeBody = rangeBody[0].replace(/\\/g, "");
            // console.log(cleanRangeBody)
            var $ = cheerio.load(cleanRangeBody);
            // $('.pt_ul.clearfix').find('div.UG_list_b').each(function(i, item) {

            //     var articleLinks = $(item).attr('href')
            //         // console.log(articleLinks)
            //     return $(item).attr('href');
            // });
            // resolve($(item).attr('href'));

            var articleLink = $(".pt_ul.clearfix div.UG_list_b")
                .map((index, obj) => {
                    return $(obj).attr('href');
                })
                .get();
            resolve(articleLink);
        })
    })
}