var body = document.querySelector("body");
var headerOuter = document.querySelector(".header-outer");
var hamburger = document.querySelector(".burger-container");
var navUl = document.querySelector(".nav");

hamburger.addEventListener('click', function () {
  this.classList.toggle("change");
  navUl.classList.toggle("open");
});

window.addEventListener("scroll", function() {
  if(window.scrollY > 400) {
      headerOuter.classList.add("hidden");
      hamburger.classList.remove("change");
      navUl.classList.remove("open");
  } else {
      headerOuter.classList.remove("hidden");
  }
});

$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').animate({
      'scrollTop': $target.offset().top
    }, 500, 'swing', function() {
      window.location.hash = target;
    })
  })
})

var githubLink = document.querySelector(".github-link");
var githubLinkImg = document.querySelector(".github-link img");

githubLinkImg.addEventListener("mouseover", function() {
  githubLinkImg.setAttribute("src", "GitHub-Mark-120px-plus.png");
});

githubLinkImg.addEventListener("mouseout", function() {
  githubLinkImg.setAttribute("src", "GitHub-Mark-Light-120px-plus.png");
});