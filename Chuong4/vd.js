let numbers = [5, -10, 3, 4, 8, 11, -2];
// let snc = 0;
// let count = 0
// for (let i = 0; i < numbers.length; i++) {
//    if (numbers[i] % 2 === 0) {
//       snc++;
//       count += numbers[i]
//    }
// }
// console.log("Số nguyên chẵn: ", snc);
// console.log(count / snc)

// for (let i = 0; i < numbers.length; i++) {
//    if (numbers[i] === 5) {
//       numbers[i] = 10;
//    }
// }
// console.log(numbers);

// numbers.push(10, 11, 12);
// console.log(numbers);
demSoChan = (list) => {
   let snc = 0;
   let count = 0
   for (let i = 0; i < list.length; i++) {
      if (list[i] % 2 === 0) {
         snc++;
         count += list[i]
      }
   }
   console.log("Số nguyên chẵn là: ", snc)
   return snc, count
}

tbc = (snc, count) => {
   console.log(count / snc)
}

findfive = (list) => {
   for (let i = 0; i < list.length; i++) {
      if (list[i] === 5) {
         list[i] = 10;
      }
   }
   console.log(list);
}
pushnum = (list) => {
   list.push(10, 11, 12);
   console.log(list);
}



tbc(demSoChan(numbers))
findfive(numbers)
pushnum(numbers)