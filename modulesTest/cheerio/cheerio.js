var request = require("request");
var cheerio = require("cheerio");

var options = {
    method: 'GET',
    url: 'https://www.weibo.com/tw',
    qs: { category: 'NBA' },
    headers: {
        Connection: 'keep-alive',
        Host: 'www.weibo.com',
        'Postman-Token': 'e6923326-2e1b-4088-9353-4dc8a4b2492a,ead13073-0794-40b6-b5a7-b739d0a7a7fb',
        cookie: 'login_sid_t=814114805de915f4b3b3b0ce492b4da3; cross_origin_proto=SSL; Ugrow-G0=9642b0b34b4c0d569ed7a372f8823a8e; YF-V5-G0=125128c5d7f9f51f96971f11468b5a3f; _s_tentry=-; Apache=8473404179548.991.1557756264816; SINAGLOBAL=8473404179548.991.1557756264816; ULV=1557756264822:1:1:1:8473404179548.991.1557756264816:; lang=zh-tw; _ga=GA1.2.90933732.1557758965; _gid=GA1.2.230612063.1557758965; UOR=,,www.google.com; UM_distinctid=16ab1ad25f260-01a8863489acda-f353163-1fa400-16ab1ad25f3300; WBtopGlobal_register_version=5c10f3128cf400c5; wb_view_log=1920*10801.5; Hm_lvt_50f34491c9065a59f87d0d334df29fa4=1557758965,1557758986,1557759332,1557767018; appkey=; WB_register_version=5c10f3128cf400c5; SCF=Am-2Uw3WxUex_Nfnx5GqS52qmrDx5BZkspPgtnUEbrOGi37s6lTbEC_q1eKIFWnOfGJZG88yE-YBQDqVhg6ppeI.; SUHB=0rrrZITl0D09f5; un=shu575290^@gmail.com; wb_view_log_7137476092=1920*10801.5^%^261920*10801; YF-Page-G0=530872e91ac9c5aa6d206eddf1bb6a70^|1557836777^|1557836719; SUBP=0033WrSXqPxfM72wWs9jqgMF55529P9D9W5O7FN1z0pGsCyl6zmoN_na5JpV2NSQUK-NSKz4e2Wrdg8DdF4odcXt; SUB=_2AkMrhjzGdcPxrARQm_8Ry23iZY9H-jyYU1UwAn7uJhMyAxgv7loMqSVutBF-XEByq_znj74CU2Acp-XJRDFvikDE; _gat=1; _gat_AllWeiboTracker=1; WBStorage=e4e08ad1044aa883^|undefined; Hm_lpvt_50f34491c9065a59f87d0d334df29fa4=1557836793; webim_unReadCount=^%^7B^%^22time^%^22^%^3A1557836827761^%^2C^%^22dm_pub_total^%^22^%^3A0^%^2C^%^22chat_group_pc^%^22^%^3A0^%^2C^%^22allcountNum^%^22^%^3A0^%^2C^%^22msgbox^%^22^%^3A0^%^7D,login_sid_t=814114805de915f4b3b3b0ce492b4da3; cross_origin_proto=SSL; Ugrow-G0=9642b0b34b4c0d569ed7a372f8823a8e; YF-V5-G0=125128c5d7f9f51f96971f11468b5a3f; _s_tentry=-; Apache=8473404179548.991.1557756264816; SINAGLOBAL=8473404179548.991.1557756264816; ULV=1557756264822:1:1:1:8473404179548.991.1557756264816:; lang=zh-tw; _ga=GA1.2.90933732.1557758965; _gid=GA1.2.230612063.1557758965; UOR=,,www.google.com; UM_distinctid=16ab1ad25f260-01a8863489acda-f353163-1fa400-16ab1ad25f3300; WBtopGlobal_register_version=5c10f3128cf400c5; wb_view_log=1920*10801.5; Hm_lvt_50f34491c9065a59f87d0d334df29fa4=1557758965,1557758986,1557759332,1557767018; appkey=; WB_register_version=5c10f3128cf400c5; SCF=Am-2Uw3WxUex_Nfnx5GqS52qmrDx5BZkspPgtnUEbrOGi37s6lTbEC_q1eKIFWnOfGJZG88yE-YBQDqVhg6ppeI.; SUHB=0rrrZITl0D09f5; un=shu575290^@gmail.com; wb_view_log_7137476092=1920*10801.5^%^261920*10801; YF-Page-G0=530872e91ac9c5aa6d206eddf1bb6a70^|1557836777^|1557836719; SUBP=0033WrSXqPxfM72wWs9jqgMF55529P9D9W5O7FN1z0pGsCyl6zmoN_na5JpV2NSQUK-NSKz4e2Wrdg8DdF4odcXt; SUB=_2AkMrhjzGdcPxrARQm_8Ry23iZY9H-jyYU1UwAn7uJhMyAxgv7loMqSVutBF-XEByq_znj74CU2Acp-XJRDFvikDE; _gat=1; _gat_AllWeiboTracker=1; WBStorage=e4e08ad1044aa883^|undefined; Hm_lpvt_50f34491c9065a59f87d0d334df29fa4=1557836793; webim_unReadCount=^%^7B^%^22time^%^22^%^3A1557836827761^%^2C^%^22dm_pub_total^%^22^%^3A0^%^2C^%^22chat_group_pc^%^22^%^3A0^%^2C^%^22allcountNum^%^22^%^3A0^%^2C^%^22msgbox^%^22^%^3A0^%^7D; YF-Page-G0=aedd5f0bc89f36e476d1ce3081879a4e|1557768734|1557768734',
        'accept-language': 'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        referer: 'https://www.weibo.com/tw?category=NBA',
        accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        dnt: '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.108 Safari/537.36',
        'upgrade-insecure-requests': '1',
        'cache-control': 'max-age=0,no-cache',
        authority: 'www.weibo.com'
    }
};

request(options, function(error, response, body) {
    if (error) throw new Error(error);
    var $ = cheerio.load(body);
    var article = $("#PCD_pictext_i_v5 .pt_ul .UG_list_b");
    console.log(article);
});