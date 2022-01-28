'use strict';

var tl = gsap.timeline();
tl.fromTo('.js-main-title', {
  x: '-50%'
}, {
  x: 0,
  duration: 1.5,
  ease: "bounce.out"
}).fromTo('.js-img', {
  y: '20%',
  opacity: 0
}, {
  y: 0,
  duration: 1.0,
  opacity: 1,
  delay: 2.0
});
var textWrap = document.querySelectorAll('.js-span');
textWrap.forEach(function (t) {
  return t.innerHTML = t.textContent.replace(/\S/g, '<span class="letter">$&</span>');
});
gsap.fromTo('.js-span span', {
  opacity: 0,
  x: '-10px',
  scale: 2
}, {
  scale: 1,
  x: 0,
  opacity: 1,
  stagger: 0.01,
  scrollTrigger: {
    trigger: '.js-about',
    start: 'top 80%',
    markers: true,
    scrub: true
  }
});