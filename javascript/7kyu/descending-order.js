function descendingOrder(n){
  const text = n.toString();
  const numArray = text.split('');
  numArray.sort((a, b) => b - a);
  const descText = numArray.join('');
  Number(descText);
  return descText;
}


/*
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
  */