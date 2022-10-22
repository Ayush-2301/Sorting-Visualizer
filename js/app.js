// variables for buttons and range inputs
var size = document.getElementById("size_of_array");
var arr_size = size.value;
var speed = document.getElementById("speed_of_algo");
var gen_arr = document.getElementById("generate_array");
algo_btn = document.querySelectorAll(".btn");
// grid size and grids
var grid_size = [];
var grid = [];
var margin_size;
var cont = document.getElementById("main-container");
cont.style = "flex-direction:row;align-items: flex-end;";

// event listeners
size.addEventListener("input", size_of_array);
gen_arr.addEventListener("click", generate);

// to automatically load a default size of array
window.onload = size_of_array();

// function to store size of array
function size_of_array() {
  arr_size = size.value;
  generate();
}

// function to generate random grids
function generate() {
  cont.innerHTML = "";
  for (var i = 0; i < arr_size; i++) {
    grid_size[i] = Math.floor(Math.random() * 0.5 * (size.max - size.min)) + 10;
    // console.log(grid_size[i]);
    grid[i] = document.createElement("div");
    cont.appendChild(grid[i]);
    margin_size = 0.1;
    grid[i].style =
      " margin:" +
      margin_size +
      "%; background-color:#def8e8; width:" +
      (100 / arr_size - 2 * margin_size) +
      "%; height:" +
      grid_size[i] +
      "%;";
  }
}
// loop to add eventlistener to all algo buttons
for (var i = 0; i < algo_btn.length; i++) {
  // console.log(algo_btn[i]);
  algo_btn[i].addEventListener("click", sorting_algo);
}
// function to disable buttons
function disable_button() {
  for (var i = 0; i < algo_btn.length; i++) {
    algo_btn[i].classList.add("disabled");
    algo_btn[i].disabled = true;
    size.disabled = true;
    speed.disabled = true;
    gen_arr.classList.add("disable_gen");
    gen_arr.disabled = true;
  }
}
function sorting_algo() {
  // call disable function button before starting the algo
  disable_button();
  this.classList.add("selected");

  switch (this.innerText) {
    case "Bubble":
      bubble();
      break;
    case "Selection":
      selection();
      break;
    case "Insertion":
      insertion();
      break;
    case "Merge":
      merge();
      break;
    case "Quick":
      quick();
      break;
    case "Heap":
      heap();
      break;
  }
}
// store delay speed
var delay = 1000;
speed.addEventListener("input", delay_value);
function delay_value() {
  var arr_speed = speed.value;
  switch (parseInt(arr_speed)) {
    case 1:
      delay = 1;
      break;
    case 2:
      delay = 10;
      break;
    case 3:
      delay = 100;
      break;
    case 4:
      delay = 1000;
      break;
    case 5:
      delay = 10000;
      break;
  }
  delay_time = 10000 / (Math.floor(arr_size / 10) * delay);
}
// to store a default delay value on load page
var delay_time = 10000 / (Math.floor(arr_size / 10) * delay);
var counter_delay = 0; // to add delay every time when a grid is updated to provide better visulaisation
// function to update grids
function update(cont, size, color) {
  window.setTimeout(() => {
    cont.style =
      " margin:" +
      margin_size +
      "%; background-color:" +
      color +
      "; width:" +
      (100 / arr_size - 2 * margin_size) +
      "%; height:" +
      size +
      "%;";
  }, (counter_delay += delay_time));
}
// function to enable buttons after the sorting algorithm is finished
function enable() {
  // timeout is added  to enable buttons after every grid is updated when sorting is completed is finished
  window.setTimeout(() => {
    for (var i = 0; i < algo_btn.length; i++) {
      algo_btn[i].classList.remove("disabled");
      algo_btn[i].classList.remove("selected");
      // algo_btn[i].classList.add("enabled");
      algo_btn[i].disabled = false;
      size.disabled = false;
      speed.disabled = false;
      gen_arr.classList.remove("disable_gen");
      gen_arr.disabled = false;
    }
  }, (counter_delay += delay_time));
}
