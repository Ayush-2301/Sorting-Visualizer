function bubble() {
  console.log("bubble");
  counter_delay = 0;
  for (var i = 0; i < arr_size - 1; i++) {
    for (var j = 0; j < arr_size - i - 1; j++) {
      update(grid[j], grid_size[j], "blue");
      // comparision of smallest
      if (grid_size[j] > grid_size[j + 1]) {
        update(grid[j], grid_size[j], "red");
        update(grid[j + 1], grid_size[j + 1], "red");
        // swapping of elements
        var temp = grid_size[j];
        grid_size[j] = grid_size[j + 1];
        grid_size[j + 1] = temp;

        update(grid[j], grid_size[j], "red");
        update(grid[j + 1], grid_size[j + 1], "red");
      }
      update(grid[j], grid_size[j], "#def8e8");
    }
    update(grid[j], grid_size[j], "#00e5ba");
  }
  update(grid[0], grid_size[0], "#00e5ba");
  enable();
}

// #def8e8-unsorted
// #00e5ba -sorted color
