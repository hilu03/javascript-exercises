const palindromes = function (str) {
  str = str.toUpperCase();
  let words = [];
  for (let i = 0; i<str.length; i++) {
    if (((str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) || (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) || (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57))) {
      words.push(str.charCodeAt(i));
    }
  }
  let reverse = (words.slice()).reverse();
  return reverse.every((word, index) => word === words[index]);
};

// Do not edit below this line
module.exports = palindromes;
