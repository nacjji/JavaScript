function solution(arr) {
  let mini = Math.min(...arr);
  let filt = arr.filter((v) => {
    return v !== mini;
  });
  if (filt.length !== 0) {
    return filt;
  } else {
    return [-1];
  }
}

console.log(solution([1, 2, 3, 4]));
