function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}

/* This Kata kinda wanted me to use a simple if/else statement but i went for ternary operator 

function _if(value, func1, func2) {
  if (value) {
    return func1();  // if value is truthy, call func1
  } else {
    return func2();  // otherwise, call func2
  }
    
}*/