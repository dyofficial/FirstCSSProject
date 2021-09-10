const reviews = [
  {
    id: 1,
    name: "cyndi dapaah",
    job: "web developer",
    img: "cyndi.jpeg",
    text: "Lorem ipsum dolpa fugit laborum reprehenderit id quis voluptatibus ipsam delectus, quo voluptates odit, repellendus libero similique distinctio aspernatur.",
  },
  {
    id: 2,
    name: "kofi yeboah",
    job: "web designer",
    img: "dy.jpeg",
    text: "Nihil numquam ipsum ex optio nostrum aspernatur suscipit illum pdiandae animi accusantium,io!",
  },
  {
    id: 3,
    name: "cyndi agyeiwaa",
    job: "intern",
    img: "cyndi2.jpeg",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
  },
  {
    id: 4,
    name: "chelcy momo",
    job: "sales associate",
    img: "chelcy.jpeg",
    text: "ued ud ug fuegd  f uwgfuo gyfi ufi furf fuerirh hfuhif euo gfouf89yprif 7t fpe f88f p9 ",
  },
];

//select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const randomBtn = document.querySelector(".random-btn");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});
//show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
//show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }

  showPerson();
});
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }

  showPerson();
});

//randomBtn to get a random item from reviews array

randomBtn.addEventListener("click", function () {
  let randomReview = Math.floor(Math.random() * reviews.length);
  currentItem = randomReview;
  showPerson();
});
