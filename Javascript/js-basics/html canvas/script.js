const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
/* console.log(ctx); */
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJOin = "round";
ctx.lineCap = "round";

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e) {
  console.log(e);
}

window.addEventListener("mousemove", draw);
