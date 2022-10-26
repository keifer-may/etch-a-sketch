const content = document.querySelector(".content");
const canvas = document.querySelector(".container");
const color = "black";
const instructions = document.querySelector(".instructions");
// const gridInputAttributes = {
//   type: "range",
//   name: "grid",
//   min: "16",
//   max: "100",
//   step: "4",
//   defaultValue: "16",
// }

// need to determine how to use input objects to interact with the canvas and the game--
// fix the gridInput tools so that the uuser can edit the number of pixels in the canvas


let drawing = false;
let numItems = '16';

// function setAttributes(element, attributes) {
//   Object.keys(attributes).forEach(attr => {
//     element.setAttribute(attr, attributes[attr]);
//   });
// }


// let gridDiv = document.createElement('div');
// let gridInput = document.createElement('input');
// gridDiv.appendChild(content);
// gridInput.appendChild(gridDiv);

// setAttributes(gridInput, gridInputAttributes);


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

createGrid(parseInt(numItems));

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
  instructions.style.visibility = 'hidden';
  
  drawing = true;
  draw();
});

canvas.addEventListener("mouseup", (e) => {
  drawing = false;
});
