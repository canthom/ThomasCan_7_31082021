function sortArray(arrayToSort) {
  arrayToSort.sort(function (a, b) {
    if (a < b) {
      return -1;
    } else {
      return 1;
    }
  });
}

export { sortArray };