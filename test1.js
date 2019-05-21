var request = require("request");

var options = {
    method: 'GET',
    url: 'https://www.weibo.com/nownews',
    qs: { is_hot: '1' },
    headers: {
        Connection: 'keep-alive',
        Host: 'www.weibo.com',
        'Postman-Token': '75e4dca7-51cb-411c-b903-a638ff37822f,7e878901-2653-409b-aa2b-5373cb1c31b7',
        cookie: 'lang=zh-tw; login_sid_t=1122c4c0f35709c74032baacabe4ca88; cross_origin_proto=SSL; Ugrow-G0=e66b2e50a7e7f417f6cc12eec600f517; _ga=GA1.2.671906359.1557796563; YF-V5-G0=b1c63e15d8892cdaefd40245204f0e21; Hm_lvt_50f34491c9065a59f87d0d334df29fa4=1557796564; _s_tentry=www.google.com; UOR=www.google.com,www.weibo.com,www.google.com; Apache=5344400863603.202.1557796565363; SINAGLOBAL=5344400863603.202.1557796565363; ULV=1557796565376:1:1:1:5344400863603.202.1557796565363:; SUB=_2AkMrhpjNf8NxqwJRmP4RzGLra4h_wgHEieKd2mkWJRMxHRl-yT83qk4otRB6AAa2IWgY-TI_cyugOWEHbfIE3SlbhasU; SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9WF.7DBAUaXoZfhOArNkWz6A; YF-Page-G0=530872e91ac9c5aa6d206eddf1bb6a70^|1557986158^|1557985910; TC-V5-G0=914ba011d20e5b7f25fe12574c186eda; wb_view_log=1680*10501.25^%^261920*10801.25; UM_distinctid=16ad7f20f9f99a-0c85c025e5a426-6353160-1fa400-16ad7f20fa0838; _gid=GA1.2.1209212858.1558402567; Hm_lpvt_50f34491c9065a59f87d0d334df29fa4=1558410440; TC-Page-G0=8afba920d7357d92ddd447eac7e1ec5c^|1558412555^|1558412555,lang=zh-tw; login_sid_t=1122c4c0f35709c74032baacabe4ca88; cross_origin_proto=SSL; Ugrow-G0=e66b2e50a7e7f417f6cc12eec600f517; _ga=GA1.2.671906359.1557796563; YF-V5-G0=b1c63e15d8892cdaefd40245204f0e21; Hm_lvt_50f34491c9065a59f87d0d334df29fa4=1557796564; _s_tentry=www.google.com; UOR=www.google.com,www.weibo.com,www.google.com; Apache=5344400863603.202.1557796565363; SINAGLOBAL=5344400863603.202.1557796565363; ULV=1557796565376:1:1:1:5344400863603.202.1557796565363:; SUB=_2AkMrhpjNf8NxqwJRmP4RzGLra4h_wgHEieKd2mkWJRMxHRl-yT83qk4otRB6AAa2IWgY-TI_cyugOWEHbfIE3SlbhasU; SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9WF.7DBAUaXoZfhOArNkWz6A; YF-Page-G0=530872e91ac9c5aa6d206eddf1bb6a70^|1557986158^|1557985910; TC-V5-G0=914ba011d20e5b7f25fe12574c186eda; wb_view_log=1680*10501.25^%^261920*10801.25; UM_distinctid=16ad7f20f9f99a-0c85c025e5a426-6353160-1fa400-16ad7f20fa0838; _gid=GA1.2.1209212858.1558402567; Hm_lpvt_50f34491c9065a59f87d0d334df29fa4=1558410440; TC-Page-G0=8afba920d7357d92ddd447eac7e1ec5c^|1558412555^|1558412555; cross_origin_proto=SSL; YF-Page-G0=aac25801fada32565f5c5e59c7bd227b|1557909013|1557909013; lang=zh-tw',
        'accept-language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        dnt: '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
        'upgrade-insecure-requests': '1',
        'cache-control': 'max-age=0,no-cache',
        authority: 'www.weibo.com'
    }
};

request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});