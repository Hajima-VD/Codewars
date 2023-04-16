// напиши решение на js  и подробно поясни на русском языке

function powersOfTwo(n){
  let arr = [];
  for (let i=0 ; i<=n ; i++){
    arr=arr+i
  }
 return arr.split('').map(item =>{return Math.pow(2,item)});
}


Вот один из возможных вариантов решения этой задачи:

function powersOfTwo(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(Math.pow(2, i)); // добавляем в массив степень двойки с текущим показателем
  }
  return arr; // возвращаем массив
}

console.log(powersOfTwo(4));

