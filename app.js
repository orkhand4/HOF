// const numbers = [-15, -10, -5, 0, 5, 10, 15]

// ededlerin hamisini 2-e vur

// let newNumbers = []
// for (let i = 0; i < numbers.length - 1; i++){
//   newNumbers.push(numbers[i] * 2);
// }

// console.log(newNumbers);

// let newNumbers = numbers.map((item) => item * 2);
// console.log(newNumbers);

// let newNumbers2 = numbers.map(item => {
//   return item * 2;
// })
// console.log(newNumbers2);



// 5-den boyuk ededleri tap ve yeni array-e beraber ele

// let newNums = []
// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] > 5){
//       console.log((numbers[i]));
//     }
// }
// console.log(newNums);

//map ile 5-den boyuk ededleri tap ve yeni array-e beraber ele

// let newNumbers = []
// numbers.map(item => {
//   if (item > 5) {
//     newNumbers.push(item)
//   }
// })
// console.log(newNumbers);

// let newNumbers = numbers.filter(item => item > 5)
// console.log(newNumbers);




// 5-den boyuk ededi tap

// let newNumber
// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] > 5){
//       newNumber = numbers[i]
//       break
//     }
// }
// console.log(newNumber);



// let num = numbers.find(item => item > 5)
// console.log(num);



// ededlerin hamisini topla



// const numbers = [5, 10, 15]

// let sum = 0

// for (let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
//     }
//     console.log(sum);

//     let sum2 = numbers.reduce((acc, cur)=> acc + cur, 0)
//     console.log(sum2);
    
    



// ededlerin sirasini tersine chevir



// const numbers = [5, 10, 15, 20, 253]

// const reversedArray = []

// for(let i = numbers.length - 1; i >= 0; i--) {
  
//   reversedArray.push(numbers[i])
// }

// console.log(reversedArray);




// ededlerin hamisi 5-den boyukdurmu?



const numbers = [5, 10, 15, 20, 253]

let isBigger = numbers.every(item => item < 0)
console.log(isBigger);


