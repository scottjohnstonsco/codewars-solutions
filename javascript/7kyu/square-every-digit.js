function squareDigits(num){
  let strNum = num.toString()
  let result = "";
  
  for(let i=0; i<strNum.length; i++){
    let digit = Number(strNum[i]);
    digit = digit * digit;
    digit = digit.toString();
    result = result + digit;
  }
  return Number(result);
}