//function ->mis a reusabl eblock of code that performs a specific task
//function ke sath parameters aate hai  ex-> void sum(a,b) to yha pr a b parameter hai 
//let sum=add(1,2)   1,2 arguments hai 

// function add(a,b){
//     return a+b;
// }
// let sum=add(2,3);
// console.log(sum);
// console.log(add(2,3));


//named function ->a function that  has a name and is assigned to a variable 

let divide=function dividenum(a,b){
    return a/b;
}
console.log(divide(6,3));
console.log(typeof dividenum); // ❌ undefined
console.log(typeof divide);    // ✅ function


/*
divide → variable name (bahar se accessible)
dividenum → sirf function ke andar accessible (internal name)
Isliye console.log(dividenum(6,3)) kaam nahi karega.
*/

/*
let factorial = function fact(n) {
    if (n === 1) return 1;
    return n * fact(n - 1); // 👈 yahan function name use ho raha hai
};

console.log(factorial(5)); // ✅ 120

*/
/*

🎯 Very simple analogy (real life)

Socho:

let factorial = function fact(n) { ... }


👉 factorial = label (nameplate)
👉 fact = person ka real naam (identity)

Agar nameplate badal di, person wahi rehta hai.

Case 1️⃣: Variable name se recursion (problem)
let factorial = function fact(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
};


Ab normally call:

console.log(factorial(3));

Execution:
factorial(3)
→ 3 * factorial(2)
→ 2 * factorial(1)
→ 1


✅ Yahan tak sab sahi

❌ Ab issue dekho (ONE LINE CHANGE)
let factorial = function fact(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
};

let copy = factorial; // another reference
factorial = null;     // 🔥 variable toot gaya

console.log(copy(3));

❌ Error kyun?

Jab recursion ke andar ye line aayi:

factorial(2)


But:

factorial = null;


👉 JS bolega:

"Bhai, factorial function nahi hai"

💥 BOOM — recursion break

Case 2️⃣: Function ke apne naam se recursion (SAFE)
let factorial = function fact(n) {
    if (n === 1) return 1;
    return n * fact(n - 1); // ✅ internal name
};

let copy = factorial;
factorial = null;

console.log(copy(3)); // ✅ 6

✅ Why this works?

fact function ke andar permanently fixed hai

Variable factorial badle ya null ho → koi farq nahi
*/









/*
Function expression me call hamesha variable name se hota hai, function ke internal name se nahi.
*/

/*anonymous function->a function jisko hm koi naam nhi dete 
let multiply=function(a,b){
    return a*b;
}
console.log(multiply(2,3));


//advantage
Example 1️⃣: Anonymous function → GC
let fn = function () {
    console.log("hi");
};

fn = null; // ❌ no reference


👉 GC karega

Function unreachable

Memory free

Example 2️⃣: Named function → GC (same behavior)
let fn = function named() {
    console.log("hi");
};

fn = null; // ❌ no reference


👉 GC karega

Naam hone se koi farq nahi*/



/*ARROW FUNCTION

⚡ Arrow Function – Types (with code)
1️⃣ Single expression (Implicit return)   //means jb single line me  yaa fir single expression 
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5


👉 {} nahi → return automatic




2️⃣ Block body (Explicit return)
const divide = (a, b) => {
    return a / b;
};

console.log(divide(6, 3)); // 2


👉 {} use kiya → return likhna compulsory



3️⃣ Single parameter (no parentheses)
const square = x => x * x;

console.log(square(4)); // 16


👉 Ek hi parameter ho to () optional



4️⃣ No parameter
const greet = () => console.log("Hello!");

greet();


👉 Zero parameter → () mandatory





5️⃣ Returning object (common trap ⚠️)
❌ Wrong:

const user = () => { name: "Vivek" };


✅ Correct:

const user = () => ({ name: "Vivek" });

console.log(user());


👉 Object ko () me wrap karna padta hai*/ 



/*❌❌❌❌❌❌❌❌❌
const square1 = x => return x * x;
const square1 = x =>{ return x * x};
return tbhi use hoga jab {} use ho
*/











///////////////
/*
⚡ Arrow Functions — Clear Explanation
1️⃣ Multi-parameter Arrow Function
✅ Syntax (2 ya zyada parameters)
const add = (a, b, c) => a + b + c;

console.log(add(1, 2, 3)); // 6


📌 Rule:

2 ya zyada parameters → parentheses () compulsory

❌ Wrong:

const add = a, b => a + b; // ❌ syntax error



2️⃣ Implicit Return (No return keyword)
👉 Kab hota hai?

Jab curly braces {} use nahi karte

Function body single expression hoti hai

const multiply = (a, b) => a * b;

console.log(multiply(2, 3)); // 6

🔍 Logic

JS automatically expression ka result return kar deta hai

Code short & clean

📌 Used mostly in callbacks



3️⃣ Explicit Return (Using return)
👉 Kab hota hai?

Jab {} use karte ho

Multiple statements ho sakte hain

const multiply = (a, b) => {
    let result = a * b;
    return result;
};

console.log(multiply(2, 3)); // 6

🔍 Logic

{} ka matlab → manual control

return likhna mandatory



4️⃣ Implicit vs Explicit — Side by Side
// Implicit
const square1 = x => x * x;

// Explicit
const square2 = x => {
    return x * x;
};


✔ Output same
✔ Syntax different



5️⃣ Implicit Return with Object (TRICKY ⚠️)

❌ Wrong (JS samjhega {} as block):

const user = () => { name: "Yuvika" };


✅ Correct:

const user = () => ({ name: "Yuvika" });

console.log(user());


📌 Object ko parentheses me wrap karna zaroori

6️⃣ Multi-parameter + Explicit return example
const average = (a, b, c) => {
    let sum = a + b + c;
    return sum / 3;
};

console.log(average(3, 6, 9)); // 6
💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀
🧠 Quick Rules (Yaad rakhne layak)

✔ 1 param → () optional

✔ 2+ params → () required

✔ No {} → implicit return

✔ {} present → explicit return

✔ Object return → ({})
💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀💀

🎯 One-line interview answer

Arrow functions support implicit return for single expressions and explicit return for block bodies; multiple parameters always require parentheses.
*/
/*


❌ Wrong way ({{}})
const user = () => {{ name: "Yuvika" }};


🔴 Why wrong?

Outer {} → function body

Inner {} → JS confused / invalid block

JS ise object return nahi samajhta

✅ Correct way (({}))
const user = () => ({ name: "Yuvika" });     //jb ek hi line me aa rha ho  {{ name: "Vivek" }}  to hm use ktre hai () bcz vo curly brackets dekhta hai to use return chahiye 

console.log(user()); // { name: 'Yuvika' }

🔍 Logic (simple words)

Arrow function without {} = implicit return

{} normally block hota hai

({}) → JS ko bolte ho:

“Bhai yeh block nahi, OBJECT hai”

✅✅
const user = () => ({
    name: "Yuvika",
    age: 19,
    role: "Developer"
});



Compare with explicit return
const user = () => {
    return { name: "Yuvika" };
};



✅✅✅
const user = () => {return { name: "Yuvika" }};



✔ This also works
✔ But this is explicit return

🧠 Rule yaad rakhne ka

❌ {{}} → kabhi nahi

✅ ({}) → implicit object return

✅ { return {}; } → explicit object return

*/