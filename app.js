const numItems = 75;
const canvas = document.querySelector(".container");
const color = "black";
const instructions = document.querySelector(".instructions");

let drawing = false;


function createGrid(width) {
  for (let i = 0; i < width * width; i++) {
    const wide = document.createElement("div");
    canvas.appendChild(wide);
  }
  canvas.setAttribute(
    "style",
    `grid-template-columns: repeat(${width}, auto); 
  grid-template-rows: repeat(${width}, auto);`
  );
  const pixels = canvas.children;
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].setAttribute("class", "pixel");
  }
}

createGrid(numItems);

const pixels = canvas.childNodes;

function draw() {
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", (v) => {
      if (drawing === true) {
        pixel.setAttribute("style", `background-color: ${color};`);
      }
    });
  });
}

canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  draw();
  instructions.style.display = 'none';
});

canvas.addEventListener("mouseup", (e) => {
  drawing = false;
});
