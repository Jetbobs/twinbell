const first_swiper = new Swiper('.swiper_first', {
  // Optional parameters
  // 방향
  direction: 'horizontal',
  loop: true,
  //autoplay
  autoplay: {
        //autoplay 지연시간 단위는 ms
    delay: 3000,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  }

});

const second_swiper = new Swiper('.swiper_second', {
  // 슬라이드 한번에 몇개씩 보이게 하는지
  slidesPerView: 5,
  // 각 슬라이드 컨텐츠 간 사이 px단위
  spaceBetween: 10,
  // autoplay시 몇개씩 롤링 되게 할건지
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //autoplay
  autoplay: {
    //autoplay 지연시간 단위는 ms
    delay: 3000,
  },
});


