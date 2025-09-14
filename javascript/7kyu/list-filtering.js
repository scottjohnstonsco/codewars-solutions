function filter_list(l) {
  return l.filter(item => typeof item ==="number")
}

/*  Traditional, longer way

function filter_list(l) {
  let result = [];
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === "number") {
      result.push(l[i]);
    }
  }
  return result;
}


Arrow Function explanation
// Traditional function expression
l.filter(function(item) {
  return typeof item === "number";
});

// Arrow function
l.filter(item => typeof item === "number");
*/
