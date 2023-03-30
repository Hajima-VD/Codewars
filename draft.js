// напиши решение на js  и подробно поясни на русском языке
const myNumber = 5.3;
if(Number.isInteger(myNumber)) {
  console.log(`${myNumber} is an integer`);
} else {
  console.log(`${myNumber} is not an integer`);
}


function findNextSquare(sq) {
  const sqrt = sq ** 0.5;
  return Number.isInteger(sqrt) ? (sqrt+1)**2 : -1 ;
}

console.log(findNextSquare(122))