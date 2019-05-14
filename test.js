var request = require("request");
var cheerio = require("cheerio");

getAllCities().then((cities) => {
    console.log(cities);

})

function getAllCities() {
    return new Promise((resolve, reject) => {
        request("https://www.ibon.com.tw/retail_inquiry.aspx", (err, res, body) => {
            var $ = cheerio.load(body);
            var cities = $("#Class1 option")
                .map((index, obj) => {
                    return $(obj)
                        .text()
                        .trim();
                })
                .get();
            resolve(cities);
        });
    });
}