/*function countSheeps(sheep) {
  let count = 0;
  for (let i = 0; i < sheep.length; i++){
    if(sheep[i] === true) {
      count++;
    }
  }
  
  return count;
}
*/

function countSheeps(sheep) {
    return sheep.filter(s => s === true).length;
  }