const request = require('request')
const cheerio = require('cheerio')

var arr = []


//Requests are made asynchronously
function Rate() {
    request({
        url: "http://rate.bot.com.tw/Pages/Static/UIP003.zh-TW.htm",
        method: "GET"
    }, function(error, response, body) {
        if (error || !body) {
            console.log("none");
            return;
        }
        var $ = cheerio.load(body);
        var target = $(".rate-content-sight.text-right.print_hide");
        console.log(target)
        jpRate = target[15].children[0].data;

        arr.push(jpRate);

        console.log(arr);
    });

}

Rate()