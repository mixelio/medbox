"use strict";

const langArrow = document.querySelector(".lang_arrow");

if (langArrow) {
  langArrow.addEventListener("click", function (e) {
    const langSub = document.querySelector(".lang_sub");
    langArrow.classList.toggle("_active");
    langSub.classList.toggle("_open");
  });
}

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".burger__menu");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

$(document).ready(function () {
  const mediaQuery = window.matchMedia("(max-width: 800px)");
  if (mediaQuery.matches) {
    $(".related_post__slider").slick({
      arrows: false,
      slidesToShow: 1,
    });
  }

  $(".related_post__slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    infinite: true,
    speed: 500,
  });
});
