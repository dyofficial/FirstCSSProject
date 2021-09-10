/*let firstName = "Xavier";
let greeting = "Hi there";
let myGreeting = `${greeting}, ${firstName}!`;

function userGreeting() {
  console.log(myGreeting);
}
userGreeting();*/

/*let myPoints = 3;

function add3Points() {
  myPoints += 3;
}

function remove1Point() {
  myPoints = myPoints - 1;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

console.log(myPoints);*/
//document.getElementById('error').textContent
let error = document.getElementById("error");
function errorMsg() {
  error.textContent = "Something went wrong, please try again";
}
let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
console.log(num1);
//document.getElementById("num2-el").textContent = num2;
//
//let sumEl = document.getElementById("sum-el");
//
//function add() {
//  sumEl.textContent = `Answer: ${num1 + num2}`;
//}
//function subtract() {
//  sumEl.textContent = `Answer: ${num1 - num2}`;
//}
//function divide() {
//  sumEl.textContent = `Answer: ${num1 / num2}`;
//}
//function multiply() {
//  sumEl.textContent = `Answer: ${num1 * num2}`;
//}
//
