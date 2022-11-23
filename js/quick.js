function partition(s, e) {
  var pivot = grid_size[s];
  var pivot_index = s + 1;

  update(grid[s], grid_size[s], "blue");

  for (var i = s + 1; i <= e; i++) {
    if (grid_size[i] < pivot) {
      update(grid[i], grid_size[i], "blue");

      swap(i, pivot_index);

      update(grid[pivot_index], grid_size[pivot_index], "#def8e8");
      update(grid[i], grid_size[i], "#def8e8");

      pivot_index++;
    }
  }
  swap(s, pivot_index - 1);
  for (var j = s; j <= pivot_index; j++) {
    update(grid[j], grid_size[j], "#00e5ba");
  }
  return pivot_index - 1;
}
function swap(a, b) {
  update(grid[a], grid_size[a], "red");
  update(grid[b], grid_size[b], "red");

  var temp = grid_size[a];
  grid_size[a] = grid_size[b];
  grid_size[b] = temp;

  update(grid[a], grid_size[a], "red");
  update(grid[b], grid_size[b], "red");
}
function quicksort(s, e) {
  if (s < e) {
    var p = partition(s, e);
    quicksort(s, p - 1);
    quicksort(p + 1, e);
  }
}
function quick() {
  document.querySelector(".worst_case").innerText = "Worst Case: O(N^2)";
  document.querySelector(".average_case").innerText =
    "Average Case: Θ(N log N)";
  document.querySelector(".best_case").innerText = "Best Case: Ω(N log N)";
  document.querySelector(".space_worst_case").innerText =
    "Worst Case: O(log N)";
  counter_delay = 0;
  quicksort(0, arr_size - 1);
  enable();
}
// #def8e8-unsorted color
// #00e5ba -sorted color
