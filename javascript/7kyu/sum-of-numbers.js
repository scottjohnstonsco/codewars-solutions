function getSum(a, b)
{
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  let n = max - min + 1;
  return (n * (min + max)) / 2;
}