let menuBtn = document.querySelector('.menu-btn');
let nav = document.querySelector('.nav');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	nav.classList.toggle('active');
})



const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnIteraction: false,
  },
  // пагинация
  pagination: {
    el: '.swiper-pagination-bull',
    type: "bullets",
    bulletClass: "bull",
    bulletActiveClass: "bull-active",
    clickable: true
  },

  // навигация
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
  });


  $(".accordion").accordion({
    active: true,
    collapsible: true,
    heightStyle: "content"
  });


  document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
    btn.classList.remove('tabs-nab__btn--active')});
    e.currentTarget.classList.add('tabs-nab__btn--active');
    document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
    tabsBtn.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
    });



