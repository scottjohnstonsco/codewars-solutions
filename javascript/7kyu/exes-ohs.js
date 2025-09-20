function XO(str) {
    let string = str.toLowerCase().split("");
    const total = string.reduce((
    accumulator, currentValue)=> {
      if(currentValue ==="x"){
        return accumulator + 1;
      } else if (currentValue === "o"){
        return accumulator -1;
      } else {
        return accumulator; // unchanged 4 other chars
      }
    }, 0);
  return total === 0;
}
