const links = document.querySelector(".links");
const hamburgerBtn = document.querySelector(".hamburger");
const date = document.getElementById("date");
const linksContainer = document.querySelector(".links-container");
//console.log(date);
// Hamburger
hamburgerBtn.addEventListener("click", function () {
  linksContainer.classList.toggle("show-links"); //show hidden links for small screens
  hamburgerBtn.classList.toggle("toggle"); //transition burger to an x onclick
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  // console.log(containerHeight);
  /* if (containerHeight === 2) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  } */
});
//Set Date
date.innerHTML = new Date().getFullYear();
//console.log(date.innerHTML);

//****************fixed navbar ****************//
const navbar = document.querySelector(".nav");
const topLink = window.addEventListener("scroll", function () {
  console.log(window.pageYOffset);
});
