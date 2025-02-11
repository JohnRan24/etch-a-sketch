const container = document.querySelector(".grid-container");
  
  let squares = 16;
  let _parent_width = getComputedStyle(container).width;
  let sq_size = Math.floor(_parent_width.replace("px","") / squares) - 2;
  
  for (let x = 0; x < squares; x++) { 
      let newRow = document.createElement('div');
      newRow.classList = `grid-row`;
      container.appendChild(newRow);
      for (let y = 0; y < squares; y++) {
          let square = document.createElement('div');
          square.classList.add("square");
          square.style.width = sq_size + "px";
          square.style.height = sq_size + "px";
          square.style.backgroundColor = "red";
          newRow.appendChild(square);
          }
  }
  
  const gridCells = document.querySelectorAll(".square");
  
  gridCells.forEach(cell => {
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "blue";
      });
  });
  gridCells.forEach(cell => {
    cell.addEventListener("mouseout", () => {
        cell.style.backgroundColor = "red";
    });
  });


function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}



let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {

let num = prompt("choose the number of tiles between 1-100");

if(num <= 100 && num >= 1) {

  clearBox("container-grid");

  const container = document.querySelector(".grid-container");
  
  let squares = num;
  let _parent_width = getComputedStyle(container).width;
  let sq_size = Math.floor(_parent_width.replace("px","") / squares) - 2;
  
  for (let x = 0; x < squares; x++) { 
      let newRow = document.createElement('div');
      newRow.classList = `grid-row`;
      container.appendChild(newRow);
      for (let y = 0; y < squares; y++) {
          let square = document.createElement('div');
          square.classList.add("square");
          square.style.width = sq_size + "px";
          square.style.height = sq_size + "px";
          square.style.backgroundColor = "red";
          newRow.appendChild(square);
          }
  }
  
  const gridCells = document.querySelectorAll(".square");
  
  gridCells.forEach(cell => {
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "blue";
      });
  });
  gridCells.forEach(cell => {
    cell.addEventListener("mouseout", () => {
        cell.style.backgroundColor = "red";
    });
  });
}
else {
  let num2 = prompt("choose the number of tiles between 1-100");
  clearBox("container-grid");

  const container = document.querySelector(".grid-container");
  
  let squares = num2;
  let _parent_width = getComputedStyle(container).width;
  let sq_size = Math.floor(_parent_width.replace("px","") / squares) - 2;
  
  for (let x = 0; x < squares; x++) { 
      let newRow = document.createElement('div');
      newRow.classList = `grid-row`;
      container.appendChild(newRow);
      for (let y = 0; y < squares; y++) {
          let square = document.createElement('div');
          square.classList.add("square");
          square.style.width = sq_size + "px";
          square.style.height = sq_size + "px";
          square.style.backgroundColor = "red";
          newRow.appendChild(square);
          }
  }
  
  const gridCells = document.querySelectorAll(".square");
  
  gridCells.forEach(cell => {
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "blue";
      });
  });
  gridCells.forEach(cell => {
    cell.addEventListener("mouseout", () => {
        cell.style.backgroundColor = "red";
    });
  });
}

});
