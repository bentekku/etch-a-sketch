const DRAWBOARD = document.querySelector(".draw-board");
const USERINPUT = document.querySelector("#slider-user-input");
const DISPLAYPARA = document.querySelector("#dis-user-input");
const BLACK_COLOR = document.querySelector("#btn-color-black");
const RANDOM_COLOR = document.querySelector("#btn-color-random");
const ERASE_COLOR = document.querySelector("#btn-color-erase");
const CLEAR_GRID = document.querySelector("#btn-reset");

// just for debugging purpose
let totalDivs = 0;

let userVal = "";
let colorSelected = "black";

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
  // console.log(`user value: ${userVal}`);
  // console.log(`total divs to be displayed: ${totalDivs}`);
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

    pixelDiv.addEventListener("mouseover", paint);

    // just for debugging
    // pixelDiv.style.cssText =
    // ("border-radius: 12px; border: 1px solid salmon; background-color: green;");

    DRAWBOARD.insertAdjacentElement("beforeend", pixelDiv);
  }

  function generateRandomColor() {
    let color = "#";
    color += Math.floor(Math.random() * 16777215).toString(16);
    return color;
  }

  function paint() {
    if (colorSelected === "black") {
      this.style.cssText = "background-color: black;";
    } else if (colorSelected === "random") {
      // don't need to store the value of random color generated in a variable
      // instead it can be called and display in the back-ticks method, which surprisingly can be used to call functions too, Amazing!
      this.style.cssText = `background-color: ${generateRandomColor()}`;
    } else if (colorSelected === "eraser") {
      // this.style.cssText = "background-color: none";
      this.style.cssText = "background-color: var(--bg-light)";
    }
  }

  function resetGrid() {
    const PIXEL_DIVS = document.querySelectorAll(".pixel-div");
    PIXEL_DIVS.forEach((pixelDiv) => {
      pixelDiv.style.cssText = "background-color: var(--bg-light)";
    });
    // console.log("You click on: Clear Button");
  }

  BLACK_COLOR.addEventListener("click", () => {
    colorSelected = "black";
  });

  RANDOM_COLOR.addEventListener("click", () => {
    colorSelected = "random";
  });

  ERASE_COLOR.addEventListener("click", () => {
    colorSelected = "eraser";
  });

  CLEAR_GRID.addEventListener("click", resetGrid);
}
