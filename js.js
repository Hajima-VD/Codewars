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