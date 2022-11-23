function insertion() {
  document.querySelector(".worst_case").innerText = "Worst Case: O(N^2)";
  document.querySelector(".average_case").innerText = "Average Case: Θ(N^2)";
  document.querySelector(".best_case").innerText = "Best Case: Ω(N)";
  document.querySelector(".space_worst_case").innerText = "Worst Case: O(1)";
  counter_delay = 0;
  var i, key, j;
  for (i = 1; i < arr_size; i++) {
    key = grid_size[i];
    j = i - 1;
    update(grid[j], grid_size[j], "blue");
    update(grid[i], grid_size[i], "blue");
    // creating a sorted array and re-modifying it and creating space to insert the new smallest element
    while (j >= 0 && grid_size[j] > key) {
      update(grid[j], grid_size[j], "red");
      update(grid[j + 1], grid_size[j + 1], "red");
      grid_size[j + 1] = grid_size[j];
      update(grid[j], grid_size[j], "red");
      update(grid[j + 1], grid_size[j + 1], "red");
      update(grid[j], grid_size[j], "#def8e8");
      if (j == i - 1) {
        update(grid[j + 1], grid_size[j + 1], "blue");
      } else {
        update(grid[j + 1], grid_size[j + 1], "#def8e8");
      }
      j = j - 1;
    }
    // swapping
    grid_size[j + 1] = key;
    for (var x = 0; x < i; x++) {
      update(grid[x], grid_size[x], "#00e5ba");
    }
  }
  update(grid[i - 1], grid_size[i - 1], "#00e5ba");
  enable();
}

// #def8e8-unsorted color
// #00e5ba -sorted color
