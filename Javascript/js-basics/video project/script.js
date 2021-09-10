const switchBtn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
//console.log(video);
switchBtn.addEventListener("click", function () {
  if (!switchBtn.classList.contains("slide")) {
    switchBtn.classList.add("slide");
    video.pause();
  } else {
    switchBtn.classList.remove("slide");
    video.play();
  }
});

//preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
