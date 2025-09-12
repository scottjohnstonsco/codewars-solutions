function highAndLow(numbers){
  const myArray = numbers.split(" ");
  const numberArray = myArray.map(Number);
  const highest = Math.max(...numberArray);
  const lowest = Math.min(... numberArray);
  return `${highest} ${lowest}`;
}