$(".openbtn2").click(function () {
  $(this).toggleClass("active");
  $("#g-nav").toggleClass("panelactive");
  $("#g-nav-menu").toggleClass("panelactive");
});

$("#g-nav a").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".openbtn1").removeClass("active"); //ボタンの activeクラスを除去し
  $("#g-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスも除去
  $("#g-nav-menu").removeClass("panelactive");
});
