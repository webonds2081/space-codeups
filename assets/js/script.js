"use strict";

jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");
  });
  var topBtn = $('.pagetop');
  topBtn.hide(); // ボタンの表示設定

  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  }); // ボタンをクリックしたらスクロールして上に戻る

  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  }); // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    var time = 400;
    var header = $('header').innerHeight();
    var target = $(this.hash);
    if (!target.length) return;
    var targetY = target.offset().top - header;
    $('html,body').animate({
      scrollTop: targetY
    }, time, 'swing');
    return false;
  });
});


const tl = gsap.timeline({ ease: Power2.easeInOut });

gsap.fromTo('.main-view__title',{
  opacity:0,
},{
  opacity:1,
  duration:3.0,
  // scrollTrigger:{
  //   trigger:'.main-view__title',
  //   start:'top center'
  // }
});
gsap.fromTo('.movie__img',{
  y:'25%',
  opacity:0
},{
  y:0,
  opacity:1,
  ease:"bounce.out",
  scrollTrigger:{
    trigger:'.movie__img',
    start:'center center'
  }
})
// gsap.fromTo('.bg-star',{
//   opacity:0
// },{
//   opacity:1,
//   repeat:-1
// })
// gsap.fromTo('.about__title span',{
//   y:'-1em'
// },{
//   y:0,
//   stagger:0.25,
//   repeat:-1,
//   scrollTrigger:{
//     trigger:'.about__title',
//     start:'center center'
//   }
// });

tl.to('.about__title span',{
  scale:3,
  delay:3,
  stagger:1.0
},'same').to('.about__title span',{
  scale:1,
  stagger:1.0
},'same')

var textWrapper = document.querySelectorAll('.about-block__title');
    textWrapper.forEach(
                (t) => (t.innerHTML = t.textContent.replace(/\S/g, "<span class='letter'>$&</span>"))
    );

gsap.fromTo('.letter',{
  rotateZ:'180deg',
  x:'1em',
  y:'1.2em',
},{
  rotateZ:0,
  x:0,
  y:0,
  stagger:0.25
})
