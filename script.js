// Configuración para el primer Swiper
var swiper1 = new Swiper(".mySwiper-1", { 
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  // Configuración para el segundo Swiper
  var swiper2 = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
  
  // Actualización de Swipers al cambiar tabs
  let tabInputs = document.querySelectorAll(".tabInput");
  tabInputs.forEach(function(input) {
    input.addEventListener("change", function() {
      let id = input.getAttribute("data-id"); // Cambia esto al atributo correcto
      let thisSwiper = document.getElementById("swiper" + id);
      if (thisSwiper && thisSwiper.swiper) {
        thisSwiper.swiper.update();
      }
    });
  });
  