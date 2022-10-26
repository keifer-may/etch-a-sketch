const numItems = 50;
const canvas = document.querySelector('.container');

function createGrid(width) {
  for (let i = 0; i < width * width; i++) {
    const wide = document.createElement('div');
    canvas.appendChild(wide);
  }
  canvas.setAttribute('style', `grid-template-columns: repeat(${width}, auto); 
  grid-template-rows: repeat(${width}, auto);`);
}

createGrid(numItems);

