"use strict";

const langArrow = document.querySelector(".lang_arrow");

if (langArrow) {
  langArrow.addEventListener("click", function (e) {
    const langSub = document.querySelector(".lang_sub");
    langArrow.classList.toggle("_active");
    langSub.classList.toggle("_open");
  });
}

$(document).ready(function () {
  $(".main_slider").slick({
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    autoplay: true,
  });
});

$(document).ready(function () {
  $(".benefits_slider").slick({
    arrows: true,
    slidesToShow: 3,
    infinite: true,
    speed: 500,
  });
});

$(document).ready(function () {
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
