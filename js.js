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



function bmi(weight, height) {
  const num = weight / (height*height)
  console.log(num);
  if  (num<= 18.5){
    return "Underweight";
  } else  if(num<= 25.0){
    return  "Normal";
  }else if(num<=30.0){
    return "Overweight";
  }else (num>30 )
  return "Obese"
}
console.log(bmi(80, 1.80))


function deleteNth(arr,n){
  let obj = {};
  let result = [];
  
  for(let i = 0; i < arr.length; i++) {
    let num = arr[i];
    obj[num] = obj[num] ? obj[num] + 1 : 1;
    
    if(obj[num] <= n) {
      result.push(num);
    }
  }
  
  return result;
}

console.log(deleteNth([20,37,20,21], 1))

function test(arr){

  let arrM = arr.split('');
  for (let i = 0; i < arrM.length; i++) {
    if (+arrM[i]!=0){
    return  arrM[i]= +arrM[i]*(10**(arrM.length-i)) ;
    } else  {
      return "";
    }
  }
  return arrM;
}


console.log(test('231412'));


const arr=[2,23,55,656,77];
console.log(arr[3] + 22);


var array = [1, 2, 3, 4, 5];


for(var i = 0; i < array.length; i++) {
  array[i] =  array[i] ;
}

console.log(array); // [11, 12, 13, 14, 15]
