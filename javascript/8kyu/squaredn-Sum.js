/*Square(n) Sum

.reduce() syntax explanation
You could rename those parameters anything:
and it would still work exactly the same.
It looks silly, but to JavaScript, it just means:

The first parameter (whatever its name) → will receive the accumulated value so far.

The second parameter → will receive the current array element.

The function’s return value becomes the new accumulated value on the next loop.
*/

function squareSum(numbers){
const squares = numbers.map(n => Math.pow(n,2));
const total = squares.reduce((acc, cur)=> acc + cur, 0);
return total;
}
