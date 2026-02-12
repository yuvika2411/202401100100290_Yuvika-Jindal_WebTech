//Spread operator example
let arr1 = [1, 2, { name: 'Yuvika' }];
let arr2 = [...arr1];

console.log(arr2);
arr2[1] = 10;
console.log(arr1);
console.log(arr2);

arr2[2].name = "Jindal";
console.log(arr1);
console.log(arr2);

//if element - deep copy
// if object type - shallow copy

// if it is a primitive value it will be copied by value but if it is a object type it will be copied by reference

// function sum(...numbers ){}
// when using with function it is called rest operator 
