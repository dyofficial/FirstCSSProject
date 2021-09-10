//MY SOLUTION

//const spanEl = document.getElementById("value");
//const decreaseBtn = document.getElementById("decrease-el");
//const increaseBtn = document.getElementById("increase-el");
//const resetBtn = document.querySelector("#reset-el");
//
//let defaultValue = 0;
//
////console.log(resetBtn);
//resetBtn.addEventListener("click", function () {
//  return (spanEl.textContent = 0);
//});
//increaseBtn.addEventListener("click", function () {
//  spanEl.textContent = defaultValue;
//  let increaseFactor = 1;
//  return (spanEl.textContent = defaultValue++);
//});
//decreaseBtn.addEventListener("click", function () {
//  return (spanEl.textContent = defaultValue--);
//});
let defaultValue = 0;
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
//console.log(btn);
btns.forEach(function (param) {
  //param = parameter
  param.addEventListener("click", function (btn) {
    // btn was inserted as a parameter to help spit out the actual button being clicked
    const classes = btn.currentTarget.classList;
    if (classes.contains("decrease")) {
      defaultValue--;
    } else if (classes.contains("increase")) {
      defaultValue++;
    } else {
      defaultValue = 0;
    }
    if (defaultValue > 0) {
      value.style.color = "green";
    }
    if (defaultValue < 0) {
      value.style.color = "red";
    }
    if (defaultValue === 0) {
      value.style.color = "white";
    }
    value.textContent = defaultValue;
  });
});
