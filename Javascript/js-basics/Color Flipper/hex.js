const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("click-btn");
const color = document.getElementById("color-value");
//Revolves around generatin hex values for numbers
//Hex value consists of # and 6 values within the hex array

btn.addEventListener("click", function () {
  let hexColor = "#";
  //hexColor will hold the # whilst we right a for loop that runs 6 times to generate a random value from array
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
console.log(getRandomNumber);
