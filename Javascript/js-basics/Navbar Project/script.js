const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const btn = document.getElementById("btn");

console.log(btn);

//console.log(navToggle);

navToggle.addEventListener("click", function () {
  // console.log(navToggle);
  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }
});
btn.addEventListener("click", function () {
  function clickMe() {
    window.open("index bj.html");
  }
  clickMe();
});
