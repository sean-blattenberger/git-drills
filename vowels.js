function removeVowels(str) {
  return str.replace(/[aeiou]/gi, "");
}

console.log(removeVowels("HelloOOOO") === "Hll");
