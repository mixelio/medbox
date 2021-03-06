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
  const mediaQuery = window.matchMedia("(max-width: 600px)");
  if (mediaQuery.matches) {
    $(".main_slider").slick({
      arrows: false,
    });
  }

  $(".main_slider").slick({
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    autoplay: true,
  });
});

$(document).ready(function () {
  const mediaQuery = window.matchMedia("(max-width: 400px)");
  if (mediaQuery.matches) {
    $(".benefits_slider").slick({
      slidesToShow: 1,
    });
  }
  $(".benefits_slider").slick({
    arrows: true,
    slidesToShow: 3,
    infinite: true,
    speed: 500,
  });
});

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

$(document).ready(function () {
  $(".main_content__slider").slick({
    arrows: true,
    rows: 4,
    slidesToShow: 8,
    infinite: true,
    speed: 500,
    autoplay: true,
  });
});

const play = document.querySelector(".play");
const video = document.querySelector(".function__video");
const playActive = document.querySelector("._playActive");
const playStop = document.querySelector(".playStop");

if (!playActive) {
  play.addEventListener("click", function (e) {
    play.classList.add("_playActive");
    video.setAttribute("autoplay", "");
    video.setAttribute("controls", "");
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
