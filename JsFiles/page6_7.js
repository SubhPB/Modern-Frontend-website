var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    }, 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


function page8JS(){

  const byimaanH1s = document.querySelectorAll('.byimaan span h1');

  const p8Rel = document.querySelector('.p8-top-rel');
  const p8Abs = p8Rel.querySelector('.p8-top-abs');

  gsap.to(p8Abs,{
    scrollTrigger: {
      scroller: 'body',
      trigger: p8Rel,
    },
    top: 0,
    ease: 'power2.in',
    duration: .8,
  })

  gsap.to(byimaanH1s,{
    scrollTrigger: {
      trigger: byimaanH1s,
      scroller: 'body',
      toggleActions: "restart pause resume pause"
    },

    top: 0,
    duration: 1.1,
    stagger: .07,
    ease: 'power3.in'
  })
}

page8JS();