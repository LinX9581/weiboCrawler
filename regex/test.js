htmlContent = "<li><a  href=\"\/\/mp.weibo.com\/xian\/\" target=\"_blank\"  title=\"新鮮事\" suda-uatrack=\"key=tblog_home_edit&value=fresh_button\"><em class=\"W_ficon ficon_freshnews\">&#xe624;<\/em>新鮮事<\/a><\/li>"
var findSlashClass = htmlContent.match(/\"_blank\"/);
if (findSlashClass) {
    var normalClass = findSlashClass[0].replace(/(\\n|\\t|\\r)/g, " ").replace(/\\/g, "");
    console.log(normalClass)
}