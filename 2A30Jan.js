//////////////var///////////////////////
/*
console.log(myvar);//undefinedvar Myvar=10;
var myvar=10;
console.log(myvar);//10

var myvar=20;
console.log(myvar);


function demo(){
    var fun=10;
    console.log(fun);
}
//console.log(fun); // fun is not defined  bcz fun is blocked scope or function scope 


//////////////////let///////////////////////////
let my=10;
console.log(my);

//let my=10;   // Identifier 'my' has already been declared , we cant redeclare in same scope


{
    let x=20;
    console.log(x); //20
}

{
    let x=100;//100
    console.log(x);
}


{
    let x=10;
    console.log(x);
    let x=30;//Cannot redeclare block-scoped variable 'x'
    console.log(x)//Cannot redeclare block-scoped variable 'x'
}




{
    let x=10;
    console.log(x);
    {
        let x=100; //inner x ka scope alg hai to error nhi aayega , as its overshadow 
        let y=20;
        console.log(x);
        console.log(y);
    }
    let x=20; //Cannot redeclare block-scoped variable 'x'
    console.log(x);
}




 function demofunction(){
    let a=10;
    var b=20;
    console.log(a);
    console.log(b);
 }
    demofunction();
    console.log(b); //b is not defined
    console.log(a); //a is not defined


    {
        let a=100;
        var b=200;
        console.log(a);
        console.log(b);
    }
    console.log(a); //a is not defined bcz a is block scope, let bs ek block k andar hi valid hai
    console.log(b); //200  bcz var is function scope not block scope, as we can see that the block is not a function and b is accessible here



    console.log(x);//ReferenceError: Cannot access 'x' before initialization bcz of tdz  // let is hoisted but not intilaised 
    let x=10;
    console.log(x);

    console.log(u);//undefined bcz of hoisting  // var is hoisted and initalised 
    var u=20;
    console.log(u);




/////////////////const///////////////////////////

    const pi=3.14;
    pi=3.145; //Assignment to constant variable.
    console.log(pi); //assignment to constant variable error




////now const wrt to reference 


const arr=[10,20,30];
arr.push(40);
console.log(arr);//[ 10, 20, 30, 40 ]

arr=[100,200,300]; //Assignment to constant variable.  bcz arr is constant reference
console.log(arr); //Assignment to constant variable. error

//es6 means ecma -> europian computer manufacturers association



///anonymous function///////////
//an anonymous function is a function that does not have a name and is often used as an argument to other functions or assigned to variables.
let multiply=function(x,y){
    return x*y;
}
console.log(multiply(10,20)); //200

//advantage of anonymous function is we can pass it as an argument to other functions
//anonymous function can help reduce memory usage since they are not stored in memory with a specific name.



//////////////arrow function///////////////////////
// arrow functions provide a more concise syntax for writing functions in JavaScript. They are often used for short, single-line functions or as callbacks.

let add=(a,b)=>a+b;
console.log(add(10,20)); //30


let f1=()=>x;
//same as
  function f1(){
    return x;
  }




/// if 1 parameter 
let f1=x=>x*x;
console.log(f1(10)); //100

//if no parameter
let f2=()=>console.log("hello");
f2(); //hello

//more than 1 parameter
let f3=(x,y)=>x+y;
console.log(f3(10,20)); //30

//multi line arrow function  or more than 1 statement
let f4=(x,y)=>{
    let sum=x+y;
    return sum;
}

// more than 1 statement 

*/