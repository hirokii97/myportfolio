
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
