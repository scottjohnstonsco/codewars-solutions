function spinWords(string){
  const words = string.split(" ");
  
  const newWords = words.map(word => {
    if(word.length >= 5){
      //reverse this word and return it
     return word.split("").reverse().join("");
    } else{
      return word;
    }
  });
  return newWords.join(" ");
}

/*
FUNCTION: spinWords(string)

1. string.split(" ")
   - The input is a string of words separated by spaces.
   - Strings in JavaScript are immutable, so we can't reverse them directly.
   - .split(" ") turns the string into an array of words.
     Example: "Hey fellow warriors".split(" ") → ["Hey", "fellow", "warriors"]

2. words.map(word => { ... })
   - .map() iterates over each word in the array and returns a new array of the same length.
   - We use it to decide if a word needs to be reversed:
       - If the word has 5 or more letters → reverse it.
       - Otherwise → leave it unchanged.
   - The result is stored in newWords.

3. Reversing a word: word.split("").reverse().join("")
   - Strings do not have a .reverse() method, so we first convert the word into an array of characters using .split("").
     Example: "hello".split("") → ["h","e","l","l","o"]
   - .reverse() reverses the array in place.
     ["h","e","l","l","o"].reverse() → ["o","l","l","e","h"]
   - .join("") converts the array back into a string.
     ["o","l","l","e","h"].join("") → "olleh"
   - This three-step process is necessary to reverse words in a string.

4. newWords.join(" ")
   - After .map(), we have an array of words (some reversed, some unchanged).
   - .join(" ") concatenates the words back into a single string with spaces.
     Example: ["Hey","wollef","sroirraw"].join(" ") → "Hey wollef sroirraw"

5. RETURN
   - Finally, return the transformed string.
   - The overall pattern is: split string → transform each word → join back into string.

KEY CONCEPTS:
- Strings are immutable; arrays are mutable, which allows methods like .reverse().
- split → map → join is a common and clean pattern for word-level string manipulation.
- map always returns a new array; it does not modify the original array.
*/
