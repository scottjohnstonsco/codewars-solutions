function dnaStrand(dna){
  let dnaArray = dna.split("");
  const pairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  }
  const newDna = dnaArray.map( character => {
    return pairs[character];
  })
  return newDna.join("");
}