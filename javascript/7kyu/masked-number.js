function maskify(cc) {
  const fullNumber = cc;
  const last4Digits = fullNumber.slice(-4);
  const maskedNumber =
        last4Digits.padStart(fullNumber.length, "#")
  return maskedNumber;
}



/* Other solutions

// card numbers is good
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length,'#')
}


function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

*/
