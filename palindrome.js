var palindrome = function (string) {
  var words = string.split(" ");
  newWords = [];
  words.forEach(function (x) {
    if (x.length % 2 === 0) {
      newWords.push(x.split("").reverse().join(''));
    } else {
      newWords.push(x);
    }
  });
  return newWords.join(" ");
};
