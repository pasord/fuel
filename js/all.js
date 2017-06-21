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
          "name": "槽边往事",
          "headPic": "images/head-pics/bitsea.jpeg",
          "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5MjAzODU2MA==&scene=124#wechat_redirect",
          "wxNum": "bitsea"
        },
        {
          "name": "新生大学",
          "headPic": "images/head-pics/xinshengdaxue.jpeg",
          "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwMDgyMTA3Mg==&scene=124#wechat_redirect",
          "wxNum": "xinshengdaxue"
        },
        {
          "name": "袁腾飞工作室",
          "headPic": "images/head-pics/ytfjls.jpeg",
          "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5OTgwNDQ0MQ==&scene=123&uin=Nzk5NTMwNQ%3D%3D&key=5e973e5d3cae484ac43f27f47aad7e9f8e3c6c809eed9a9ec27e79fe14a43c7404ae44db8e9f0caeccc9cee8213ebfa4bdcd7e276711b0dde0237dff00fe397fd0cbdaadc7e3465e369f3eb97709e71a&devicetype=iMac+MacBookAir6%2C2+OSX+OSX+10.12.5+build(16F73)&version=12020810&lang=zh_CN&nettype=WIFI&a8scene=0&fontScale=100&pass_ticket=00PNcONQ5%2BQV7dsauQMMW8x2XTZthKYq0IZ4i%2FoSsqg%3D",
          "wxNum": "ytfjls"
        }
      ],
      "subscribes": [
        {
          "name": "槽边往事",
          "headPic": "images/head-pics/bitsea.jpeg",
          "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5MjAzODU2MA==&scene=124#wechat_redirect",
          "wxNum": "bitsea"
        },
        {
          "name": "新生大学",
          "headPic": "images/head-pics/xinshengdaxue.jpeg",
          "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzAwMDgyMTA3Mg==&scene=124#wechat_redirect",
          "wxNum": "xinshengdaxue"
        }
      ]
    }
  }

var $mainUl = $('#main-ul');
var $recommend = $('#recommend');
var $subscribe = $('#subscribe');

// 渲染推荐列表
var recommendHtml = template('j-recommend',data.data);
$mainUl.html(recommendHtml);
// 渲染订阅列表
var subscribeHtml = template('j-subscribe',data.data);
// $mainUl.html(subscribeHtml);

// 点击推荐
$recommend.click(function(event) {
  console.log(1);
  $mainUl.html(recommendHtml);
});
// 点击订阅
$subscribe.click(function(event) {
  console.log(2);
  $mainUl.html(subscribeHtml);
});




















})();