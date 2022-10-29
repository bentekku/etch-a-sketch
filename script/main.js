const DRAWBOARD = document.querySelector(".draw-board");
const USERINPUT = document.querySelector("#slider-user-input");
const DISPLAYPARA = document.querySelector("#dis-user-input");

let totalDivs = 0;

processUserVal();

const buttonBlack = document.querySelector("#btn-black");

let userVal = "";

USERINPUT.addEventListener("change", processUserVal);

// buttonBlack.addEventListener("click", processUserVal);

function processUserVal() {
  let userVal = Number(USERINPUT.value);

  DISPLAYPARA.innerHTML = `${userVal} x ${userVal}`;
  totalDivs = Number(userVal) * Number(userVal);
  clearGrid();

  // generateGrid(totalDivs);
  generateGrid(userVal);

  console.log(`user value: ${userVal}`);
  console.log(`total divs: ${totalDivs}`);
}

function clearGrid() {
  DRAWBOARD.innerHTML = "";
}

function generateGrid(num) {
  // for (let f_index = 0; f_index < num; f_index++) {
  //   let row = document.createElement("div");
  //   row.classList.add("pixel-div");

  //   DRAWBOARD.appendChild(row);

  //   for (let s_index = 0; s_index < num; s_index++) {
  //     let col = document.createElement("div");
  //     col.classList.add("pixel-div");

  //     row.appendChild(col);
  //   }
  // }
  for (let index = 0; index < num; index++) {
    for (let s_index = 0; s_index < num; s_index++) {
      let newDiv = document.createElement("div");
      newDiv.classList.add("pixel-div");

      DRAWBOARD.appendChild(newDiv);
    }
  }
}
