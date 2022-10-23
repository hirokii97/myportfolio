
//Swiper(スライダー)
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: false,//永遠にスライドする（1→2→3→1）
  slidesPerView:1,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',//スライド分のドットを作れる
  clickable:true //ドットをクリックするとページ遷移
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


//drawer
$(function() {
  //処理を書く部分
  $(".header-hamburger-item").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      $(".header-drawer-nav").toggleClass('active');//ナビゲーションにactiveクラスを付与
  });
  
  $(".header-drawer-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
      $(".header-hamburger-item").removeClass('active');//ボタンの activeクラスを除去し
      $(".header-drawer-nav").removeClass('active');//ナビゲーションのactiveクラスも除去
  });
  });
