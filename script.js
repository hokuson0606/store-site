$("#openbtn").on("click", function (event) {
  //ボタンがクリックされたら
  event.stopPropagation();
  $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass("panelactive"); //ナビゲーションにpanelactiveクラスを付与
  $("#g-nav-leader").toggleClass("panelactive");
});

// $("#header-title").on("click", function () {
//   console.log("click");
// });

$("#g-nav a").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".openbtn1").removeClass("active"); //ボタンの activeクラスを除去し
  $("#g-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスも除去
});
