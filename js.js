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



//=================================================================================================


function isValidWalk(walk) {
  let resultw = walk;
  let resultn = walk;
  let results = walk;
  let resulte = walk;
  for (let i = 0; i < walk.length; i++) {
    resultw = resultw.filter((resultw) => resultw == "w");
  }
  for (let i = 0; i < walk.length; i++) {
    resultn = resultn.filter((resultn) => resultn == "n");
  }
  for (let i = 0; i < walk.length; i++) {
    results = results.filter((results) => results == "s");
  }
  for (let i = 0; i < walk.length; i++) {
    resulte = resulte.filter((resulte) => resulte == "e");
  }
  const w = +resultw.length;
  const e = +resulte.length;
  const n = +resultn.length;
  const s = +results.length;
  return (walk.length = 10 && n === s && w === e);
}

console.log(isValidWalk(["w", "w", "w", "w", "w", "e", "e", "e", "e", "e"]));


// Решением этой задачи будет функция, которая принимает на вход массив направлений и возвращает true, если этот массив приведет нас к точке старта и займет 10 минут, и false в противном случае.

// Алгоритм решения такой:

// 1. Создать две переменные для подсчета количества шагов в каждом направлении - vertical и horizontal.
// 2. Пройтись по массиву направлений, и для каждой буквы увеличивать соответствующую переменную на 1 либо уменьшать ее на 1, в зависимости от направления.
// 3. Проверить, что общее количество шагов в каждом направлении равно 0 (иначе мы не вернулись в точку старта).
// 4. Проверить, что общее количество шагов во всех направлениях равно 10 (иначе мы не затратили ровно 10 минут).
// 5. Если оба условия выполнены, вернуть true, иначе вернуть false.

// Используя этот алгоритм, можно написать следующую функцию на JavaScript:


function isValidWalk(walk) {
  let vertical = 0;
  let horizontal = 0;
  for (let direction of walk) {
    switch (direction) {
      case 'n': vertical++; break;
      case 's': vertical--; break;
      case 'e': horizontal++; break;
      case 'w': horizontal--; break;
    }
  }
  return vertical === 0 && horizontal === 0 && walk.length === 10;
}

// Здесь мы пройдемся по массиву walk, используя оператор switch для определения, в какую переменную нам нужно добавить 1 или вычесть 1 в зависимости от направления. Затем мы проверим, что обе переменные равны 0 и длина массива равна 10, и вернем true, если это так.

//=============================================================================================