//const person = {
//  firstName: "John",
//  lastName: "Doe",
//  age: 30,
//  hobbies: ["music", "movies", "sports"],
//  address: {
//    street: "50 main st",
//    city: "Boston",
//    state: "MA",
//  },
//};
////console.log(person.hobbies[1]);
//const todos = [
//  {
//    id: 1,
//    text: "Take out trash",
//    isCompleted: true,
//  },
//  {
//    id: 2,
//    text: "Cyndi",
//    isCompleted: false,
//  },
//  {
//    id: 3,
//    text: "Akua",
//    isCompleted: true,
//  },
//];
//
//const todoJSON = JSON.stringify(todos);
////console.log(todoJSON);
////console.log(todos[1].text);
//for (let i = 0; i < todos.length; i++) {
//  //console.log(todos[i].text);
//}
////forEach, map, filter
////forEach (loops through array)
//todos.forEach(function (parameter) {
//console.log(variable.text);
//});

//map allows to create a new array from an array
//Loop through array and return the text value of array element with index 0
//const todoText = todos.map(function (parameter) {
//  return parameter.text;
//});
//console.log(todoText);

//filter
////creates a new array from an array based on a condition
//const todoTextFilter = todos
//  .filter(function (parameter) {
//    return parameter.isCompleted === false;
//  })
//  .map(function (parameter) {
//    return parameter.text;
//  });
//console.log(todoTextFilter);
//const x = 10;
//
//const color = x > 10 ? "red" : "blue"; // color = if x > 10, the color is red else, blue
////console.log(color);
//
//switch (color) {
//  case "red":
//    //console.log("COLOR IS RED");
//    break;
//  case "blue":
//    // console.log("COLOR IS BLUE");
//    break;
//  default:
//    //  console.log("color is NOT red or BLUE");
//    break;
//}
//Constructor function
//function Person(newName, oldName, dob) {
//  this.newName = newName;
//  this.oldName = oldName;
//  this.dob = new Date(dob);
//
//  // console.log(this);
//}
//Instantiate object (create an object literal)

//console.log(person2);
////Clas
//class Person {
//  constructor(newName, oldName, dob) {
//    this.newName = newName;
//    this.oldName = oldName;
//    this.dob = new Date(dob);
//  }
//  getBirthYear() {
//    return this.dob.getFullYear();
//  }
//  getFullName() {
//    return `${this.newName} ${this.oldName}`;
//  }
//}
//
//const person1 = new Person("John", "Doe", "06-03-1992");
//console.log(person1);
//const person2 = new Person("Cyndi", "Dapaah", "12-08-1995");

//let dateBtn = document.querySelector(".date");
//
//let timeDisplay = document.querySelector(".date-display");
//
//dateBtn.addEventListener("click", dateDisplay);
////function dateDisplay() {
//let now = Date();
//
//timeDisplay.textContent = now;
//
//setInterval(dateDisplay, 1000);
////}
//let closeBtn = document.querySelector(".close");
//function closeDisplay() {
//  timeDisplay.textContent = "";
//  //setTimeout(closeDisplay);
//  //setInterval(dateDisplay, 0);
//}
//
//closeBtn.addEventListener("click", closeDisplay);
//
const btn = document.querySelector(".btn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

btn.addEventListener("click", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  //console.log("object");
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "no input detected";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
    );
    userList.appendChild(li);
    //console.log(li);

    //Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
//function sum(a, b) {
//  return a + b;
//}
//
//let sum2 = (a, b) => a + b;
//function isPositive(number) {
//  return number >= 0;
//}
//let isPositive2 = (number) => number >= 0;
//function randomNumber() {
//  return Math.random;
//}
//let randomNumber2 = () => Math.random;
//class Person {
//  constructor(name) {
//    this.name = name;
//  }
//  printNameArrow() {
//    setTimeout(() => {
//      console.log("Arrow: " + this.name);
//    }, 100);
//  }
//  printNameFunction() {
//    setTimeout(function () {
//      console.log("Function: " + this.name);
//    }, 100);
//  }
//}
class Student {
  constructor(name, age, major) {
    this.name = name;
    this.age = age;
    this.major = major;
  }

  introduction = () =>
    console.log(`I'm ${this.name}, ${this.age} years old. 
                 I'm a student of ${this.major}. `);
}

const student1 = new Student("Aryan", 20, "CSE");
student1.introduction();
console.log(student1);

const student2 = new Student("Kaarthik", 21, "CSE");
student2.introduction();

// OUTPUT
// "I'm Aryan, 20 years old. I'm a student of CSE. "
// "I'm Kaarthik, 21 years old. I'm a student of CSE. "
