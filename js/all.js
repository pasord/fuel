/**
 * Created by Pasord
 */

;(function() {
  // 数据
  var data = {
    "code": 0,
    "data": {
      "recommends": [
        {
          "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5MjAzODU2MA==&scene=124#wechat_redirect",
          "name": "槽边往事",
          "wxNum": "bitsea"
        },
        {
          "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5OTgwNDQ0MQ==&scene=124#wechat_redirect",
          "name": "袁腾飞工作室",
          "wxNum": "ytfjls"
        },
        {
          "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzUyMjA1MDQ0NA==&scene=124#wechat_redirect",
          "name": "捕手志",
          "wxNum": "ibushouzhi"
        },
        {
          "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA5OTE3ODUyOA==&scene=124#wechat_redirect",
          "name": "IDG资本",
          "wxNum": "idg_capital"
        }
      ]
    }
  }

var recommendHtml = template('j-recommend',data.data);
document.getElementById("main-ul").innerHTML=recommendHtml;

})();