const content = document.querySelector(".content");
const canvas = document.querySelector(".container");
const instructions = document.querySelector(".instructions");
const numPixelsUpdate = document.querySelector('#update-grid')
const eraseButton = document.querySelector('#erase-grid');

let drawing = false;
let numPixels = '16';
const defaultColor = "black";

function createGrid(width) {
  for (let i = 0; i < width * width; i++) {
    const wide = document.createElement("div");
    canvas.appendChild(wide);
  }
  canvas.setAttribute(
    "style",
    `grid-template-columns: repeat(${width}, auto); 
  grid-template-rows: repeat(${width}, auto);`
);}

function createPixels() {
  let pixels = canvas.children;
  for (let i = 0; i < pixels.length; i++) {
    pixels[i].setAttribute("class", "pixel");
  }
}

function clearGrid() {
  for (let i = 0; i < numPixels * numPixels; i++) {
    let pixel = document.querySelector('.pixel');
    pixel.remove();
  } 
}

function eraseCanvas() {
  clearGrid();
  createGrid(parseInt(numPixels));
  createPixels();
}

createGrid(parseInt(numPixels));
createPixels();

numPixelsUpdate.addEventListener('click', (e) => {
  let userPixel = prompt("Please provide a number of pixels that we can use as the width for the canvas. Use only numerals and please choose a number between 16 and 100:");
  if (parseInt(userPixel) < 16) {
    userPixel = 16;
  }
  else if (parseInt(userPixel) > 100) {
    userPixel = 100;
  }
  else if (userPixel == '') {
    userPixel = 16;
  }
  console.log(userPixel);
  clearGrid();
  createGrid(parseInt(userPixel));
  createPixels();
  numPixels = userPixel;
})

eraseButton.addEventListener('click', (e) => {
  eraseCanvas();
})

function draw() {
  const pixels = canvas.children;
  [].forEach.call(pixels, (pixel) => {
    pixel.addEventListener("mouseover", (v) => {
      if (drawing == true) {
        pixel.setAttribute("style", `background-color: ${defaultColor};`);
      }  
    });
  });
};

canvas.addEventListener("mousedown", (e) => {
  instructions.style.visibility = 'hidden';
  drawing = true;
  draw();
});

canvas.addEventListener("mouseup", (e) => {
  drawing = false;
});
