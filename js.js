const reverseSeq = n => {
  // объявляем пустой массив
  let myArray = [];

  // заполняем массив значениями от 0 до 4
  for (let i = 1; i <= n; i++) {
    myArray.push(i);
  }
  return myArray.reverse();
};
console.log(reverseSeq(4));


// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s) {
  return result = (s + (m * 60) + (h * 60 * 60)) * 1000;
}
console.log(past(1, 33, 5));

//    In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printer_error(s) {
  const errorCount = s.split('').filter(char => char > 'm').length;
  const totalCount = s.length;
  return `${errorCount}/${totalCount}`;
}
console.log(printer_error("sjfjakfbjhasbfjhabsf"));


// Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string) {
  return string.split(' ');
}
console.log(stringToArray('heloo my world !!!'))


Вот некоторый код на JavaScript, который сравнивает элементы двух массивов:
const array1 = ['apple', 'banana', 'melon'];
const array2 = ['banana', 'kiwi', 'watermelon'];

const commonElements = array1.filter(value => array2.includes(value));

console.log(commonElements); // Вывод: ['banana']

В этом примере filter() используется для прохода каждого элемента в array1 и проверки, есть ли такой же элемент в array2 с помощью includes(). Если элементы есть и в первом, и во втором массиве, то они добавляются в commonElements.