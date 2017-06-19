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
      "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5OTgwNDQ0MQ==&scene=123&uin=Nzk5NTMwNQ%3D%3D&key=5e973e5d3cae484ac43f27f47aad7e9f8e3c6c809eed9a9ec27e79fe14a43c7404ae44db8e9f0caeccc9cee8213ebfa4bdcd7e276711b0dde0237dff00fe397fd0cbdaadc7e3465e369f3eb97709e71a&devicetype=iMac+MacBookAir6%2C2+OSX+OSX+10.12.5+build(16F73)&version=12020810&lang=zh_CN&nettype=WIFI&a8scene=0&fontScale=100&pass_ticket=00PNcONQ5%2BQV7dsauQMMW8x2XTZthKYq0IZ4i%2FoSsqg%3D",
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