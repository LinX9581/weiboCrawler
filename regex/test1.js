htmlContent = "<div class=\"PCD_user_b S_bg1\" node-type=\"follow_recommend_box\" style=\"display:none\"><\/div>\n\n            <div class=\"WB_text W_f14\" node-type=\"feed_list_content\" nick-name=\"NBA\">\n                                                                                                                        【恩比德：布朗主帅很棒 队友去哪都会支持】76人队召开了赛季总结会，谈到布朗教练，恩比德说：“他的工作做得非常出色，他是个很棒的教练，人品更是没的说。毫无疑问，我们都非常爱他。”当被问到队友巴特勒和哈里斯的离队传闻时，恩比德说：“我希望他们留下，他们打得都很棒。但无论他们最终选择去哪，我都不会埋怨他们，我会永远支持他们。”<a  title=\"恩比德：布朗主帅很棒 队友去哪都会支持\" href=\"http:\/\/t.cn\/EKVFVce\" alt=\"http:\/\/t.cn\/EKVFVce\" action-type=\"feed_list_url\" target=\"_blank\" rel=\"noopener noreferrer\"><i class=\"W_ficon ficon_cd_link\">O<\/i>恩比德：布朗主帅很棒 队友去哪都会支持<\/a>                                            <\/div>"

var findSlashClass = htmlContent.match(/\"WB_text\sW_f14\"/);
if (findSlashClass) {
    var normalClass = findSlashClass[0].replace(/(\\n|\\t|\\r)/g, " ").replace(/\\/g, "");
    console.log(normalClass)
}