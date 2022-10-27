findPartitions = (num = 1) => {
  const arr = Array(num + 1).fill(null).map(() => {
    return Array(num + 1).fill(null);
  });
  for (let x = 1; x <= num; x += 1) {
    arr[0][x] = 0;
  }
  for (let i = 0; i <= num; i += 1) {
    arr[i][0] = 1;
  }
  for (let i = 1; i <= num; i += 1) {
    for (let x = 1; x <= num; x += 1) {
      if (i > x) {
        arr[i][x] = arr[i - 1][x];
      } else {
        const exclusive = arr[i - 1][x];
        const inclusive = arr[i][x - i];
        arr[i][x] = exclusive + inclusive;
      }
    }
  }
  return arr[num][num]-1;
};
console.log(findPartitions(61));
