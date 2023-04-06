// напиши решение на js  и подробно поясни на русском языке

function filter_list(l) {
   
  const arr = l.filter(a => a == a.isNaN);
  return arr;
  }
console.log(filter_list([1,2,'aasf','1','123',123])); // 2