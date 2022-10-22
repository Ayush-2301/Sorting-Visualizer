function mergeHelper(l, mid, r) {
  var p = l,
    q = mid + 1,
    k = l;
  // new array in which the sub-array will be merged in sorted way
  var arr = [];
  // condition to insert the left side sub-array and right side sub-array in new array
  while (p <= mid && q <= r) {
    if (grid_size[p] < grid_size[q]) {
      arr[k] = grid_size[p];
      update(grid[p], grid_size[p], "red");
      p++;
      k++;
    } else {
      arr[k] = grid_size[q];
      update(grid[q], grid_size[q], "red");
      q++;
      k++;
    }
  }
  // now the rest of the sub array will be inserted
  // condition to insert rest of left side sub-array
  while (p <= mid) {
    arr[k] = grid_size[p];
    update(grid[p], grid_size[p], "red");
    p++;
    k++;
  }
  // condition to insert rest of right side sub-array
  while (q <= r) {
    arr[k] = grid_size[q];
    update(grid[q], grid_size[q], "red");
    q++;
    k++;
  }
  // store the value of new array in to the initial array
  for (let h = l; h <= r; h++) {
    grid_size[h] = arr[h];
    update(grid[h], grid_size[h], "#00e5ba");
  }
}
// splitting the array into smaller sub-array using recursion
function mergesort(l, r) {
  if (l < r) {
    var mid = Math.floor((l + r) / 2);
    update(grid[mid], grid_size[mid], "blue");
    mergesort(l, mid);
    mergesort(mid + 1, r);
    // a helper function in which the splitted sub-array index will be passed
    mergeHelper(l, mid, r);
  }
}
function merge() {
  counter_delay = 0;
  mergesort(0, arr_size - 1);
  // console.log(grid_size);
  enable();
}
// #00e5ba -sorted color
