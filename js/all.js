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
        },
        {
          "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzIzOTQ0MTUwMA==&scene=124#wechat_redirect",
          "name": "Sir电影",
          "wxNum": "dushetv"
        },
        {
          "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI0ODAzMjM3MA==&scene=124#wechat_redirect",
          "name": "各色人类研究中心",
          "wxNum": "gesedna"
        },
        {
          "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzA3ODk5OTEzOA==&scene=124#wechat_redirect",
          "name": "经纬创投",
          "wxNum": "matrixpartnerschina"
        }
      ]
    }
  }

var recommendHtml = template('j-recommend',data.data);
document.getElementById("main-ul").innerHTML=recommendHtml;

})();