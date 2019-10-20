$(function () {
  console.log("这是一个数据采集工具");

  //return false;

  var _html = `
    <div id="dtk-page-container-get">
			<div class="output-page">
			  <p>你当前的分类为：<span id="cur-cate"></span></p>
			  <p>你当前的页码为：<span id="cur-page"></span></p>
			  <p>页码信息为：<span id="page-info"></span></p>
      </div>
			<div class="btn-area">
				<a href="javascript:;" class="btn btn-start">开始</a>
				<a href="javascript:;" class="btn btn-stop">停止</a>
			</div>
		</div>
  `;

  $("body").append(_html);

  var containerDom = $("#dtk-page-container-get");
  containerDom.find("#cur-cate").text($.trim($(".label_list label.checked").text()));
  containerDom.find("#cur-page").text($.trim($(".quan_page span.cur").text()));
  containerDom.find("#page-info").text($.trim($(".page_ci").text()));
  var getAutoSwitchPageStatus = window.localStorage.getItem("autoSwitchPageStatus") || "false";
  var localGoodsList = window.localStorage.getItem("goodsListArr");
  var nowPage = containerDom.find("#cur-page").text();
  var curCateDom = $(".goods_screen_checkbox li .label.checked input");
  var cid = curCateDom.val();
  var c_name = curCateDom.attr("data-title");
  localGoodsList = (localGoodsList == null ? [] : JSON.parse(localGoodsList));
  var maxPage = 200;
  if(parseInt(nowPage) >= maxPage) {
    console.log("当前"+nowPage+"大于"+maxPage+"页");
    console.log(JSON.stringify(localGoodsList));
    return false;
  }

  var url = "";
  $(".quan_page a").each(function () {
    var txt = $.trim($(this).text());
    if(/(下一页)/g.test(txt)) {
      url = $(this).attr("href");
    }
  });
  console.log("判断是否可跳转");
  if(url == undefined || url == "") {
    console.log(JSON.stringify(localGoodsList));
    return false
  }

  setTimeout(function () {

    $(".goods-list .goods-item").each(function () {
      var _this = $(this);
      var id = _this.attr("data_goodsid");
      var img = originImgUrl(_this.find(".goods-img img").attr("data-original"));
      var title = _this.find(".tit-text").text();
      var use_coupon_price = $.trim(_this.find(".goods-price b").text().replace("￥", ""));
      var coupon = $.trim(_this.find(".goods-quan p b").text().replace("￥", ""));
      var commission = $.trim(_this.find(".goods-yj p").text().replace("%", ""));
      var sales = $.trim(salesResetNum(_this.find(".goods-sale span b").text()));
      var tag = getTagArr(_this.find(".goods-info .tag i"));
      var goodsItemType = _this.find(".type span");
      var couponText = goodsItemType[0].innerText.replace("优惠券剩余：", "").split("/");
      var shop_name = $.trim(goodsItemType[1].innerText.replace("店铺：", ""));
      var auth_name = _this.find(".goods-author span")[1].innerText;

      localGoodsList.push({
        id: id,
        cid: cid,
        c_name: c_name,
        img: img,
        title: title,
        use_coupon_price: use_coupon_price,
        commission: commission,
        coupon: coupon,
        sales: sales,
        tag: tag,
        shop_name: shop_name,
        coupon_take: couponText[0],
        coupon_total: couponText[1],
        author: auth_name
      });
    });

    console.log(localGoodsList);
    window.localStorage.setItem("goodsListArr", JSON.stringify(localGoodsList));

    setTimeout(function () {
      if(getAutoSwitchPageStatus == "true") {
        doAutoSwitchPage();
      }
    }, 300)
  }, 2000);

  function getTagArr(dom) {
    var tagArr = [];
    dom.each(function () {
      tagArr.push({
        key: $(this).attr("class").replace("tag-", ""),
        title: $(this).attr("title")
      })
    });
    return tagArr;
  }

  containerDom.find(".btn-start").on("click", function () {
    window.localStorage.setItem("autoSwitchPageStatus", "true");
  });

  containerDom.find(".btn-stop").on("click", function () {
    window.localStorage.setItem("autoSwitchPageStatus", "false");
  });


  function doAutoSwitchPage() {
    console.log("跳转中");
    setTimeout(() => window.location.href = url, 500);
  }

  function salesResetNum(num) {
    if(/(万)/g.test(num)) {
      return num.replace(/(万|\.)/g, "") + "332";
    } else {
      return num;
    }
  }

  function originImgUrl(url) {
    return url.replace(/(_310x310\.jpg)/gi, "");
  }


  return false;

  // http://www.qingtaoke.com/goods/all?c=10&page=11
  setTimeout(() => {
    console.log("跳转页面中....");
    var url = $(".page-box2 ul li.next a").attr("href");
    console.log(url);
    if(url === undefined) return false;
    window.location.href = url;
  }, 1000);

  return false;
  setTimeout(() => {
    console.log("跳转中....");
    // 下一页URL
    var nextDom = $(".ui-page .ui-page-next");
    var url = nextDom.attr("href");

    var goodsArr = [];
    var localUrl = window.location.href;

    // 判断为搜索页面
    if(!/search_product\.htm/gi.test(localUrl)) return false;

    // 获取页面
    var curPage = parseInt($(".ui-page-cur").text());
    var getLocalPage = window.localStorage.getItem("nowCurPage") || 0;
    console.log("当前页码： " + curPage, "本地页码：" + getLocalPage);
    /*if(curPage <= getLocalPage) {
      console.log("当前页面小于本地页面");
      return goNextPage(url);
    }*/

    // 判断需要滑动验证码
    var bodyText = $("body")[0].innerText;
    var slideStatus = /(亲，小二正忙，滑动一下马上回来)/g.test(bodyText);
    if(slideStatus) return false;

    // 获取页面数据
    var tmGoodsArr = window.localStorage.getItem("tmGoodsArr") || JSON.stringify([]);
    tmGoodsArr = JSON.parse(tmGoodsArr);
    $("#J_ItemList .product").each(function () {
      var _this = $(this);
      var id = _this.attr("data-id");
      var imgUrl = _this.find(".productImg-wrap img").attr("data-ks-lazyload")
        || _this.find(".productImg-wrap img").attr("src");
      var price = _this.find(".productPrice em").attr("title");
      var d_title = _this.find(".productTitle a").text();
      var title = _this.find(".productTitle a").attr("title");
      var shop_name = _this.find(".productShop-name").text();
      var month_bill = parseInt(_this.find(".productStatus span em").text());
      var evaluate_num = _this.find(".productStatus span a").text();
      tmGoodsArr.push({
        id: id,
        img: imgUrl,
        price: price,
        d_title: d_title,
        title: title,
        shop_name: shop_name,
        month_bill: month_bill,
        evaluate_num: evaluate_num
      })
    });
    window.localStorage.setItem("tmGoodsArr", JSON.stringify(tmGoodsArr));
    console.log(JSON.stringify(tmGoodsArr));

    setTimeout(() => {
      //goNextPage(url, curPage);
    }, 5000);
  }, 1000);

  function goNextPage(url, curPage) {
    window.location.href = url;
    if(curPage != undefined) {
      window.localStorage.setItem("nowCurPage", curPage);
    }
  }
});