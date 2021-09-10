class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.job = "";
    this.height = "";
  }
  getName(params) {
    return this.name;
  }
  getAge(params) {
    return this.age;
  }
  setJob(job) {
    this.job = job;
  }
  setHeight(height) {
    this.height = height;
  }
}

/* let Person1 = new Person("George", 15);
let Person2 = new Person("Akua", 30);
console.log(Person2.getName());
console.log(Person1.getName()); */

class House {
  constructor(address, price, residents) {
    this.address = address;
    this.price = price;
    this.residents = residents;
  }
  getAddress() {
    return this.address;
  }
  getPrice() {
    return this.price;
  }
  getResidents() {
    return this.residents;
  }
  addResident(resident) {
    this.residents.push(resident);
  }
}
class Programmer extends Person {
  constructor(name, age, salary, company, language) {
    super(name, age);
    this.salary = salary;
    this.company = company;
    this.language = language;
  }
  getSalary() {
    return this.salary;
  }
  sayHi() {
    console.log(
      `Hi! My name is ${this.name} I'm a programmer and I work with ${this.company}`
    );
  }
}
let Daniel = new Programmer("Daniel", 29, 2000, "eP", "react");
console.log(Daniel);
Daniel.setJob("Programmer");
/* let Daniel = new Person("Daniel", 29);
Daniel.setJob("Developer");
Daniel.setHeight(150);
let Sam = new Person("Sam", 22);
let houseAdu = new House("12 Senchi", 15000, [Daniel, Sam]);

let Julia = new Person("Julia", 16);
houseAdu.addResident(Julia);

console.log(houseAdu.getResidents());
 */
const p = document.getElementById("demo");
let header = "Template Literals";
let tags = ["template literals", "javascript", "es6", "hughbfb"];
let html = `<h2>${header}</h2><ul>`;
for (const i of tags) {
  html += `<li>${i}</li>`;
}
html += `</ul>`;
p.innerHTML += html;

const fruits = ["banana", "apple", "mango", "cashew"];
let fruitParagraph = document.getElementById("fruits");
let fruitParagraphDisplay = "<ul>";
for (let i = 0; i < fruits.length; i++) {
  const element = fruits[i];
  // console.log(element);

  fruitParagraphDisplay += "<li>" + element + "</li>";
}
fruitParagraphDisplay += "</ul>";
fruitParagraph.innerHTML = fruitParagraphDisplay;

let paragraph = document.getElementById("demo1");
const btn = document.getElementById("btn");
const age = document.getElementById("age").value;

console.log(age);
btn.addEventListener("click", function () {
  if (age >= 18) {
    paragraph.innerHTML = "You are above 18";
  } else {
    paragraph.innerHTML = "";
  }
});

const people = [
  { nom: "Wes", year: 1988 },
  { nom: "Kait", year: 1986 },
  { nom: "Irv", year: 1970 },
  { nom: "Lux", year: 2015 },
];
const comments = [
  { text: "love this", id: 523423 },
  { text: "super good", id: 823423 },
  { text: "you are the best", id: 2039842 },
  { text: "ramen is my favorite meal", id: 123523 },
  { text: "nice nice nice", id: 542328 },
];

const Adult = people.some(function (person) {
  const currentYear = new Date().getFullYear();
  const setAge = 19;
  if (person.year - currentYear >= 19) {
    return true;
  }
});
console.log(Adult);
const everyOne = people.every(function (person) {
  const currentYear = new Date().getFullYear();
  const setAge = 19;
  if (person.year - currentYear === 19) {
    return true;
  }
});
console.log(everyOne);
const comment = comments.find(function (comment) {
  if (comment.id === 823423) {
    return true;
  }
});
console.log(comment);
