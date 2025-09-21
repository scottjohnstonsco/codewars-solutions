function findShort(s){
  let splitStr = s.split(" ");
  let wordSize = splitStr.length;
  
  let shortest = Infinity;
  
  for(let i= 0; i < wordSize; i++){
    let currentLength = splitStr[i].length;
    if(currentLength < shortest){
      shortest = currentLength;
    }

  }
      return shortest;
}

/*                          Shorter way
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
    */
