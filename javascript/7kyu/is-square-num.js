var isSquare = function(n){
  if (n < 0 ){
    return false
  } 
  const squaredInt = Math.sqrt(n);
  if( Number.isInteger(squaredInt)){
    return true;
  } else{
    return false;
  }
}

/* Quicker one liner type solutions below:

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

const isSquare = n => Number.isInteger(Math.sqrt(n));


var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
}

*/
