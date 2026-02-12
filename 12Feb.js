let arr=[1,2,3,4,5];
let arr2= [...arr];

arr2[0]=100;

console.log(arr);
console.log(arr2);

//if shallow copy - both arr will be [100,2,3,4,5]
//if deep copy - arr1 - [1,2,3,4,5] and arr2- [100,2,3,4,5]

//when using rest operator it will make a deep copy not a shallow copy 
//operation used is spread operator 
