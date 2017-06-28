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
          "date": "2017-06-28",
          "detailHref": "http://mp.weixin.qq.com/s/bPzWQg20_Q8GMkHVEJYKLw",
          "articleTitle": "天使投资人王怀南：宝宝树成长史",
          "byWho": "捕手志"
        },
        {
          "date": "",
          "detailHref": "http://mp.weixin.qq.com/s/SvLoGlrW3-mgkAAXhIRz5Q",
          "articleTitle": "对话王兴：太多人关注边界，而不关注核心",
          "byWho": "LateNews by 小晚"
        },
        {
          "date": "",
          "detailHref": "http://mp.weixin.qq.com/s/w8Vs7WRGmZVHLEl6-Oaa7g",
          "articleTitle": "罗辑思维的「成功」之道",
          "byWho": "MacTalk",
        }
      ],
      "subscribes": [
        {
          "amount": "⛽",
          "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5MjAzODU2MA==&scene=124#wechat_redirect",
          "name": "槽边往事",
          "wxNum": "bitsea"
        },
        {
          "amount": "⛽",
          "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5OTgwNDQ0MQ==&scene=124#wechat_redirect",
          "name": "袁腾飞工作室",
          "wxNum": "ytfjls"
        },
        {
          "amount": "1",
          "historyHref": "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzUyMjA1MDQ0NA==&scene=124#wechat_redirect",
          "name": "捕手志",
          "wxNum": "ibushouzhi"
        }
      ]
    }
  }

var $mainUl = $('#main-ul');
var $recommend = $('#recommend');
var $subscribe = $('#subscribe');
var $headerDesc = $('#header-desc');

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
  $(this).addClass('footer-on').siblings().removeClass('footer-on');
  $headerDesc.text('感觉文章不错就收藏吧');
});
// 点击订阅
$subscribe.click(function(event) {
  console.log(2);
  $mainUl.html(subscribeHtml);
  $(this).addClass('footer-on').siblings().removeClass('footer-on');
  $headerDesc.text('感觉好文章多就订阅吧');
});





})();