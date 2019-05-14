# Weibo Crawler

# 微博有擋爬蟲程式 要有用戶cookies

postman  
import "https://www.weibo.com/tw?category=NBA" curl  
get nodejs request code  

其中有一行會壓縮程式碼 讓nodejs跑出來變亂碼  
'accept-encoding': 'gzip, deflate, br'  

# 1.需要去掉每個屬性的反斜線...
<pre>
Ex. class="\"_blank\""  
//先找符合上述字串
var findSlashClass = htmlContent.match(/\"_blank\"/);

//符合就用正常格式取代
if(findSlashClass){
    var normalClass = matched[0].replace(/(\\n|\\t|\\r)/g," ").replace(/\\/g,"");
    略
    var $ = cheerio.load(result);
}

</pre>
# 2.解決瀑布流加載文章  
[NBA分類] (https://www.weibo.com/tw?category=NBA)  

# Chrome Console 加入Jquery
<pre>
var jqry = document.createElement('script');
jqry.src = "https://code.jquery.com/jquery-3.3.1.min.js";
document.getElementsByTagName('head')[0].appendChild(jqry);
</pre>

# 3.爬出每個 文章href
var articleLink = $("#PCD_pictext_i_v5 .pt_ul .UG_list_b ....")......  

# 4.再request每個網址解析文章日期
[文章範例1](https://www.weibo.com/1984373641/HtY05AKL2?ref=feedsdk&type=comment#_rnd1557838495869])  

Chrome Console 加載Jquery  
測試  
var articleContent = $(".WB_text.W_f14").text();  
console.log(articleContent);  

# 5.改爬行動端Q
