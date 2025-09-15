function getMiddle(s) {
  let middle = Math.floor(s.length /2);
  return s.length % 2 === 0
  ? s.slice(middle -1, middle +1)
  : s.charAt(middle);
}


/*          Slower , turn string into array then if statement it
function getMiddle(s) {
  let arr = s.split("");              // make array of characters
  let middle = Math.floor(arr.length / 2);
  
  if (arr.length % 2 === 0) {
    return arr[middle - 1] + arr[middle]; // even
  } else {
    return arr[middle];                   // odd
  }
}
*/