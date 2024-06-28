function toggleSidebar() {
  var icon = document.getElementById("icon");
  const sidebar = document.querySelector(".sidebar");
  if (sidebar.style.display === "flex") {
    icon.classList.add("ri-menu-line");
    sidebar.style.display = "none";
  } else {
    icon.classList.remove("ri-menu-line");
    icon.classList.add("ri-close-line");
    sidebar.style.display = "flex";
  }
}

window.onload = function () {
  var swiper = new Swiper(".mySwiperClass", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "3",
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 50,
      modifier: 1,
      slideShadows: true,
    },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 1000,
    loop: true,
    //   autoplay: { delay: 2500, disableOnInteraction: true },
  });
};
