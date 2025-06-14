// Kata: Did she say hello? (8kyu)
// Link: https://www.codewars.com/kata/56a4addbfd4a55694100001f/train/javascript
// My Solution:

function validateHello(greetings) {
    res =  /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings);
    return res
  }