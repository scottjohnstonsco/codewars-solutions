function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
  
}



  /*
  // Math.min + spread way:
function sumTwoSmallestNumbers(numbers) {
  const firstMin = Math.min(...numbers);         
  numbers.splice(numbers.indexOf(firstMin), 1);  
  const secondMin = Math.min(...numbers);        
  return firstMin + secondMin;
}
  */