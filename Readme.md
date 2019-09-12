https://www.youtube.com/watch?v=rlX2ZZkrloU&list=UUg8EwsqYmiw7G267xxPyXsg&index=1
# Weibo Crawler
git clone https://github.com/LinX9581/weiboCrawler.git  
cd weiboCraawler && npm i  
* 文章內容  
node weiboNews.js  

* 文章連結  
cd weuboNewsLinks && node weiboLinks  
* nownews 粉絲數  
cd weiboFans && node weiboFans.js  


# 微博有擋爬蟲程式 要有用戶cookies
* 模擬登入取得  
* 自行登入取得  

再用postman  
import "https://www.weibo.com/tw?category=NBA" curl  
get nodejs request code  

其中有一行會壓縮程式碼 讓爬出來的內容變亂碼  
'accept-encoding': 'gzip, deflate, br'  

# 去掉整個程式的 \"\" \r\r\r\r \n\n\n\n\n \t\t\t\t\t\t\t

* 取代所有多的 \r \n \t 換成空格, 取代所有反斜線換成""
``` javascript
var normalBody = matched[0].replace(/(\\n|\\t|\\r)/g," ").replace(/\\/g,"");
var $ = cheerio.load(normalBody);
```

* 再用regex擷取片段再爬取 直接爬爬不出來原因不明Q  
``` javascript
var rangeBody = normalBody.match(/WB_feed_detail.*anibox\sUI_ani/gm);
```
* 爬取文章內文  
``` javascript
var articleContent = $(".WB_text.W_f14").text();  
```

* Chrome Console 加入Jquery  
<pre>
var jqry = document.createElement('script');
jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jqry);
</pre>

# 再request每個網址解析作者、連結、日期、文章
[測試文章](https://www.weibo.com/1984373641/HtY05AKL2?ref=feedsdk&type=comment#_rnd1557838495869])  

``` javascript
var articleLink = $(".pt_ul.clearfix div.UG_list_b").map((index, obj) => {
        return $(obj).attr('href');
    }).get();
var articleAuthor = $(".W_f14.W_fb.S_txt1").text()
var articleDate = $(".WB_from.S_txt2 a").attr("title").replace(/\s+/g, "");
var articleContent = $(".WB_text.W_f14").text().replace(/\s+/g, "");

console.log("作者：" + articleAuthor + "\n");
console.log("連結：" + "https:" + articleLink[i] + "\n");
console.log("時間：" + articleDate + "\n");
console.log("內容：" + articleContent + "\n");
```

# 解決瀑布流加載文章  
[NBA分類] (https://www.weibo.com/tw?category=NBA)  
* F12找規則Q  
* pupeteer模擬登入  
[官方範本] (https://github.com/GoogleChrome/puppeteer)

下滑到一定區間再爬  
``` javascript
await page.evaluate(function() {
    var totalHeight = 0;
    var distance = 100;
    var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= 6000) {
            clearInterval(timer);
        }
}, 100);
```

# 改爬行動端Q
