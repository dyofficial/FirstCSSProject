const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
console.log(links);

navToggle.addEventListener("click", function () {
  if (links.classList.contains("links")) {
    links.classList.remove("links");
  } else {
    links.classList.add("links");
  }
});
