/**
 * Created by Pasord
 */

;(function() {
  // 数据
  var data = {
  "code": 0,
  "dataAll": [
    {
      "name": "槽边往事",
      "headPic": "images/head-pics/bitsea.jpeg",
      "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5MjAzODU2MA==&scene=124#wechat_redirect",
      "wxNum": "bitsea",
      // "fuel": "98"
    },
    {
      "name": "新生大学",
      "headPic": "images/head-pics/xinshengdaxue.jpeg",
      "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwMDgyMTA3Mg==&scene=124#wechat_redirect",
      "wxNum": "xinshengdaxue",
    },
    {
      "name": "袁腾飞工作室",
      "headPic": "images/head-pics/ytfjls.jpeg",
      "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5OTgwNDQ0MQ==&scene=123&from=singlemessage#wechat_redirect",
      "wxNum": "ytfjls",
    }
    
  ],
  "dataWx": [
    {
      "name": "槽边往事",
      "headPic": "images/head-pics/bitsea.jpeg",
      "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5MjAzODU2MA==&scene=124#wechat_redirect",
      "wxNum": "bitsea",
      // "fuel": "98"
    },
    {
      "name": "新生大学",
      "headPic": "images/head-pics/xinshengdaxue.jpeg",
      "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwMDgyMTA3Mg==&scene=124#wechat_redirect",
      "wxNum": "xinshengdaxue",
    }
  ],
  "dataV": [
    {
      "name": "槽边往事",
      "headPic": "images/head-pics/bitsea.jpeg",
      "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5MjAzODU2MA==&scene=124#wechat_redirect",
      "wxNum": "bitsea",
      // "fuel": "98"
    }
  ]
}

var $mainUl = $('#main-ul');
var $footerAll = $('#footer-all');
var $footerWx = $('#footer-wx');
var $footerV = $('#footer-v');

var mainUlHtmlAll = template('j-main-ul-all',data);
var mainUlHtmlWx = template('j-main-ul-wx',data);
var mainUlHtmlV = template('j-main-ul-v',data);
// console.log(mainUlHtml);
$mainUl.html(mainUlHtmlAll);

$footerAll.click(function(event) {
  console.log(3);
  $mainUl.html(mainUlHtmlAll);
});
$footerWx.click(function(event) {
  console.log(2);
  $mainUl.html(mainUlHtmlWx);
});
$footerV.click(function(event) {
  console.log(1);
  $mainUl.html(mainUlHtmlV);
});



















})();