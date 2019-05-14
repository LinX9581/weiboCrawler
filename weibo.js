const request = require('request')
const cheerio = require('cheerio')

var arr = []


//Requests are made asynchronously
function Rate() {
    request({
        //url: "http://rate.bot.com.tw/Pages/Static/UIP003.zh-TW.htm",
        url: "https://s.weibo.com",
        method: "GET"
    }, function(error, response, body) {
        if (error || !body) {
            console.log("none");
            return;
        }
        var $ = cheerio.load(body);

        console.log(body);
        console.log("asd");
    });
}
Rate()