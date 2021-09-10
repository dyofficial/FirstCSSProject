const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("click-btn");
const color = document.getElementById("color-value");

btn.addEventListener("click", function () {
  //console.log(document.body);
  //get random number between 0-3 (from array of colors)
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
