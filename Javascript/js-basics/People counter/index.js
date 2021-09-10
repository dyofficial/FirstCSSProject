//document.getElementById("count-el").innerText = 5;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

let count = 0;
console.log(saveEl);

function increment() {
  count += 1;
  countEl.textContent = count;
}
//create a function called save()

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  console.log(count);
  countEl.textContent = 0;
  count = 0;
}

/////

//document.getElementById("welcome-el").innerText = Daniel;
let welcomeEl = document.getElementById("welcome-el");
//console.log(welcomeEl);

let firstName = "Daniel";
let greeting = "Welcome back,";

let myGreeting = `${greeting} ${firstName}`;

welcomeEl.innerText = myGreeting;
