var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0, // change 50 to 0
      stretch: 0,
      depth: 0, // change 100 to 0
      modifier: 1,
      slideShadows: true,
    },
   loop:true,
   autoplay:{
      delay:2500,
      disableOnIteraction:false,

    },
    pagination: {
    el: ".swiper-pagination",
  },
  });