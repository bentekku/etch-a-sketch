const DRAWBOARD = document.querySelector(".draw-board");
const USERINPUT = document.querySelector("#slider-user-input");
const DISPLAYPARA = document.querySelector("#dis-user-input");

// just for debugging purpose
let totalDivs = 0;

let userVal = "";

processUserVal();

USERINPUT.addEventListener("change", processUserVal);

function processUserVal() {
  // grabbing the value from the slider and storing it
  userVal = Number(USERINPUT.value);

  // displaying the value, so the user knows what's the size of current grind
  DISPLAYPARA.innerHTML = `${userVal} x ${userVal}`;

  // just for debugging purpose
  totalDivs = Number(userVal) * Number(userVal);

  // clearing the board whenever there's a change in the value of the slider
  clearGrid();

  // could have used if-else satement to limit the range of number,
  // but as I'm using slider there's no need for that
  // generateGrid(totalDivs);
  generateGrid(userVal);

  // just for debugging purpose
  console.log(`user value: ${userVal}`);
  console.log(`total divs to be displayed: ${totalDivs}`);
}

function clearGrid() {
  // this clears the child of the DRAWBOARD, i.e., sets it empty
  DRAWBOARD.innerHTML = "";
}

function generateGrid(num) {
  // creating a set number of columns and rows which are equal in number and size
  // 1fr is similar to flex-size: 1
  DRAWBOARD.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  DRAWBOARD.style.gridTemplateRows = `repeat(${num}, 1fr)`;

  // displaying or appending new divs onto the DRAWBOARD
  for (let index = 0; index < num * num; index++) {
    let pixelDiv = document.createElement("div");
    pixelDiv.classList.add("pixel-div");

    // just for debugging
    // pixelDiv.style.cssText =
    // ("border-radius: 12px; border: 1px solid salmon; background-color: green;");

    DRAWBOARD.insertAdjacentElement("beforeend", pixelDiv);
  }
}
