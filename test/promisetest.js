var request = require("request");
var cheerio = require("cheerio")

getArticleLink().then((links) => {

    var pageOptions = {
        method: 'GET',
        url: 'https:',
        headers: {
            cookie: 'lang=zh-tw; login_sid_t=1122c4c0f35709c74032baacabe4ca88; cross_origin_proto=SSL; Ugrow-G0=e66b2e50a7e7f417f6cc12eec600f517; _ga=GA1.2.671906359.1557796563; _gid=GA1.2.1535536514.1557796563; YF-V5-G0=b1c63e15d8892cdaefd40245204f0e21; WBStorage=dbba46d4b213c3a3^|undefined; Hm_lvt_50f34491c9065a59f87d0d334df29fa4=1557796564; _s_tentry=www.google.com; UOR=www.google.com,www.weibo.com,www.google.com; Apache=5344400863603.202.1557796565363; SINAGLOBAL=5344400863603.202.1557796565363; ULV=1557796565376:1:1:1:5344400863603.202.1557796565363:; Hm_lpvt_50f34491c9065a59f87d0d334df29fa4=1557796710; SUB=_2AkMrhpjNf8NxqwJRmP4RzGLra4h_wgHEieKd2mkWJRMxHRl-yT83qk4otRB6AAa2IWgY-TI_cyugOWEHbfIE3SlbhasU; SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9WF.7DBAUaXoZfhOArNkWz6A; YF-Page-G0=112e41ab9e0875e1b6850404cae8fa0e^|1557796869^|1557796853',
        }
    };
    // console.log(pageOptions)
    console.log(links[0, 1])

})


function getArticleLink() {
    var options = {
        method: 'GET',
        url: 'https://www.weibo.com/tw?category=NBA',
        headers: {
            cookie: 'lang=zh-tw; login_sid_t=1122c4c0f35709c74032baacabe4ca88; cross_origin_proto=SSL; Ugrow-G0=e66b2e50a7e7f417f6cc12eec600f517; _ga=GA1.2.671906359.1557796563; _gid=GA1.2.1535536514.1557796563; YF-V5-G0=b1c63e15d8892cdaefd40245204f0e21; WBStorage=dbba46d4b213c3a3^|undefined; Hm_lvt_50f34491c9065a59f87d0d334df29fa4=1557796564; _s_tentry=www.google.com; UOR=www.google.com,www.weibo.com,www.google.com; Apache=5344400863603.202.1557796565363; SINAGLOBAL=5344400863603.202.1557796565363; ULV=1557796565376:1:1:1:5344400863603.202.1557796565363:; Hm_lpvt_50f34491c9065a59f87d0d334df29fa4=1557796710; SUB=_2AkMrhpjNf8NxqwJRmP4RzGLra4h_wgHEieKd2mkWJRMxHRl-yT83qk4otRB6AAa2IWgY-TI_cyugOWEHbfIE3SlbhasU; SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9WF.7DBAUaXoZfhOArNkWz6A; YF-Page-G0=112e41ab9e0875e1b6850404cae8fa0e^|1557796869^|1557796853',
        }
    };

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

            var articleLink = $(".pt_ul.clearfix div.UG_list_b")
                .map((index, obj) => {
                    var linksIndex = [$(obj).attr('href'), index]

                    return linksIndex;
                })
                .get();
            resolve(articleLink);
        })
    })
}