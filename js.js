// напиши решение на js  и подробно поясни на русском языке


onst reverseSeq = n => {
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

// Complete the solution so that the function will break up camel casing, using a space between words. Example "camelCasing" => "camel Casing" "identifier" => "identifier" "" => ""

function breakCamelCase(str) {
  return str.replace(/[A-Z]/g, ' $&');
}
console.log(breakCamelCase('sjdfjshfHHjhja'));
// Этот код использует метод replace() для поиска всех заглавных букв в 
// строке str и вставки перед ними пробела с помощью регулярного 
// выражения /[A-Z]/g. Здесь g означает глобальный поиск, который 
// находит все соответствия, а не только первое. $& означает найденный
// символ, поэтому перед ним ставится пробел. Таким образом, каждый раз,
// когда функция обнаруживает заглавную букву, она вставляет перед ней
// пробел, что и разбивает Camel Case.


function longestConsec(strarr, k) {
  if (k > strarr.length || k <= 0) {
    return "";
  }

  let longestStr = "";

  for (let i = 0; i < strarr.length - k + 1; i++) {
    const currentStr = strarr.slice(i, i + k).join("");

    if (currentStr.length > longestStr.length) {
      longestStr = currentStr;
    }
  }

  return longestStr;
}


// Эта функция принимает входные параметры `strarr` (массив строк) и `k` (целочисленное значение), и возвращает первую самую длинную строку, состоящую из k последовательных строк из массива.

// Сначала мы проверяем, если k равен 0 или больше, чем длина массива строк `strarr`, то функция возвращает пустую строку. Далее мы создаем переменную `longestStr`, которая будет хранить самую длинную строку. Затем мы используем цикл `for`, чтобы перебрать каждую последовательность строк длины `k` и сравниваем их длины с длиной самой длинной строки. Если текущая последовательность строк длиннее, чем самая длинная, то мы обновляем значение переменной `longestStr`. В конце функции, мы возвращаем значение самой длинной строки.

// Например, если `strarr` равен `["hello", "world", "this", "is", "a", "test"]` и `k` равно `3`, то функция вернет строку `"thisisatest"`. Это происходит потому, что самая длинная строка состоит из трех последовательных строк: `"this"`, `"is"`, и `"a"`.

function noSpace(x) {
  return x = x.replace(/\s+/g, '');
}
console.log("asd 6565 sdsd");


function isPangram(string) {
  return string.replace(/[A-Z]&&[a-z]/g, '$&' ? true : false);
}
console.log('hi sdfdsfdsf jnbjhsbfhj poqwei');

        
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


var summation = function (num) {
  let myArray = [];
  for (let i = 1; i <= num; i++) {
    myArray.push(i);
  }
  return myArray.reduce((acc, cur) => acc + cur);
};
console.log(summation(6));





Вот пример кода на JavaScript, который сортирует массив, оставляя только положительные числа:
let arr = [-1, 5, 0, 3, -4, 2, 7];

let positiveArr = arr.filter(num => num > 0).sort((a, b) => a - b);

console.log(positiveArr); // Output: [2, 3, 5, 7]
Для этого мы используем метод filter, чтобы отфильтровать только положительные числа, а затем метод sort для их сортировки в порядке возрастания.

function positiveSum(arr) {
  let positiveArr = arr.filter(num => num > 0).sort((a, b) => a - b);
  let NegativeArr = arr.filter(num => num <= 0).sort((a, b) => a - b);
  positiveArr = [positiveArr.reduce((acc, cur) => acc + cur)];
  NegativeArr= [NegativeArr.reduce((acc, cur) => acc- cur)];
const sum=positiveArr + NegativeArr;
  return  sum;
};





function positiveSum(arr) {
  
    let positiveArr = arr.filter(num => num > 0 );
    console.log(positiveArr);
    if (positiveArr!=''){
      return positiveArr.reduce((acc, cur) => acc + cur);
    }
    return 0;
  }

  function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }


console.log(positiveSum([-23,-23]));


function countPositivesSumNeinputgatives(input) {
  const sumNegative = input.reduce((a,b)=> a + (b < 0 ? b : 0),0);
  let sumPositive = input.filter(num => num > 0);
  if(sumPositive!='' && sumNegative!=0   ){
    return  sum=[sumPositive[sumPositive.length-1] , sumNegative] ; 
  } else {return sum=[]}
 }


 function countPositivesSumNeinputgatives(input) {
  if (!input || input.length === 0) {
    return [];
  }
  const result = input.reduce((accumulator, currentValue) => {
    if (currentValue > 0) {
      accumulator[0]++;
    } else if (currentValue < 0) {
      accumulator[1] += currentValue;
    }
    return accumulator;
  }, [0, 0]);
  return result;
}


 console.log(countPositivesSumNeinputgatives([12,0,2,34,6,-12,23,-11]))


 const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg*fuelLeft>distanceToPump ? true : false ;
};
console.log(zeroFuel(50,3,2));