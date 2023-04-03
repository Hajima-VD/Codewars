// напиши решение на js  и подробно поясни на русском языке

function persistence(num) {
  while (num.length <1){
    num.split('').reduce((acc, cur) => acc * cur);
    console.log(num);
  console.log(num.length);
  if (num.length <=1 ) {
    return 0 ;
  } else {
  }  
}
}
console.log(persistence('34343')); 

function persistence(num) {
  let arr = num;
  while (arr.length >1){
  arr=num.split('').reduce((acc, cur) => acc*cur);
  console.log(arr);}
}
console.log(persistence('443434')); 


function persistence(num) {
  let arr = num;
  let count = 0
 if (arr.length<=1){
  return 0
 } else {
  while (arr.length > 1) {
    arr = arr.split('').reduce((acc, cur) => acc * cur).toString();
    count++;
  }
  
  return count;
 }
}
console.log(persistence('234234234')); // 2