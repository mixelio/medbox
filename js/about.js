"use strict";

$(document).ready(function () {
  const mediaQuery = window.matchMedia("(max-width: 800px)");
  if (mediaQuery.matches) {
    $(".comment_slider").slick({
      arrows: false,
      slidesToShow: 1,
      infinite: true,
      speed: 700,
      dots: true,
      centerMode: true,
      autoplay: true,
    });
  }

  $(".comment_slider").slick({
    arrows: false,
    slidesToShow: 3,
    infinite: true,
    speed: 700,
    dots: true,
    centerMode: true,
    autoplay: true,
  });
});

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".burger__menu");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
