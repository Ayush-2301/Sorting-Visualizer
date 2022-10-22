function selection() {
  counter_delay = 0;
  for (var i = 0; i < arr_size - 1; i++) {
    update(grid[i], grid_size[i], "red");
    var min = i;
    for (var j = i + 1; j < arr_size; j++) {
      update(grid[j], grid_size[j], "blue");
      // condition to find out the smallest element in the array excluding the grid_size[i] and the previous element than index i
      if (grid_size[j] < grid_size[min]) {
        if (min != i) {
          update(grid[min], grid_size[min], "#def8e8");
        }
        min = j;
        update(grid[min], grid_size[min], "red");
      } else {
        update(grid[j], grid_size[j], "#def8e8");
      }
    }
    if (min != i) {
      // Swapping the elements
      let tmp = grid_size[min];
      grid_size[min] = grid_size[i];
      grid_size[i] = tmp;
      update(grid[min], grid_size[min], "red");
      update(grid[i], grid_size[i], "red");
      update(grid[min], grid_size[min], "#def8e8");
    }
    update(grid[i], grid_size[i], "#00e5ba");
  }
  update(grid[i], grid_size[i], "#00e5ba");
  enable();
}

// #def8e8-unsorted color
// #00e5ba -sorted color
